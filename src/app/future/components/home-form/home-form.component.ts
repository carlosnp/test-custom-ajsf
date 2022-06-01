import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  Subject
} from 'rxjs';

import {
  layout,
  options,
  schemaBasic
} from './schemas';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFormComponent implements OnInit, OnDestroy {
  /**
   * Subject para manejar destrucción del objeto
   */
  componentDestroyed$: Subject<void> = new Subject<void>();
  schema = schemaBasic;
  layout = layout;
  options = options;
  data = {};
  res = null;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Cargar datos de prueba
   */
  chargeData() {
    this.data = {
      "name": "Gianni Lockman",
      "email": "your.email+fakedata52899@gmail.com",
      "comment": "Jasmin Wisoky"
    }
  }
  /**
   * Borrar datos del formulario
   */
  reset() {
    this.data = {};
  }
  /**
   * Formulario
   * @param $event
   */
  handleSubmit($event: any) {
    this.res =  $event;
  }
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
