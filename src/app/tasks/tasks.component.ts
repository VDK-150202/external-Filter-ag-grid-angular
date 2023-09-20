import { Component, OnInit } from '@angular/core';
import { CTask } from './task.model';
import { ColDef, GridApi, GridOptions } from 'ag-grid-community';
import { CIconRendererComponent } from '../icon-renderer/icon-renderer.component';
import { CNumericCellEditorComponent } from '../numeric-cell-editor/numeric-cell-editor.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  GridApi!: GridApi;
  GridOptions!: GridOptions;
  GridColumnApi!: ColDef;




  //array containing instances of CTask
  lstTask: CTask[] = [
    new CTask(1, "Task10", "vaibhav", "list", 5, "Started", "EXTC"),
    new CTask(2, "Task20", "jainish", "matrix", 15, "Not Started", "CS"),
    new CTask(3, "Task32", "rushikesh", "quantitative", 25, "Started", "EXTC"),
    new CTask(4, "Task445", "samiksha", "list", 45, "Started", "EXTC"),
    new CTask(5, "Task533", "omkar", "list", 35, "Not Started", "CS"),
    new CTask(6, "Task166", "sandesh", "quantitative", 55, "Started", "IT"),
    new CTask(7, "Task154", "shubham", "list", 35, "Finished", "EXTC"),
    new CTask(8, "Task123", "anuj", "matrix", 35, "Started", "EXTC"),
    new CTask(9, "Task144", "mayur", "list", 35, "Not Started", "EXTC"),
    new CTask(10, "Task17", "tarang", "quantitative", 55, "Started", "ETRX"),
    new CTask(11, "Task13", "fristan", "list", 25, "Started", "EXTC"),
    new CTask(12, "Task14", "abhishek", "quantitative", 45, "Started", "EXTC"),
    new CTask(13, "Task16", "vaishnavi", "matrix", 65, "Not Started", "EXTC"),
    new CTask(14, "Task12", "vaibhav", "list", 5, "Finished", "EXTC"),
    new CTask(15, "Task23", "jainish", "matrix", 15, "Not Started", "CS"),
    new CTask(16, "Task35", "rushikesh", "quantitative", 25, "Started", "EXTC"),
    new CTask(17, "Task44", "samiksha", "list", 45, "Started", "EXTC"),
    new CTask(18, "Task52", "omkar", "list", 35, "not started", "CS"),
    new CTask(19, "Task104", "sandesh", "quantitative", 55, "Finished", "IT"),
    new CTask(20, "Task1", "shubham", "list", 35, "started", "EXTC")
  ];

  lstFilteredTask!: CTask[];
  lstTaskType!: string[];

  constructor() { }

  ngOnInit() {
    this.lstFilteredTask = [];
    this.lstTaskType = [];
    this.BuildGridDefinition();
    this.SetTaskType();

  }

  SetTaskType() {
    this.lstTask.forEach((task) => {
      if (!this.lstTaskType.includes(task.Type)) {
        this.lstTaskType.push(task.Type);
      }
    });
  }

  BuildGridDefinition() {
    this.GridOptions = <GridOptions>{
      columnDefs: [

        { headerName: 'Task ID', field: 'Id' },
        { headerName: 'Task Name', field: 'Name', editable: true },
        {
          headerName: 'Task Type', field: 'Type', editable: true,
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: this.lstTaskType
          },
          cellRenderer: CIconRendererComponent,
        },
        {
          headerName: 'Duration', field: 'Duration', editable: true,
          cellEditor: CNumericCellEditorComponent,
        },
        { headerName: 'Task Status', field: 'Status' },
        { headerName: 'Department', field: 'Department' },
      ],
    };

  }

  ExportToCSV() {
    try {
      const lstColumnToExclude = ['Id'];
      const lstColumnToExport = this.GridOptions.columnDefs?.filter((col: any) => (-1 == lstColumnToExclude.indexOf(col.field)))
        .map((col: any) => col.field);
  
      const csvExportConfig = {
        fileName: 'TaskData.csv',
        columnKeys: lstColumnToExport,
        processCellCallback(params: any): string {
          const expectedColumnValue= params.column.colId;
          let result = '';
          switch(expectedColumnValue){
          case 'Duration' : 
              result =  params.value + ' days';
              break;
          default : 
              result = params.value
              break;
          }
            return result;
        }
      };
  
      this.GridApi.exportDataAsCsv(csvExportConfig);
    } catch (error) {
      console.log("error occur in ExportToCSV()", error);
    }
  }


  //This method is called when a checkbox of task type is checked or unchecked.
  OnTaskType_Change(event: any) {
    let lstfinal: CTask[] = []; //The finalLst array have tasks that matches with selected tasktypes.
    const taskType: string = event.target.id; // identify the selected task type.

    if (event.target.checked) {
      // If a checkbox is checked, the selected task type is added to the lstCheckedTask array.
      lstCheckedTask.push(taskType.toLowerCase());
    }
    else {
      //If a checkbox is unchecked, the selected task type is removed from the lstCheckedTask array.
      lstCheckedTask = lstCheckedTask.filter((item: any) => item !== taskType)
    }

    for (let i = 0; i < lstCheckedTask.length; i++) {
      //lstfinal = lstfinal.concat(this.lstTask.filter(task => task.Type.toLowerCase() === lstCheckedTask[i]));
      lstfinal = lstfinal.concat(this.lstTask.filter(task => task.Type.toLowerCase() === lstCheckedTask[i]));
    }


    //finalLst is the array of tasks that needs to be sorted.
    lstfinal = lstfinal.sort((task1, task2) => {
      if (task1.Id > task2.Id) {
        return 1;
      }

      if (task1.Id < task2.Id) {
        return -1;
      }

      return 0;
    });

    this.GridApi.setRowData(lstfinal);

  }


  //This method is called when the ag-Grid is ready. It sets up the gridApi
  // and gridColumnApi properties and initializes the grid data.
  OnGrid_Ready(param: any) {
    this.GridApi = param.api;
    this.GridColumnApi = param.columApi;
    this.GridApi.setRowData(this.lstFilteredTask);

  }

}

const enum taskType {
  eList,
  eMatrix,
}

//An array that keeps track of the selected task types.
let lstCheckedTask: any = [];

function processCellCallback(params: any) {
  throw new Error('Function not implemented.');
}
function processHeaderCallback(params: any) {
  throw new Error('Function not implemented.');
}

