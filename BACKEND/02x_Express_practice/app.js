import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname, 'templates', 'About.html'))
})

app.get("/hellopro-zero", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

const port = 3000;
app.listen(port, () =>{
    console.log(`Server is listening on http://localhost:${port}`);
})