const dao = require("../db/who/who-model.js");

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllWho()
            .then(who => res.json(who));
    app.get("/rest/who", findAllWho);
}