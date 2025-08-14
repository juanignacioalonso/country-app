import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  imports: [],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  onSearch(value: string){
    console.log({ value });
    // Aquí puedes implementar la lógica para buscar por capital
  }

 }
