import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino = '';
  hayError = false;
  capitales: Country[] = [];
  constructor(private paisesService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(termino);

    this.paisesService.buscarCapital(termino).subscribe(
      (capital) => {
        console.log(capital);
        this.capitales = capital;
      },
      (error) => {
        this.hayError = true;
        this.capitales  = [];
        console.log('Error');
        console.info(error);
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
