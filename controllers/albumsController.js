const albumsModels = require("../models/albumsModels");


exports.showAlbums=(profile_id)=>albumsModels.showAlbums(profile_id);
exports.detalheAlbum=(id)=>albumsModels.detalheAlbum(id);