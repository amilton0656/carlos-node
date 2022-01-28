const http=require('http')
const app=require('../app')

const port=parseInt(process.env.port,10) || 8010

app.set('port', port)

const server=http.createServer(app)

server.listen(port)

console.log(`Servidor ON - port ${port}`)