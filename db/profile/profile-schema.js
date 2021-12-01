const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    website: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: String,
    followersCount: String
}, {collection: "profiles"});
module.exports = schema;