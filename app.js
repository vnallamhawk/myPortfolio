/**
 * Created by rakes on 5/9/2017.
 */
const Server = require('./server.js')
const port = (process.env.PORT || 8080)
const app = Server.app()

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
