const model = require('./profile-model');

const findProfileById = () => model.find();
const updateProfile = (id, profile) =>
    model.updateOne({_id: id},
        {...profile});

module.exports = {
  findProfileById, updateProfile
};