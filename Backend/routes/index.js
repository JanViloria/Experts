const routerExperts = require("./expertRoutes");
const routerUser = require("./userRoutes");
const routerMockExperts = require("./mockExpertsRoutes");

function APIRoutes(app){
    app.use("/experts", routerExperts);
    app.use("/users", routerUser);
    app.use("/mock/experts", routerMockExperts);
}

module.exports = APIRoutes;