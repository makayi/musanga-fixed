import artistsSchema from './artists.model';
import mongoose from 'mongoose';

artistsSchema.statics = {
    create: function(data, cb) {
        let artist = new this(data);
        artist.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }
};

const artistsModel = mongoose.model('Artists', artistsSchema);
export default artistsModel;
