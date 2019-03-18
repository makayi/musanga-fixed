import {
    createArtist,
    getArtists,
    getArtist,
    updateArtist,
    removeArtist
} from './artists.controller';

const artistsRoutes = router => {
    router.post('/artists/create', createArtist);
    router.get('/artists', getArtists);
    router.get('/artists/:name', getArtist);
    router.put('/artists/update', updateArtist);
    router.delete('/artists/remove/:id', removeArtist);
};

export default artistsRoutes;
