import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-task',
  templateUrl: './input-task.component.html',
  styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent {
  public value: string = '';

  @Output()
  public onAdd = new EventEmitter<string>();

  public onAddButtonClick(): void {
    this.onAdd.emit(this.value);
    this.value = '';
  }
}
