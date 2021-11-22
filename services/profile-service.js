let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
        const newProfile = req.body;
        profile = {
            ...profile,
            ...newProfile,
        };
        res.json(profile);
        // res.sendStatus(200);
    }
    app.put('/api/profile', updateCurrentProfile);
    app.get('/api/profile', getCurrentProfile);
}

