import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'coutry-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {

  placeholder = input('Buscar');
  debounceTime = input(1000);
  initialValue = input<string>();

  value = output<string>();

  inputValue = linkedSignal<string>(()=>this.initialValue() ?? ''); // cuando se debe usar una señal como inicializada se debe usar linkedSignal

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
