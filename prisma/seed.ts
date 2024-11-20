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
      authorId: createdUsers[0].id
    },
    {
      title: "Conteo con Objetos Visuales",
      description: "Utilizar objetos visuales para ayudar a los niños a aprender a contar.",
      subject: "Matemáticas",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad utiliza objetos visuales que son significativos para el niño, facilitando el aprendizaje del conteo.",
      explanation: `Pasos para realizar la actividad:
    1. Reúne objetos que sean de interés para el niño (juguetes, frutas, etc.).
    2. Coloca los objetos en una mesa.
    3. Pide al niño que cuente los objetos uno por uno.
    4. Usa tarjetas con números para asociar la cantidad contada con su representación numérica.
    5. Repite la actividad con diferentes conjuntos de objetos.`,
      sourceUrl: "https://riseupforautism.com/es/blog/how-to-teach-math-to-autistic-child",
      objectives: JSON.stringify([
        "Desarrollar habilidades de conteo",
        "Fomentar la asociación entre números y cantidades",
        "Mejorar la atención y concentración"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Objetos visuales (juguetes, frutas, etc.)",
        "Tarjetas con números"
      ]),
      authorId: createdUsers[1].id
    },
    {
      title: "Juego de Dados para Operaciones Matemáticas",
      description: "Usar dados para practicar operaciones matemáticas básicas mediante un juego interactivo.",
      subject: "Matemáticas",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad utiliza dados para ayudar a los niños a identificar operaciones matemáticas a través del juego, fomentando el aprendizaje lúdico.",
      explanation: `Pasos para realizar la actividad:
    1. Consigue dos dados: uno con operaciones (+, -, x, /) y otro con números.
    2. Lanza ambos dados y observa el signo y el número.
    3. Realiza la operación indicada usando objetos o dibujos.
    4. Anota el resultado en una hoja de trabajo.
    5. Repite el proceso varias veces, permitiendo que el niño lance los dados.`,
      sourceUrl: "https://www.fundacioncadah.org/web/articulo/como-ensenar-matematicas-a-traves-del-juego-a-ninos-con-tdah.html",
      objectives: JSON.stringify([
        "Fomentar el aprendizaje a través del juego",
        "Desarrollar habilidades sociales al jugar en grupo",
        "Mejorar la comprensión de operaciones matemáticas"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "2 Dados",
        "Hojas de trabajo"
      ]),
      authorId: createdUsers[5].id
    },
    {
      title: "Sumas y Restas con Materiales Adaptados",
      description: "Utilizar materiales adaptados para facilitar la enseñanza de suma y resta.",
      subject: "Matemáticas",
      specialNeed: "Discapacidades Físicas",
      detailedDescription: "Esta actividad utiliza materiales adaptados que permiten a los niños participar activamente en las operaciones matemáticas sin importar sus limitaciones físicas.",
      explanation: `Pasos para realizar la actividad:
    1. Proporciona materiales como bloques grandes o tarjetas con velcro que sean fáciles de manipular.
    2. Presenta problemas simples de suma y resta utilizando estos materiales.
    3. Permite que el niño use sus manos o herramientas adaptadas para contar y mover los bloques o tarjetas según sea necesario.
    4. Anota las operaciones en una hoja mientras se realizan las manipulaciones físicas.`,
      sourceUrl: "https://www.pintandosonrisas.top/ejercicios-de-matematicas-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Facilitar el aprendizaje mediante materiales accesibles",
        "Fomentar la participación activa en las matemáticas",
        "Desarrollar habilidades motoras finas"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Bloques grandes o tarjetas con velcro",
        "Hojas de trabajo"
      ]),
      authorId: createdUsers[3].id
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
      authorId: createdUsers[1].id
    },
    {
      title: "Lectoescritura con Pictogramas",
      description: "Utilizar pictogramas para enseñar palabras y frases a los niños con autismo.",
      subject: "Lectura y Escritura",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad utiliza pictogramas como herramientas visuales que ayudan a los niños a asociar imágenes con palabras, facilitando la comprensión y el aprendizaje.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona una serie de pictogramas que representen palabras comunes (por ejemplo, "casa", "perro").
    2. Muestra el pictograma al niño y di la palabra en voz alta.
    3. Pide al niño que repita la palabra mientras señala el pictograma.
    4. Repite el proceso con diferentes pictogramas, creando una pequeña historia o secuencia.`,
      sourceUrl: "https://www.pintandosonrisas.top/actividades-de-lectoescritura-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Desarrollar habilidades de reconocimiento de palabras",
        "Mejorar la comunicación verbal",
        "Fomentar la asociación entre imágenes y palabras"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Pictogramas impresos",
        "Hojas de trabajo"
      ]),
      authorId: createdUsers[5].id
    },
    {
      title: "Asociaciones de Palabras con Objetos",
      description: "Enseñar a los niños a asociar palabras escritas con objetos físicos.",
      subject: "Lectura y Escritura",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad permite que los niños relacionen palabras escritas con objetos tangibles, ayudando a mejorar su vocabulario y comprensión.",
      explanation: `Pasos para realizar la actividad:
    1. Reúne objetos cotidianos (por ejemplo, una pelota, un libro).
    2. Escribe las palabras correspondientes en tarjetas.
    3. Muestra al niño el objeto y la tarjeta al mismo tiempo.
    4. Pide al niño que repita la palabra mientras señala el objeto.
    5. Repite con diferentes objetos y palabras.`,
      sourceUrl: "https://teleton.org/consejos-de-lectoescritura-para-ninos-y-ninas-con-tea/",
      objectives: JSON.stringify([
        "Fomentar la identificación de palabras en contexto",
        "Desarrollar habilidades de comunicación",
        "Mejorar la memoria visual"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Objetos cotidianos",
        "Tarjetas con palabras"
      ]),
      authorId: createdUsers[4].id
    },
    {
      title: "Lectura Interactiva con Aplicaciones Educativas",
      description: "Usar aplicaciones interactivas para fomentar la lectura en niños con TDAH.",
      subject: "Lectura y Escritura",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad utiliza tecnología interactiva para captar la atención del niño mientras mejora sus habilidades de lectura.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona una aplicación educativa centrada en la lectura adecuada para su edad.
    2. Permite que el niño explore la aplicación durante un tiempo determinado.
    3. Participa junto al niño, leyendo juntos las historias o actividades interactivas.
    4. Haz preguntas sobre lo que han leído para fomentar la comprensión.`,
      sourceUrl: "https://www.fundacioncadah.org/web/articulo/como-ensenar-matematicas-a-traves-del-juego-a-ninos-con-tdah.html",
      objectives: JSON.stringify([
        "Aumentar el interés por la lectura",
        "Mejorar las habilidades de comprensión lectora",
        "Fomentar el uso responsable de tecnología"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Tablet o dispositivo móvil",
        "Aplicación educativa"
      ]),
      authorId: createdUsers[0].id
    },
    {
      title: "Cuentos Cortos con Actividades Creativas",
      description: "Leer cuentos cortos y realizar actividades creativas relacionadas.",
      subject: "Lectura y Escritura",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad combina lectura con creatividad, manteniendo a los niños interesados y motivados.",
      explanation: `Pasos para realizar la actividad:
    1. Escoge un cuento corto que sea atractivo para el niño.
    2. Lee el cuento juntos, haciendo pausas para discutir lo que sucede en la historia.
    3. Después de leer, pide al niño que dibuje su parte favorita del cuento o que invente un final alternativo.
    4. Anima al niño a compartir su dibujo o historia con otros.`,
      sourceUrl: "https://www.cerebrofeliz.org/tdah-problemas-con-matematicas/",
      objectives: JSON.stringify([
        "Estimular la creatividad",
        "Mejorar la comprensión lectora",
        "Fomentar la expresión personal"
      ]),
      duration: "45 minutos",
      materials: JSON.stringify([
        "Cuento corto",
        "Materiales de dibujo"
      ]),
      authorId: createdUsers[1].id
    },
    {
      title: "Lectura Interactiva con Aplicaciones Educativas",
      description: "Usar aplicaciones interactivas para fomentar la lectura en niños con TDAH.",
      subject: "Lectura y Escritura",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad utiliza tecnología interactiva para captar la atención del niño mientras mejora sus habilidades de lectura.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona una aplicación educativa centrada en la lectura adecuada para su edad.
    2. Permite que el niño explore la aplicación durante un tiempo determinado.
    3. Participa junto al niño, leyendo juntos las historias o actividades interactivas.
    4. Haz preguntas sobre lo que han leído para fomentar la comprensión.`,
      sourceUrl: "https://www.fundacioncadah.org/web/articulo/como-ensenar-matematicas-a-traves-del-juego-a-ninos-con-tdah.html",
      objectives: JSON.stringify([
        "Aumentar el interés por la lectura",
        "Mejorar las habilidades de comprensión lectora",
        "Fomentar el uso responsable de tecnología"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Tablet o dispositivo móvil",
        "Aplicación educativa"
      ]),
      authorId: createdUsers[2].id
    },
    {
      title: "Cuentos Cortos con Actividades Creativas",
      description: "Leer cuentos cortos y realizar actividades creativas relacionadas.",
      subject: "Lectura y Escritura",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad combina lectura con creatividad, manteniendo a los niños interesados y motivados.",
      explanation: `Pasos para realizar la actividad:
    1. Escoge un cuento corto que sea atractivo para el niño.
    2. Lee el cuento juntos, haciendo pausas para discutir lo que sucede en la historia.
    3. Después de leer, pide al niño que dibuje su parte favorita del cuento o que invente un final alternativo.
    4. Anima al niño a compartir su dibujo o historia con otros.`,
      sourceUrl: "https://www.cerebrofeliz.org/tdah-problemas-con-matematicas/",
      objectives: JSON.stringify([
        "Estimular la creatividad",
        "Mejorar la comprensión lectora",
        "Fomentar la expresión personal"
      ]),
      duration: "45 minutos",
      materials: JSON.stringify([
        "Cuento corto",
        "Materiales de dibujo"
      ]),
      authorId: createdUsers[3].id
    },
    {
      title: "Taller de Sentidos Científicos",
      description: "Utilizar los sentidos para explorar las características de diferentes animales.",
      subject: "Ciencias Naturales",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad permite a los niños descubrir las características de animales como osos panda, búhos y tortugas a través de estaciones sensoriales.",
      explanation: `Pasos para realizar la actividad:
    1. Organiza estaciones sensoriales con diferentes animales.
    2. En la estación visual, muestra vídeos y ejemplares reales.
    3. En la estación auditiva, identifica cantos y sonidos de los animales.
    4. En la estación olfativa, investiga olores asociados a sus hábitats.
    5. En la estación táctil, permite que los niños toquen texturas como pelaje y escamas.`,
      sourceUrl: "https://www.mncn.csic.es/es/visita-el-mncn/actividades-educacion/taller-sentidos-cientificos",
      objectives: JSON.stringify([
        "Fomentar la exploración sensorial",
        "Desarrollar habilidades de observación",
        "Mejorar la comunicación sobre experiencias sensoriales"
      ]),
      duration: "1 hora",
      materials: JSON.stringify([
        "Vídeos de animales",
        "Ejemplares reales o réplicas",
        "Materiales para estaciones sensoriales"
      ]),
      authorId: createdUsers[4].id
    },
    {
      title: "Uso de Pictogramas en Ciencias Naturales",
      description: "Utilizar pictogramas para enseñar conceptos básicos de ciencias naturales.",
      subject: "Ciencias Naturales",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad utiliza pictogramas para ayudar a los niños a comprender conceptos básicos sobre el medio ambiente y los seres vivos.",
      explanation: `Pasos para realizar la actividad:
    1. Proporciona un conjunto de pictogramas que representen conceptos clave (por ejemplo, agua, plantas, animales).
    2. Presenta cada pictograma y discute su significado con el niño.
    3. Pide al niño que asocie pictogramas con ejemplos del mundo real (por ejemplo, señalar una planta).
    4. Realiza un pequeño juego donde el niño debe identificar los pictogramas en su entorno.`,
      sourceUrl: "https://www.autismonavarra.com/2018/09/materiales-3o-primaria-ciencias-naturales-y-sociales/",
      objectives: JSON.stringify([
        "Facilitar la comprensión de conceptos científicos",
        "Fomentar la asociación entre imágenes y palabras",
        "Mejorar las habilidades comunicativas"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Pictogramas impresos",
        "Ejemplares reales o imágenes"
      ]),
      authorId: createdUsers[0].id
    },
    {
      title: "Experimentos Científicos Cortos",
      description: "Realizar experimentos sencillos y cortos que mantengan la atención de los niños.",
      subject: "Ciencias Naturales",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad involucra a los niños en experimentos prácticos que fomentan su curiosidad e interés por las ciencias naturales.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona un experimento simple (por ejemplo, hacer un volcán con bicarbonato).
    2. Reúne todos los materiales necesarios antes de comenzar.
    3. Explica el experimento paso a paso mientras lo realizas junto al niño.
    4. Anima al niño a hacer preguntas y observar los resultados.
    5. Discute lo que sucedió al final del experimento.`,
      sourceUrl: "https://www.fundacioncadah.org/web/articulo/como-hacer-experimentos-cientificos-en-casa/",
      objectives: JSON.stringify([
        "Fomentar el interés por la ciencia",
        "Mejorar la atención y concentración durante actividades prácticas",
        "Desarrollar habilidades de observación"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Materiales para el experimento (bicarbonato, vinagre, etc.)",
        "Hojas para anotar observaciones"
      ]),
      authorId: createdUsers[1].id
    },
    {
      title: "Exploración del Entorno Natural",
      description: "Realizar una exploración al aire libre para observar plantas y animales.",
      subject: "Ciencias Naturales",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad promueve el aprendizaje activo mediante la observación directa del entorno natural, manteniendo a los niños comprometidos e interesados.",
      explanation: `Pasos para realizar la actividad:
    1. Organiza una salida al aire libre (parque, jardín).
    2. Proporciona una lista de elementos naturales a buscar (hojas, flores, insectos).
    3. Anima a los niños a observar y recolectar ejemplos durante la exploración.
    4. Al regresar, discute lo que encontraron y sus características.`,
      sourceUrl: "https://www.cerebrofeliz.org/tdah-problemas-con-matematicas/",
      objectives: JSON.stringify([
        "Fomentar el aprendizaje activo",
        "Mejorar las habilidades de observación",
        "Desarrollar un sentido de responsabilidad hacia el medio ambiente"
      ]),
      duration: "45 minutos",
      materials: JSON.stringify([
        "Lista de búsqueda",
        "Cesta o bolsa para recolectar"
      ]),
      authorId: createdUsers[2].id
    },
    {
      title: "Observación de Plantas en Macetas Adaptadas",
      description: "Usar macetas adaptadas para observar el crecimiento de plantas en el aula o en casa.",
      subject: "Ciencias Naturales",
      specialNeed: "Discapacidades Físicas",
      detailedDescription: "Esta actividad permite a los niños participar en el cuidado y observación del crecimiento de plantas utilizando macetas accesibles según sus necesidades físicas.",
      explanation: `Pasos para realizar la actividad:
    1. Proporciona macetas adaptadas que sean fáciles de manejar (con asas o ruedas).
    2. Permite que cada niño plante semillas o plántulas en su maceta.
    3. Establece un calendario para regar y cuidar las plantas juntos.
    4. Anima a los niños a observar el crecimiento y registrar cambios en un diario.`,
      sourceUrl: "https://www.pintandosonrisas.top/ejercicios-de-matematicas-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Fomentar el interés por la botánica",
        "Desarrollar habilidades motoras finas",
        "Mejorar la responsabilidad en el cuidado de seres vivos"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Macetas adaptadas",
        "Tierra y semillas/plántulas",
        "Diario de observación"
      ]),
      authorId: createdUsers[3].id
    },
    {
      title: "Experimentos Científicos con Materiales Accesibles",
      description: "Realizar experimentos utilizando materiales accesibles que no requieran manipulación complicada.",
      subject: "Ciencias Naturales",
      specialNeed: "Discapacidades Físicas",
      detailedDescription: "Esta actividad permite a los niños participar en experimentos científicos sin restricciones físicas, utilizando herramientas adaptadas si es necesario.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona un experimento simple (por ejemplo, crear un arcoíris con agua y luz).
    2. Asegúrate de que todos los materiales sean accesibles (pueden ser manipulados fácilmente).
    3. Explica cada paso del experimento mientras lo realizas junto al niño.
    4. Permite que el niño participe activamente según sus capacidades físicas.`,
      sourceUrl: "https://www.pintandosonrisas.top/ejercicios-de-matematicas-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Fomentar la curiosidad científica",
        "Desarrollar habilidades prácticas en ciencia",
        "Estimular el pensamiento crítico"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Materiales accesibles para experimentos",
        "Hojas para registrar resultados"
      ]),
      authorId: createdUsers[4].id
    },
    {
      title: "Línea de Tiempo Visual",
      description: "Crear una línea de tiempo visual de eventos históricos importantes.",
      subject: "Historia",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad ayuda a los niños a visualizar la secuencia de eventos históricos mediante imágenes y pictogramas.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona un período histórico (por ejemplo, la Revolución Mexicana).
    2. Reúne imágenes y pictogramas que representen eventos clave.
    3. Crea una línea de tiempo en una cartulina o pizarra.
    4. Pide al niño que coloque las imágenes en el orden correcto.
    5. Discute cada evento mientras lo colocan en la línea de tiempo.`,
      sourceUrl: "https://www.educaciontrespuntocero.com/recursos/linea-de-tiempo-educativa/",
      objectives: JSON.stringify([
        "Fomentar la comprensión cronológica",
        "Desarrollar habilidades de organización",
        "Mejorar la comunicación sobre eventos históricos"
      ]),
      duration: "45 minutos",
      materials: JSON.stringify([
        "Cartulina o pizarra",
        "Imágenes y pictogramas",
        "Pegamento"
      ]),
      authorId: createdUsers[5].id
    },
    {
      title: "Juego de Roles Históricos",
      description: "Realizar un juego de roles donde los niños representan personajes históricos.",
      subject: "Historia",
      specialNeed: "Autismo",
      detailedDescription: "Esta actividad permite a los niños explorar diferentes personajes históricos a través del juego, fomentando la empatía y el entendimiento.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona personajes históricos relevantes (por ejemplo, Emiliano Zapata).
    2. Proporciona información básica sobre cada personaje.
    3. Permite que los niños elijan un personaje y se preparen para representarlo.
    4. Organiza una pequeña presentación donde cada niño explique su personaje y su importancia histórica.`,
      sourceUrl: "https://www.educaciontrespuntocero.com/recursos/juegos-de-rol-en-el-aula/",
      objectives: JSON.stringify([
        "Fomentar la empatía hacia personajes históricos",
        "Desarrollar habilidades de comunicación",
        "Mejorar la comprensión histórica"
      ]),
      duration: "1 hora",
      materials: JSON.stringify([
        "Material informativo sobre personajes",
        "Accesorios para disfraces (opcional)"
      ]),
      authorId: createdUsers[0].id
    },
    {
      title: "Búsqueda del Tesoro Histórica",
      description: "Realizar una búsqueda del tesoro basada en hechos históricos.",
      subject: "Historia",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad mantiene a los niños activos mientras aprenden sobre eventos históricos importantes mediante pistas y objetos relacionados.",
      explanation: `Pasos para realizar la actividad:
    1. Crea pistas relacionadas con eventos históricos (por ejemplo, fechas o personajes).
    2. Esconde las pistas en diferentes lugares del aula o área externa.
    3. Divide a los niños en equipos y dales la primera pista.
    4. Cada pista llevará a la siguiente hasta encontrar un "tesoro" final (puede ser un libro o un premio).`,
      sourceUrl: "https://www.educaciontrespuntocero.com/recursos/busqueda-del-tesoro/",
      objectives: JSON.stringify([
        "Fomentar el aprendizaje activo",
        "Mejorar la atención y concentración",
        "Desarrollar habilidades de trabajo en equipo"
      ]),
      duration: "1 hora",
      materials: JSON.stringify([
        "Pistas impresas",
        "Pequeños premios"
      ]),
      authorId: createdUsers[1].id
    },
    {
      title: "Documentales Cortos y Discusión",
      description: "Ver documentales cortos sobre eventos históricos y discutirlos en grupo.",
      subject: "Historia",
      specialNeed: "TDAH",
      detailedDescription: "Esta actividad utiliza documentales breves para captar la atención de los niños y fomentar discusiones significativas sobre historia.",
      explanation: `Pasos para realizar la actividad:
    1. Selecciona un documental corto relacionado con un evento histórico (por ejemplo, la llegada de los españoles a América).
    2. Proyecta el documental en clase o usa dispositivos móviles.
    3. Después de verlo, organiza una discusión donde los niños puedan expresar sus opiniones y preguntas.`,
      sourceUrl: "https://www.educaciontrespuntocero.com/recursos/documentales-en-el-aula/",
      objectives: JSON.stringify([
        "Fomentar el interés por la historia",
        "Mejorar habilidades de discusión",
        "Estimular el pensamiento crítico"
      ]),
      duration: "30 minutos",
      materials: JSON.stringify([
        "Documental corto",
        "Dispositivo para proyección"
      ]),
      authorId: createdUsers[2].id
    },
    {
      title: "Creación de un Mapa Histórico Accesible",
      description: "Diseñar un mapa accesible que muestre eventos históricos importantes.",
      subject: "Historia",
      specialNeed: "Discapacidades Físicas",
      detailedDescription: "Esta actividad permite a los niños trabajar juntos para crear un mapa que represente eventos históricos, utilizando materiales accesibles según sus necesidades.",
      explanation: `Pasos para realizar la actividad:
    1. Proporciona materiales como cartón, marcadores y texturas (por ejemplo, papel lija para montañas).
    2. Selecciona un período histórico y discute los eventos clave que deben incluirse en el mapa.
    3. Permite que cada niño contribuya al mapa según sus capacidades físicas (dibujando, pegando materiales).`,
      sourceUrl: "https://www.pintandosonrisas.top/ejercicios-de-matematicas-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Fomentar el trabajo colaborativo",
        "Desarrollar habilidades creativas",
        "Mejorar la comprensión geográfica e histórica"
      ]),
      duration: "1 hora",
      materials: JSON.stringify([
        "Cartón, marcadores, texturas",
        "Materiales accesibles"
      ]),
      authorId: createdUsers[3].id
    },
    {
      title: "Presentaciones Multimedia sobre Eventos Históricos",
      description: "Crear presentaciones multimedia sobre eventos históricos utilizando herramientas accesibles.",
      subject: "Historia",
      specialNeed: "Discapacidades Físicas",
      detailedDescription: "Esta actividad permite a los niños investigar eventos históricos y presentarlos utilizando tecnología adaptada según sus necesidades físicas.",
      explanation: `Pasos para realizar la actividad:
    1. Permite que cada niño elija un evento histórico que le interese investigar.
    2. Proporciona acceso a computadoras o tabletas con software accesible para crear presentaciones (PowerPoint, Canva).
    3. Anima a cada niño a presentar su trabajo al grupo usando tecnología asistiva si es necesario.`,
      sourceUrl: "https://www.pintandosonrisas.top/ejercicios-de-matematicas-para-ninos-con-autismo/",
      objectives: JSON.stringify([
        "Fomentar la investigación independiente",
        "Desarrollar habilidades tecnológicas",
        "Mejorar las habilidades de presentación"
      ]),
      duration: "1 hora",
      materials: JSON.stringify([
        "Computadoras o tabletas",
        "Software de presentación"
      ]),
      authorId: createdUsers[4].id
    },
    {
      "title": "Circuito de Habilidades Motoras",
      "description": "Crear un circuito de estaciones que desarrolle habilidades motoras básicas.",
      "subject": "Educación Física",
      "specialNeed": "Autismo",
      "detailedDescription": "Esta actividad permite a los niños practicar habilidades motoras en un ambiente estructurado, lo que ayuda a mejorar su coordinación y equilibrio.",
      "explanation": `Pasos para realizar la actividad:
    1. Diseña un circuito con diferentes estaciones (por ejemplo, saltar, lanzar, caminar sobre una línea).
    2. Explica cada estación y sus objetivos antes de comenzar.
    3. Permite que los niños practiquen en cada estación durante un tiempo determinado.
    4. Repite el circuito varias veces, aumentando gradualmente la dificultad.`,
      "sourceUrl": "https://www.scielosp.org/pdf/rsap/2018.v20n3/390-395/es",
      "objectives": JSON.stringify([
        "Mejorar habilidades motoras y coordinación",
        "Fomentar la socialización entre los niños",
        "Desarrollar la atención y concentración"
      ]),
      "duration": "1 hora",
      "materials": JSON.stringify([
        "Colchonetas",
        "Pelotas",
        "Cuerdas o líneas marcadoras"
      ]),
      authorId: createdUsers[5].id
    },
    {
      "title": "Natación Adaptada",
      "description": "Realizar sesiones de natación adaptadas para mejorar la confianza y las habilidades acuáticas.",
      "subject": "Educación Física",
      "specialNeed": "Autismo",
      "detailedDescription": "La natación es una actividad que muchos niños con autismo disfrutan, ya que les proporciona una sensación de libertad y relajación.",
      "explanation": `Pasos para realizar la actividad:
    1. Organiza sesiones de natación en una piscina con supervisión adecuada.
    2. Introduce a los niños al agua gradualmente, permitiendo que se familiaricen con el entorno.
    3. Utiliza juegos acuáticos para enseñar habilidades básicas de natación (flotar, patalear).
    4. Anima a los niños a practicar en parejas o grupos pequeños para fomentar la interacción social.`,
      "sourceUrl": "https://www.redcenit.com/deporte-para-ninos-con-tea-tipos-y-beneficios/",
      "objectives": JSON.stringify([
        "Mejorar habilidades acuáticas",
        "Fomentar la relajación y el bienestar",
        "Desarrollar confianza en el agua"
      ]),
      "duration": "30 minutos",
      "materials": JSON.stringify([
        "Piscina",
        "Flotadores o materiales de apoyo"
      ]),
      authorId: createdUsers[0].id
    }, {
      "title": "Juegos de Equipo Dinámicos",
      "description": "Realizar juegos de equipo que fomenten la cooperación y el ejercicio físico.",
      "subject": "Educación Física",
      "specialNeed": "TDAH",
      "detailedDescription": "Esta actividad mantiene a los niños activos y comprometidos, ayudando a mejorar su atención y habilidades sociales.",
      "explanation": `Pasos para realizar la actividad:
    1. Organiza juegos como el "captura la bandera" o "el pañuelo".
    2. Explica las reglas claramente antes de comenzar el juego.
    3. Divide a los niños en equipos y anima la participación activa.
    4. Repite los juegos varias veces, cambiando equipos o roles para mantener el interés.`,
      "sourceUrl": "https://www.fundacioncadah.org/web/articulo/como-hacer-juegos-de-equipo-en-la-clase-de-ed-fisica/",
      "objectives": JSON.stringify([
        "Fomentar la cooperación y trabajo en equipo",
        "Mejorar la atención y concentración",
        "Desarrollar habilidades sociales"
      ]),
      "duration": "45 minutos",
      "materials": JSON.stringify([
        "Pelotas",
        "Conos o marcadores"
      ]),
      authorId: createdUsers[1].id
    },
    {
      "title": "Actividades al Aire Libre con Rutas Cortas",
      "description": "Realizar caminatas cortas o carreras en grupo en un entorno natural.",
      "subject": "Educación Física",
      "specialNeed": "TDAH",
      "detailedDescription": "Esta actividad permite a los niños liberar energía mientras disfrutan del aire libre, lo que puede ayudar a mejorar su enfoque y comportamiento.",
      "explanation": `Pasos para realizar la actividad:
    1. Planifica una caminata o carrera corta en un parque cercano.
    2. Establece paradas donde se realicen juegos rápidos (por ejemplo, saltos o carreras cortas).
    3. Anima a los niños a observar su entorno natural durante la actividad.
    4. Finaliza con una breve charla sobre lo que han visto y aprendido durante la caminata.`,
      "sourceUrl": "https://www.cerebrofeliz.org/tdah-problemas-con-matematicas/",
      "objectives": JSON.stringify([
        "Fomentar el ejercicio físico regular",
        "Mejorar el enfoque y comportamiento",
        "Estimular la curiosidad por la naturaleza"
      ]),
      "duration": "1 hora",
      "materials": JSON.stringify([
        "Ropa cómoda",
        "Botellas de agua"
      ]),
      authorId: createdUsers[2].id
    }
    
  ];

    // Crear actividades y agregar comentarios y likes
    for (const activity of activities) {
      const createdActivity = await prisma.activity.create({
        data: activity
      });
  
      // Agregar comentarios de ejemplo para cada actividad
      const comments = [
        {
          content: "¡Excelente actividad! La he probado con mis estudiantes y ha funcionado muy bien.",
          userId: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
          activityId: createdActivity.id
        },
        {
          content: "Me encanta cómo se adapta a diferentes niveles de aprendizaje.",
          userId: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
          activityId: createdActivity.id
        },
        {
          content: "Gracias por compartir esta actividad. Los materiales son muy accesibles.",
          userId: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
          activityId: createdActivity.id
        }
      ];
  
      await Promise.all(
        comments.map(comment => 
          prisma.comment.create({
            data: comment
          })
        )
      );
  
      // Agregar likes aleatorios para cada actividad
      const numberOfLikes = Math.floor(Math.random() * 5) + 1; // 1-5 likes por actividad
      const likedUsers = new Set();
  
      while (likedUsers.size < numberOfLikes) {
        const randomUser = createdUsers[Math.floor(Math.random() * createdUsers.length)];
        if (!likedUsers.has(randomUser.id)) {
          likedUsers.add(randomUser.id);
          await prisma.like.create({
            data: {
              userId: randomUser.id,
              activityId: createdActivity.id
            }
          });
        }
      }
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