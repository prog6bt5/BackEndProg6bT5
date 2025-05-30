import { UsuarioRoutes } from "./modules/usuario/routes/usuario.routes";
import { MateriaRoutes } from "./modules/materia/routes/materia.routes";
export class Routes {

    private usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
     private materiaRoutes: MateriaRoutes = new MateriaRoutes();

    public routes(app): void {
        this.materiaRoutes.routes(app);
         this.usuarioRoutes.routes(app);
    }
    
}