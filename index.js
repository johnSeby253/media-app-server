const JSONServer=require('json-server')
const MediaServer=JSONServer.create();
const router = JSONServer.router('db.json');
const middleware= JSONServer.defaults();

const PORT =3000|| process.env.PORT

MediaServer.use(middleware);
MediaServer.use(router);

MediaServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at PORT : ${PORT}`);
    
})