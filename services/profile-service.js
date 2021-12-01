// let profile = require('../data/profile.json');
const dao = require('../db/profile/profile-dao')

module.exports = (app) => {
    // const getCurrentProfile = (req, res) => {
    //     res.json(profile);
    // }
    //
    // const updateCurrentProfile = (req, res) => {
    //     const newProfile = req.body;
    //     profile = {
    //         ...profile,
    //         ...newProfile,
    //     };
    //     res.json(profile);
    //     // res.sendStatus(200);
    // }

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));
    const updateProfile = (req, res) =>
        dao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));

    // app.put('/api/profile', updateCurrentProfile);
    // app.get('/api/profile', getCurrentProfile);
    app.put('/rest/profile/:id', updateProfile);
    app.get('/rest/profile', findProfileById);
}

