import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { AmisEditorWrapperComponent } from './editor/editor.component';


const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'editor',
    component: AmisEditorWrapperComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AMISDemoRoutingModule { }

