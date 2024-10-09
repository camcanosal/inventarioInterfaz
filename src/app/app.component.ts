import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductoListaComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventario-app';
}
