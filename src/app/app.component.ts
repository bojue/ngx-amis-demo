import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ng16 -AMIS-DEMO';

  appNavList = [{
    path: '/basic',
    title: '基础 basic',
  },{
    path: '/form',
    title: '表单 Form',
  },{
    path: '/table',
    title: '表格 Table'
  },{
    path: '/editor',
    title: '编辑器 Editor',
  }]
}
