import express from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import { router } from './router/routes';

//Configurações express
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use(router);

//Configurações servidor rodando
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});