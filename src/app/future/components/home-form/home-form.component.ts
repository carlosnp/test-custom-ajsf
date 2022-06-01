import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  Subject
} from 'rxjs';

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

  constructor() { }

  ngOnInit(): void {
  }
  /**
   * Destructor del componente
   */
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
