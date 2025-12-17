import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-coutry-page',
  imports: [],
  templateUrl: './coutry-page.component.html',
})
export class CoutryPageComponent {

  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    request:()=> ({ code:this.countryCode}),
    loader: ({request}) =>{
      return this.countryService.searchCountryByAlphaCode(request.code)
    }
  })
}
