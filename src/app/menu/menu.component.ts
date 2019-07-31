import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: 'home'
          },
          {
              label: 'Produtos',
              icon: 'pi pi-fw pi-shopping-cart',
              routerLink: 'produtos'
          },
          {
            label: 'Contato',
            icon: 'pi pi-fw pi-id-card',
            routerLink: 'contato'
          }
      ];
  }

}
