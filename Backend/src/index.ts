import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth';
// const database_url = process.env.MONGO_API_KEY || 'fallback_database_url'
const app: Application = express();
const port: number = 3000;

app.use(cors());

app.use(express.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

mongoose.connect("", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "EcommerceWebsite"
}).then(() => { 
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});













