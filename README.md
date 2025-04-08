
# IncluClass

**IncluClass** es una plataforma web diseñada para que maestros, psicólogos educativos y expertos colaboren, creen y adapten actividades inclusivas para niños con discapacidad como TDAH y autismo. 🎓✨  
Nuestro objetivo es fomentar una educación más accesible, personalizada y efectiva.

## 📸 Demo

| Actividades | Crear | Único | Main | Materias |
|:-----------:|:-----:|:-----:|:----:|:--------:|
| ![Actividades](./public/Actividades.png) | ![Crear](./public/Crear.png) | ![Único](./public/Unico.png) | ![Main](./public/Main.png) | ![Materias](./public/Materias.png) |

🎥 **Video de demostración:**  
[![Demostración](./public/Demostración.mov)](./public/Demostración.mov)

---

## 🚀 Tecnologías

- **Frontend:** Next.js + TypeScript + TailwindCSS
- **Backend:** Node.js + Prisma + MySQL
- **ORM:** Prisma
- **Control de Calidad:** ESLint

---

## 📜 Scripts disponibles

En el proyecto puedes correr los siguientes comandos:

| Script | Comando | Descripción |
|:------:|:-------:|:------------|
| **dev** | `npm run dev` | Inicia Vite en modo desarrollo. 🔥 |
| **build** | `npm run build` | Genera la build de producción. 📦 |
| **lint** | `npm run lint` | Corre ESLint para revisar errores de estilo/código. 🧹 |
| **preview** | `npm run preview` | Muestra la build de producción localmente. 👀 |
| **prisma:generate** | `npm run prisma:generate` | Genera el cliente de Prisma (después de cambiar el schema). 🛠️ |
| **prisma:migrate** | `npm run prisma:migrate` | Corre una migración en la base de datos en modo desarrollo. 🛤️ |
| **prisma:seed** | `npm run prisma:seed` | Rellena la base de datos con datos iniciales (seed). 🌱 |
| **test:db** | `npm run test:db` | Ejecuta `src/db-test.ts` para probar la conexión a la base de datos. 🧪 |
| **db:setup** | `npm run db:setup` | Ejecuta `prisma:generate`, `prisma:migrate` y `prisma:seed` juntos. 🚀 |
| **server** | `npm run server` | Corre el servidor de desarrollo con recarga automática (tsx watch). 🌐 |

---

## 📂 Estructura del Proyecto

```bash
IncluClass/
├── public/
│   ├── Actividades.png
│   ├── Crear.png
│   ├── Unico.png
│   ├── Main.png
│   ├── Materias.png
│   └── Demostración.mov
├── src/
│   ├── components/
│   ├── pages/
│   ├── prisma/
│   └── db-test.ts
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/incluclass.git
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura tu base de datos en el archivo `.env`:

```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/incluclass"
```

4. Ejecuta la base de datos:

```bash
npm run db:setup
```

5. ¡Listo para desarrollar!

```bash
npm run dev
```

---

## ✨ Contribuciones

¡Contribuciones, sugerencias y mejoras son bienvenidas! 💬  
Puedes abrir un **Issue** o hacer un **Pull Request**.

---

## 📄 Licencia

IncluClass © 2025 - Todos los derechos reservados.

---