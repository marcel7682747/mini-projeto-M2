import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONCECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDataBase;
