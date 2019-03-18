import artistsModel from '../artists/artists.dao';

export const createAlbum = (req, res, next) => {
    let album = {
        $push: {
            albums: {
                title: req.body.title,
                image: req.body.image,
                songs: req.body.songs
            }
        }
    };

    let artist = req.body.artist;
    artistsModel.findOneAndUpdate(
        { name: artist },
        album,
        {
            upsert: true
        },
        (err, dt) => {
            if (err) {
                res.json({
                    error: err
                });
            }

            res.json({
                message: 'Album Successfully Created'
            });
        }
    );
};

export const deleteAlbum = (req, res, next) => {
    let albumId = req.params.albumId;

    // artistsModel.find({}, {albums: 1})
    artistsModel.findByIdAndRemove(albumId, (err, album) => {
        if (err) {
            return res.json({
                error: err
            })
        }

        res.json({
            message: 'Album Deleted Sucessfully'
        });
    });
};

export const getAlbums = (req, res, next) => {
    artistsModel.find({}, { albums: 1 }, (err, albums) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json(albums);
    });
};
