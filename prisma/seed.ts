import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create demo users
  const users = [
    {
      email: 'maria.garcia@example.com',
      name: 'María García',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en TDAH',
    },
    {
      email: 'carlos.ruiz@example.com',
      name: 'Carlos Ruiz',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en Autismo',
    },
    {
      email: 'ana.martinez@example.com',
      name: 'Ana Martínez',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en TDAH',
    },
    {
      email: 'pedro.sanchez@example.com',
      name: 'Pedro Sánchez',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en Discapacidad Física',
    },
    {
      email: 'laura.gonzalez@example.com',
      name: 'Laura González',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en Discapacidad Física',
    },
    {
      email: 'miguel.torres@example.com',
      name: 'Miguel Torres',
      password: await bcrypt.hash('password123', 10),
      specialty: 'Especialista en Autismo',
    }
  ];

  const createdUsers = await Promise.all(
    users.map(user => 
      prisma.user.create({
        data: user
      })
    )
  );

  // Create activities
  const activities = [
    {
      title: "Suma y Resta con Objetos Cotidianos",
      description: "Utilizar objetos familiares para enseñar conceptos básicos de suma y resta.",
      subject: "Matemáticas",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad está diseñada para ayudar a los estudiantes a comprender conceptos básicos de suma y resta utilizando objetos familiares.",
      explanation: `Pasos para realizar la actividad:
1. Reúne objetos cotidianos como lápices, botones o bloques
2. Organiza los objetos en grupos pequeños
3. Comienza con sumas simples (por ejemplo, 2+3)
4. Usa los objetos para representar físicamente la operación
5. Pide al estudiante que cuente los objetos
6. Registra la operación en papel
7. Repite con diferentes cantidades
8. Introduce la resta de manera similar`,
      sourceUrl: "https://www.understood.org/articles/math-activities-kids-adhd",
      objectives: JSON.stringify([
        "Desarrollar comprensión básica de suma y resta",
        "Mejorar la concentración y atención",
        "Practicar habilidades motoras finas"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Objetos cotidianos (lápices, botones, etc.)",
        "Hojas de trabajo"
      ]),
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500",
      authorId: createdUsers[0].id
    },
    {
      title: "Matemáticas con Música",
      description: "Aprendizaje de conceptos matemáticos a través del ritmo.",
      subject: "Matemáticas",
      specialNeed: "Autismo",
      detailedDescription: "Actividad que combina matemáticas y música para un aprendizaje multisensorial.",
      explanation: `Pasos para realizar la actividad:
1. Selecciona una canción con ritmo claro y repetitivo
2. Introduce patrones numéricos simples con palmadas
3. Demuestra cómo contar con el ritmo
4. Anima a los estudiantes a seguir el patrón
5. Incorpora movimientos corporales
6. Usa instrumentos musicales simples
7. Practica secuencias numéricas
8. Refuerza con visuales`,
      sourceUrl: "https://www.autismspeaks.org/music-therapy-autism",
      objectives: JSON.stringify([
        "Aprender patrones matemáticos",
        "Desarrollar ritmo",
        "Mejorar memoria auditiva"
      ]),
      duration: "40 minutos",
      materials: JSON.stringify([
        "Instrumentos musicales",
        "Tarjetas numéricas"
      ]),
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500",
      authorId: createdUsers[1].id
    }
  ];

  for (const activity of activities) {
    await prisma.activity.create({
      data: activity
    });
  }

  console.log('✅ Seed data created successfully');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });