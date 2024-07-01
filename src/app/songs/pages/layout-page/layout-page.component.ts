import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado canciones', icon: 'Label', url: './list' },
    { label: 'Añadir', icon: 'add', url: './new-song' },
    { label: 'Buscar', icon: 'search', url: './search' },
  ];
}
