import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  termino: string = '';

  debounce: Subject<string> = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.debounce
    .pipe(
      debounceTime(300)
    )
    .subscribe(valor => {
      this.onDebounce.emit(valor)
    });

  }

  teclaPresionada(event: any) {
    this.debounce.next(this.termino)
  }



  buscar() {
    this.onEnter.emit(this.termino)
  }

}
