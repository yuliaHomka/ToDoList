import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'toDo-list';

  public newValue$  = new Subject<string>();

  public onAddTask(value: string): void {
    this.newValue$.next(value);
  }
}
