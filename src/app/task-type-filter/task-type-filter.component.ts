import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-checkbox',
  templateUrl: './task-type-filter.component.html',
  styleUrls: ['./task-type-filter.component.scss']
})
export class CTaskTypeFilterComponent {
  @Output() taskTypeChanged = new EventEmitter<any>();
 

  OnTaskType_Change(event: any) {
    try {
      this.taskTypeChanged.emit(event);
    } catch (error) {
      console.log( error);
      console.log("error in OnTaskType_Change() ");
    }
  }

}