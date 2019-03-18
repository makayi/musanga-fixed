import { createAlbum, getAlbums, deleteAlbum } from './albums.controller';

const albumRoutes = router => {
    router.post('/albums/create', createAlbum);
    router.get('/albums', getAlbums);
    router.delete('/albums/remove/:albumId', deleteAlbum);
};

export default albumRoutes;
