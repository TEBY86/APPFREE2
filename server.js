const express = require('express');
const path = require('path');
const app = express();

// Usar __dirname garantiza que encuentre la carpeta 'imagenes'
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});