// let profiles = require('../data/profile.json');
//
// module.exports = (app) => {
//     const getCurrentProfile = (req, res) => {
//         res.json(profiles);
//     }
//
//     const updateCurrentProfile = (req, res) => {
//         const id = req.params['id'];
//         profiles = profiles.map(profile => {
//             if (profile._id === id) {
//                 return profile;
//             } else {
//                 return profile;
//             }
//         });
//         res.sendStatus(200);
//     }
// }