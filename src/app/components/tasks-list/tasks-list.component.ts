import { Component, forwardRef, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

type listItem = {
  value: string;
  done: boolean;
  id: string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  public items: listItem[] = [];

  public checked: boolean = true;

  @Input()
  public set newItem(value: string | null) {
    if (value) {
      this.items.push({
        value,
        done: false,
        id: uuid(),
      });
    }
  }

  public onItemDoneChange(changedItem: listItem): void {
    this.items = this.items.filter((item) => item.id !== changedItem.id);
    changedItem.done = !changedItem.done;
    if (changedItem.done) {
      this.items.push(changedItem);
      return;
    }
    this.items.unshift(changedItem);
    

  }

  public onRemoveButtonClick(deletedItem: listItem): void {
    this.items = this.items.filter((item) => item.id !== deletedItem.id);
  }
}
