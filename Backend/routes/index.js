const routerExperts = require("./expertRoutes");
const routerUser = require("./userRoutes");

function APIRoutes(app){
    app.use("/experts", routerExperts);
    app.use("/users", routerUser);
}

module.exports = APIRoutes;