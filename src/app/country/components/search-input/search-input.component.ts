import { Component, input, output } from '@angular/core';

@Component({
  selector: 'coutry-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input('Buscar')
  value = output<string>();

}
