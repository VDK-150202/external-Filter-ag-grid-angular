import { Component, OnInit } from '@angular/core';
import { CTask } from './task.model';
import { ColDef, GridApi, GridOptions, IRowNode } from 'ag-grid-community';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  gridApi!: GridApi;
  gridOptions!: GridOptions;
  gridColumnApi!: ColDef;


  lstTask: CTask[] = [
    new CTask(1, "Task10", "vaibhav", "list", "5", "Started", "EXTC"),
    new CTask(2, "Task20", "jainish", "matrix", "15", "Not Started", "CS"),
    new CTask(3, "Task32", "rushikesh", "Quantitative", "25", "Started", "EXTC"),
    new CTask(4, "Task445", "samiksha", "list", "45", "Started", "EXTC"),
    new CTask(5, "Task533", "omkar", "list", "35", "Not Started", "CS"),
    new CTask(6, "Task166", "sandesh", "Quantitative", "55", "Started", "IT"),
    new CTask(7, "Task154", "shubham", "list", "35", "Finished", "EXTC"),
    new CTask(8, "Task123", "anuj", "matrix", "35", "Started", "EXTC"),
    new CTask(9, "Task144", "mayur", "list", "35", "Not Started", "EXTC"),
    new CTask(10, "Task17", "tarang", "Quantitative", "55", "Started", "ETRX"),
    new CTask(11, "Task13", "fristan", "list", "25", "Started", "EXTC"),
    new CTask(12, "Task14", "abhishek", "Quantitative", "45", "Started", "EXTC"),
    new CTask(13, "Task16", "vaishnavi", "matrix", "65", "Not Started", "EXTC"),
    new CTask(14, "Task12", "vaibhav", "list", "5", "Finished", "EXTC"),
    new CTask(15, "Task23", "jainish", "matrix", "15", "Not Started", "CS"),
    new CTask(16, "Task35", "rushikesh", "Quantitative", "25", "Started", "EXTC"),
    new CTask(17, "Task44", "samiksha", "list", "45", "Started", "EXTC"),
    new CTask(18, "Task52", "omkar", "list", "35", "not started", "CS"),
    new CTask(19, "Task104", "sandesh", "Quantitative", "55", "Finished", "IT"),
    new CTask(20, "Task1", "shubham", "list", "35", "started", "EXTC")
  ]

  constructor() {

  }

  filteredTasks!: CTask[];

  ngOnInit() {
    this.BuildGridDefinition();
    this.filteredTasks = [];
  }

  BuildGridDefinition() {
    this.gridOptions = <GridOptions>{
      columnDefs: [
        { headerName: 'Task ID', field: 'Id' },
        { headerName: 'Task Name', field: 'Name' },
        { headerName: 'Task Manager', field: 'Manager' },
        { headerName: 'Task Type', field: 'Type' },
        { headerName: 'Duration', field: 'Duration' },
        { headerName: 'Task Status', field: 'Status' },
        { headerName: 'Department', field: 'Department' },
      ],
    };


  }

  ExternalFilter_Change(event: any) {
    let finalLst: any[] = []
    const taskType = event.target.id.toLowerCase();
    console.log(taskType);

    if (event.target.checked) {
      lstCheckedTask = [...lstCheckedTask, taskType]
    }
    else {
      lstCheckedTask = lstCheckedTask.filter((item: any) => item !== taskType)
    }

    for (let i = 0; i < lstCheckedTask.length; i++) {
      finalLst = finalLst.concat(this.lstTask.filter(task => task.Type.toLowerCase() === lstCheckedTask[i]))
    }
    console.log(lstCheckedTask)
    console.log('before', finalLst);

    finalLst = finalLst.sort((task1, task2) => {
      if (task1.Id > task2.Id) {
        return 1;
      }

      if (task1.Id < task2.Id) {
        return -1;
      }

      return 0;
    });
    console.log('after', finalLst);

    this.gridApi.setRowData(finalLst);

  }


  OnGrid_Ready(param: any) {
    this.gridApi = param.api;
    this.gridColumnApi = param.columApi;
    this.gridApi.setRowData(this.filteredTasks);

    console.log(this.gridApi.getColumnDefs());
    console.log(this.gridOptions);
  }

}



enum taskType {
  eList,
  eMatrix,
}

let lstCheckedTask: any = [];
