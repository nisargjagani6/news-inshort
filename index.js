import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './connection/db.js';
import DefaultData from './default.js';
import Route from './routes/Route.js';
// const path=require('path');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', Route);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'));

//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     });
// }



const PORT = 8000;


Connection();


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

DefaultData();

