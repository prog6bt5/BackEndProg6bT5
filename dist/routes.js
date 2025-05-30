"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const usuario_routes_1 = require("./modules/usuario/routes/usuario.routes");
const materia_routes_1 = require("./modules/materia/routes/materia.routes");
class Routes {
    constructor() {
        this.usuarioRoutes = new usuario_routes_1.UsuarioRoutes();
        this.materiaRoutes = new materia_routes_1.MateriaRoutes();
    }
    routes(app) {
        this.materiaRoutes.routes(app);
        this.usuarioRoutes.routes(app);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map