const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta www
app.use(express.static(path.join(__dirname, 'www')));

// Redirigir todas las rutas al index.html para soportar SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor Freework corriendo en el puerto ${port}`);
});