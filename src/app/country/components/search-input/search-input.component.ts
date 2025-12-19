import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'coutry-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input('Buscar')
  value = output<string>();
  debounceTime = input(300)

  inputValue = signal<string>('')

  debounceEffect = effect((onCleanup)=>{

    const value = this.inputValue(); //Señal dentro de el efecto cada ves q la misma cambie va a disparar el efecto

    const timeout = setTimeout(()=>{
      this.value.emit(value);
    },this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeout);
    })

  })

}
