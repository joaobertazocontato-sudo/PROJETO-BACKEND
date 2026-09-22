import express from 'express'
import path from 'path'
const PORT = Process.env.port || 3000
const app = express()
const basedir = import.mera.dirname
app(express.static(path.join(basedir, 'src/publico')))

app.get('/', (req,res) => { 
res.sendfile('src/paginas/index.html', {root})})