import { Component } from '@angular/core';
import { PagesComponent } from "./pages/pages.component";

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [PagesComponent],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss'
})
export class WebDesignComponent {

}
