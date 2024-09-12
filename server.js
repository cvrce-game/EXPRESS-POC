import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/hello', (req, res) => {
  res.json("Hi")
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});