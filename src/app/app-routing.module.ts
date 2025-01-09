import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule),
    pathMatch: 'full',
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./pages/login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'listado-residencia',
    loadChildren: () => import('./pages/listado-residencia/listado-residencia.module').then( m => m.ListadoResidenciaPageModule)
  },
  {
    path: 'servicio-detalle',
    loadChildren: () => import('./pages/servicio-detalle/servicio-detalle.module').then( m => m.ServicioDetallePageModule)
  },
  {
    path: 'historial-pagos',
    loadChildren: () => import('./pages/historial-pagos/historial-pagos.module').then( m => m.HistorialPagosPageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'lista-comunidad',
    loadChildren: () => import('./pages/lista-comunidad/lista-comunidad.module').then( m => m.ListaComunidadPageModule)
  },
  {
    path: 'listado-residencia-admin',
    loadChildren: () => import('./pages/listado-residencia-admin/listado-residencia-admin.module').then( m => m.ListadoResidenciaAdminPageModule)
  },
  {
    path: 'listado-detalle-admin',
    loadChildren: () => import('./pages/listado-detalle-admin/listado-detalle-admin.module').then( m => m.ListadoDetalleAdminPageModule)
  },
  {
    path: 'servicio-detalle-admin',
    loadChildren: () => import('./pages/servicio-detalle-admin/servicio-detalle-admin.module').then( m => m.ServicioDetalleAdminPageModule)
  },
  {
    path: 'formulario-pago',
    loadChildren: () => import('./pages/formulario-pago/formulario-pago.module').then( m => m.FormularioPagoPageModule)
  },
  {
    path: 'revision-pago',
    loadChildren: () => import('./pages/revision-pago/revision-pago.module').then( m => m.RevisionPagoPageModule)
  },
  {
    path: 'listado-servicio',
    loadChildren: () => import('./pages/listado-servicio/listado-servicio.module').then( m => m.ListadoServicioPageModule)
  },
  {
    path: 'listado-servicios-admin',
    loadChildren: () => import('./pages/listado-servicios-admin/listado-servicios-admin.module').then( m => m.ListadoServiciosAdminPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
