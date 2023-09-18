import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-icon-renderer',
  templateUrl: './icon-renderer.component.html',
  styleUrls: ['./icon-renderer.component.scss']
})
export class CIconRendererComponent implements ICellRendererAngularComp{

  task!: string;
  icon!: string;

  agInit(params: ICellRendererParams): void {
    try {
      this.SetTaskType(params);
    } catch (error) {
      console.log(error);
      console.log("Error in agInit()");
    }
  }

  refresh(params: ICellRendererParams): boolean {
   let result = false;
    try {
      result= true;
    } catch (error) {
      console.log(error);
      console.log("Error in refresh() system function");
    }
    finally{
      return result;
    }
    
  }
  
  SetTaskType(params: ICellRendererParams) {
    this.task = params.data.Type;   
    this.icon=  this.GetIconForTaskType();
  }

  GetIconForTaskType(): string{
      let icon = '';
      switch(this.task){
        case 'list':
          icon= '/assets/List.png';
          break;
        case 'matrix':
          icon= '/assets/Matrix.png';
          break;
        case 'quantitative':
          icon='assets/Quantitative.png';
          break;
        default:
          icon=''
      }
      return icon;
  }

}
