import artistsModel from './artists.dao';

export const createArtist = (req, res, next) => {
    let artist = {
        name: req.body.name,
        photo: req.body.photo,
        albums: req.body.albums
    };

    artistsModel.create(artist, (err, artist) => {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            message: 'Artist Successfully Created.'
        });
    });
};

export const getArtists = (req, res, next) => {
    artistsModel.get({}, (err, artists) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json(artists);
    });
};

export const getArtist = (req, res, next) => {
    artistsModel.get({ name: req.params.name }, (err, artists) => {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json(artists);
    });
};

export const updateArtist = (req, res, next) => {
    let artist = {
        name: req.body.name,
        photo: req.body.photo,
        albums: req.body.albums
    };

    artistsModel.findByIdAndUpdate(
        { _id: req.params.id },
        artist,
        (err, artist) => {
            if (err) {
                res.json({
                    error: err
                });
            }

            res.json({
                message: 'Artist Update Successful'
            });
        }
    );
};

export const removeArtist = (req, res, next) => {
    artistsModel.delete({ _id: req.params.id }, (err, artist) => {
        if (err) {
            res.json({
                error: err
            });
        }
        res.json({
            message: 'Artist Successfully Deleted'
        });
    });
};
