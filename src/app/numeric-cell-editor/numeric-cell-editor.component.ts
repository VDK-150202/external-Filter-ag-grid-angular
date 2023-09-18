import { Component, ElementRef, ViewChild } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
 

@Component({
  selector: 'app-list-number',
  templateUrl: './numeric-cell-editor.component.html',
  styleUrls: ['./numeric-cell-editor.component.scss']
})


export class CNumericCellEditorComponent implements ICellEditorAngularComp {
  params: any;
  inputValue!: number;
  
  agInit(params: any): void {
    try {
      this.params = params;
      this.inputValue = this.params.value;
    } catch (error) {
      console.log(error);
      console.log("error in agInit method");
    }
   
   }
  
  getValue(): number {
      return this.inputValue;
  }

  
}
