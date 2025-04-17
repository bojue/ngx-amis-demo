import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { configure } from 'mobx';

// 必须在应用启动前配置
configure({
  isolateGlobalState: true,
  enforceActions: 'never' // 根据需求配置
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
