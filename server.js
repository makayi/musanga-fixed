import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import database from './config/database';
import { PORT } from './config/properties';
import artistsRoutes from './artists/artists.routes';
import albumRoutes from './albums/albums.routes';

const app = express();
const router = express.Router();

database();

// process incoming json.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//allow cors
app.use(cors());

//from stackoverflow.
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST', 'PUT');
    next();
});

app.use('/api/v1/', router);
artistsRoutes(router);
albumRoutes(router);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
