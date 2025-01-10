import { Component } from '@angular/core';

@Component({
  selector: 'app-horror',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './horror.component.html',
  styleUrl: './horror.component.scss'
})
export class HorrorComponent {
  rowData = {
    link: 'https://www.imdb.com/title/tt0116367/',
  }

  colDefs: ColDef[]
}
