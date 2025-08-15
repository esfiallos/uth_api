const express = require('express');
const app = express();
const PORT = 3000;


// Ruta base
app.get('/', (req, res) => {
  res.send({ message: "¡Hola desde Express!" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
