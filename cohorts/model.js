const db = require("../data/connection");
module.exports = {
    all,
}

function all() {
    return db("cohorts");
}