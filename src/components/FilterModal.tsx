import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentFilters: {
    subject: string;
    specialNeed: string;
  };
  onApplyFilters: (filters: { subject: string; specialNeed: string }) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  currentFilters,
  onApplyFilters,
}) => {
  const [filters, setFilters] = useState(currentFilters);

  if (!isOpen) return null;

  const handleReset = () => {
    const resetFilters = { subject: '', specialNeed: '' };
    setFilters(resetFilters);
    onApplyFilters(resetFilters);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Filtrar Actividades</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Materia
              </label>
              <select
                value={filters.subject}
                onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todas las materias</option>
                <option value="Matemáticas">Matemáticas</option>
                <option value="Lectura y Escritura">Lectura y Escritura</option>
                <option value="Ciencias Naturales">Ciencias Naturales</option>
                <option value="Historia">Historia</option>
                <option value="Educación Física">Educación Física</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Necesidad Especial
              </label>
              <select
                value={filters.specialNeed}
                onChange={(e) => setFilters({ ...filters, specialNeed: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Todas las necesidades</option>
                <option value="Autismo">Autismo</option>
                <option value="TDAH">TDAH</option>
                <option value="Discapacidad Física">Discapacidad Física</option>
                <option value="Discapacidad Visual">Discapacidad Visual</option>
                <option value="Discapacidad Auditiva">Discapacidad Auditiva</option>
              </select>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Limpiar filtros
              </button>
              <div className="space-x-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => onApplyFilters(filters)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Aplicar filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;