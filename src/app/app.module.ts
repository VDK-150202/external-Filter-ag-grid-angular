import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { CIconRendererComponent } from './icon-renderer/icon-renderer.component';
import { CNumericCellEditorComponent } from './numeric-cell-editor/numeric-cell-editor.component';
import { FormsModule } from '@angular/forms';
import { CTaskTypeFilterComponent } from './task-type-filter/task-type-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    CIconRendererComponent,
    CNumericCellEditorComponent,
    CTaskTypeFilterComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
