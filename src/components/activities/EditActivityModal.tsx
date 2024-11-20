import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { Activity } from '../../types/activity';
import { toast } from 'react-hot-toast';

interface EditActivityModalProps {
  activity: Activity;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (updatedActivity: Activity) => void;
}

const EditActivityModal: React.FC<EditActivityModalProps> = ({
  activity,
  isOpen,
  onClose,
  onUpdate
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: activity.title,
    description: activity.description,
    subject: activity.subject,
    specialNeed: activity.specialNeed,
    detailedDescription: activity.detailedDescription,
    explanation: activity.explanation,
    sourceUrl: activity.sourceUrl || '',
    objectives: typeof activity.objectives === 'string' 
      ? JSON.parse(activity.objectives) 
      : activity.objectives,
    duration: activity.duration,
    materials: typeof activity.materials === 'string'
      ? JSON.parse(activity.materials)
      : activity.materials,
    image: activity.image || ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (formData.title.length < 3) {
      newErrors.title = 'El título debe tener al menos 3 caracteres';
    }
    if (formData.description.length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres';
    }
    if (!formData.subject) {
      newErrors.subject = 'Debes seleccionar una materia';
    }
    if (!formData.specialNeed) {
      newErrors.specialNeed = 'Debes seleccionar una necesidad especial';
    }
    if (formData.detailedDescription.length < 10) {
      newErrors.detailedDescription = 'La descripción detallada debe tener al menos 10 caracteres';
    }
    if (formData.explanation.length < 10) {
      newErrors.explanation = 'La explicación debe tener al menos 10 caracteres';
    }
    if (formData.sourceUrl && !formData.sourceUrl.match(/^https?:\/\/.+/)) {
      newErrors.sourceUrl = 'La URL debe comenzar con http:// o https://';
    }
    if (!formData.duration) {
      newErrors.duration = 'La duración es requerida';
    }
    if (formData.objectives.every((obj: string) => !obj.trim())) {
      newErrors.objectives = 'Debes agregar al menos un objetivo';
    }
    if (formData.materials.every((mat: string) => !mat.trim())) {
      newErrors.materials = 'Debes agregar al menos un material';
    }
    if (formData.image && !formData.image.match(/^https?:\/\/.+/)) {
      newErrors.image = 'La URL de la imagen debe comenzar con http:// o https://';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const handleArrayChange = (index: number, value: string, field: 'objectives' | 'materials') => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [field]: newArray
    });
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  const addArrayItem = (field: 'objectives' | 'materials') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const removeArrayItem = (index: number, field: 'objectives' | 'materials') => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [field]: newArray
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Por favor, corrige los errores en el formulario');
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const dataToSend = {
        ...formData,
        objectives: formData.objectives.filter((obj: string) => obj.trim() !== ''),
        materials: formData.materials.filter((mat: string) => mat.trim() !== ''),
        sourceUrl: formData.sourceUrl || null,
        image: formData.image || null
      };

      const response = await fetch(`http://localhost:5001/api/activities/${activity.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(dataToSend)
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.details) {
          const errorMessages = data.details.map((detail: any) => 
            `${detail.field}: ${detail.message}`
          ).join('\n');
          throw new Error(errorMessages);
        }
        throw new Error(data.error || 'Error al actualizar la actividad');
      }

      toast.success('Actividad actualizada exitosamente');
      onUpdate(data);
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Error al actualizar la actividad');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Editar Actividad</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campos del formulario igual que en NewActivityModal */}
            {/* ... */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Título
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                minLength={3}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Título de la actividad"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción Corta
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                minLength={10}
                rows={2}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Breve descripción de la actividad"
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">{errors.description}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Materia
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona una materia</option>
                  <option value="Matemáticas">Matemáticas</option>
                  <option value="Lectura y Escritura">Lectura y Escritura</option>
                  <option value="Ciencias Naturales">Ciencias Naturales</option>
                  <option value="Historia">Historia</option>
                  <option value="Educación Física">Educación Física</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Necesidad Especial
                </label>
                <select
                  name="specialNeed"
                  value={formData.specialNeed}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.specialNeed ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona una necesidad especial</option>
                  <option value="Autismo">Autismo</option>
                  <option value="TDAH">TDAH</option>
                  <option value="Discapacidad Física">Discapacidad Física</option>
                  <option value="Discapacidad Visual">Discapacidad Visual</option>
                  <option value="Discapacidad Auditiva">Discapacidad Auditiva</option>
                </select>
                {errors.specialNeed && (
                  <p className="mt-1 text-sm text-red-500">{errors.specialNeed}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descripción Detallada
              </label>
              <textarea
                name="detailedDescription"
                value={formData.detailedDescription}
                onChange={handleChange}
                required
                minLength={10}
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.detailedDescription ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Descripción detallada de la actividad"
              />
              {errors.detailedDescription && (
                <p className="mt-1 text-sm text-red-500">{errors.detailedDescription}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Explicación Paso a Paso
              </label>
              <textarea
                name="explanation"
                value={formData.explanation}
                onChange={handleChange}
                required
                minLength={10}
                rows={6}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.explanation ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Explica paso a paso cómo realizar la actividad"
              />
              {errors.explanation && (
                <p className="mt-1 text-sm text-red-500">{errors.explanation}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL de la Fuente (opcional)
              </label>
              <input
                type="url"
                name="sourceUrl"
                value={formData.sourceUrl}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.sourceUrl ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://ejemplo.com/fuente"
              />
              {errors.sourceUrl && (
                <p className="mt-1 text-sm text-red-500">{errors.sourceUrl}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Objetivos
              </label>
              {formData.objectives.map((objective: string, index: number) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={objective}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'objectives')}
                    className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.objectives ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Objetivo de la actividad"
                  />
                  {formData.objectives.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, 'objectives')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('objectives')}
                className="flex items-center text-purple-600 hover:text-purple-700 mt-2"
              >
                <Plus className="h-4 w-4 mr-1" />
                Agregar objetivo
              </button>
              {errors.objectives && (
                <p className="mt-1 text-sm text-red-500">{errors.objectives}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duración
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.duration ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Ej: 30 minutos"
              />
              {errors.duration && (
                <p className="mt-1 text-sm text-red-500">{errors.duration}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Materiales
              </label>
              {formData.materials.map((material: string, index: number) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={material}
                    onChange={(e) => handleArrayChange(index, e.target.value, 'materials')}
                    className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      errors.materials ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Material necesario"
                  />
                  {formData.materials.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeArrayItem(index, 'materials')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addArrayItem('materials')}
                className="flex items-center text-purple-600 hover:text-purple-700 mt-2"
              >
                <Plus className="h-4 w-4 mr-1" />
                Agregar material
              </button>
              {errors.materials && (
                <p className="mt-1 text-sm text-red-500">{errors.materials}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL de la Imagen (opcional)
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                  errors.image ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-500">{errors.image}</p>
              )}
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Guardando...' : 'Guardar Cambios'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditActivityModal;