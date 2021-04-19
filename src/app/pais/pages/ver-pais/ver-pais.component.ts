import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  
  pais!: Country;

  constructor(private aR: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {
    this.aR.params
      .pipe(
        // SwitchMap recibe un observable y regresa un observable.
        switchMap((params) => this.paisService.getPaisporCode(params.id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        
        this.pais = pais;
      });

    // this.aR.params.subscribe(({id}) => {
    //   console.log(id);
    //   this.paisService.getPaisporCode(id)
    //   .subscribe(pais => {
    //     console.log(pais);
    //   })
    // })
  }
}
