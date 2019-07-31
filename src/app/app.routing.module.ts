import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'produtos',
        loadChildren: './produtos/produtos.module#ProdutosModule'
    },
    {
        path: 'contato',
        loadChildren: './contato/contato.module#ContatoModule'
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/home'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
