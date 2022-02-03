import mongoose from 'mongoose';   

const Connection = async () => {
    try {   
        const URL = `mongodb+srv://nisargjagani:nisarg123@cluster0.xdvpl.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
        
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}


export default Connection;