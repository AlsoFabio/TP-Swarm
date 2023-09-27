import express from 'express';

const app = express();

app.use('/', (req,res)=>{
    return res.json('Hola mundo');
});

app.listen(80,()=>{console.log('Server listening on port 80')})