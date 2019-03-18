import mongoose from 'mongoose';
import { DB } from './properties';

const database = () => {
    mongoose.connect(DB);

    mongoose.connection.on('connected', () => {
        console.log(`Connected on ${DB}`);
    });

    mongoose.connection.on('error', err => {
        console.log(`Error in connecting: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconneted');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Application Terminated');
            process.exit(0);
        });
    });
};

export default database;
