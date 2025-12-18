import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { NotFoundComponent } from '../../../shared/components/not-found/not-found';
import { CountryInformationComponenet } from "./country-information/country-information";

@Component({
  selector: 'app-coutry-page',
  imports: [NotFoundComponent, CountryInformationComponenet],
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
