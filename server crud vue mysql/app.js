const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete 'cors'


 // Create connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1161202CAmi',
    database: 'mi_base_de_datos',
    port: '3306',
  });

  // Conectar a la base de datos MySQL
connection.connect((err) => {
    if (err) throw err;
    console.log('Conexión exitosa a la base de datos MySQL.');
  });

// Crear una aplicación Express.js
const app = express();  
// Habilitar CORS para todas las rutas
app.use(cors());

// Analizar los datos enviados en el cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para obtener todos los usuarios de la base de datos
app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    connection.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

// Ruta para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    const sql = 'INSERT INTO usuarios (nombre, email) VALUES (?, ?)';
    connection.query(sql, [nombre, email], (err, result) => {
      if (err) throw err;
      res.send('Usuario creado exitosamente.');
    });
  });
// borrar usuarios
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params; // Obtener el ID del usuario de la URL
  const sql = `DELETE FROM usuarios WHERE id = ${id}`;  // Formar la consulta SQL
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Usuario eliminado exitosamente.');
  }); // Ejecutar la consulta SQL

})


  // Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express.js en funcionamiento en el puerto ${PORT}`);
});