import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Carga las variables de entorno
dotenv.config();

async function testConnection() {
  try {
    // Crea la conexión con la base de datos, desactivando la verificación de certificados SSL
    const connection = await mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASSWORD,
      database: process.env.MYSQLDATABASE,
      port: parseInt(process.env.MYSQLPORT || '3306'),
      ssl: {
        rejectUnauthorized: false // Desactiva la verificación SSL (solo para pruebas)
      }
    });

    // Conexión exitosa
    console.log('✅ Successfully connected to the database');

    // Ejecuta una consulta de prueba
    const [rows] = await connection.query('SELECT 1 + 1 AS result');
    console.log('✅ Test query successful:', rows);

    // Cierra la conexión
    await connection.end();
  } catch (error) {
    // Muestra el error si la conexión falla
    console.error('❌ Database connection failed:', error);
  }
}

// Ejecuta la función de prueba
testConnection();
