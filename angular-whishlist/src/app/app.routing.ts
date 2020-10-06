import { RouterModule, Routes } from '@angular/router';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ListaDestinosComponent},
    {path: 'destino', component: DestinoDetalleComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
