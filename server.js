import http from 'http'
import api from './api/api.js'
import serverConfig from './api/config/serverConfig.js';

const server = http.createServer(api);

const onError = () =>{
    if(error.syscall !== 'listen'){
        throw error;
    }
    
    switch(error.code){
        case 'EACCES':
            console.error('La aplicacion no tiene permisos');
            process.exit();
            break;
        case 'EADDRINUSE':
            console.error(`El puerto ${serverConfig.PORT} está en uso`)
            break;
        default:
            throw error;
    }
};

const onListen = () =>{
    console.log(`Servidor ejecutandose en el puerto ${serverConfig.PORT}`)
}

server.on('listening', onListen)
server.on('error', onError)

server.listen(serverConfig.PORT)
