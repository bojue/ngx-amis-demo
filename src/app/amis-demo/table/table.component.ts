import { Component, OnInit } from '@angular/core';
import { schema } from './data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  schemaData = {
    ...schema
  }

  constructor() { }

  ngOnInit(): void {
    this.loadAMISScriptAndCSS()
  }

  async loadAMISScriptAndCSS() {
    const load = await this.loadSDK()
    // @ts-ignore
    const amisRequire = (window as any).amisRequire
    if(!amisRequire) {
      return
    }
    const scoped = amisRequire("amis/embed");
    const { normalizeLink } = amisRequire("amis-core");
    const instance = scoped.embed(
      document.getElementById("table"),
      this.schemaData,
    ); 
  }

  loadStyles(styles: any) {
    for (const path of styles) {
      const style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("type", "text/css");
      style.setAttribute("href", path);
      document.head.appendChild(style);
    }
  }


  loadScript(src: any, callback: any) {
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", src);
    script.onload = () => callback();
    script.onerror = () => {
      console.error('Failed to load SDK!');
    };
    document.body.appendChild(script);
  }
  
   loadSDK() {
    this.loadStyles([
      "/assets/amis/sdk/sdk.css",
      "/assets/amis/sdk/helper.css",
      "/assets/amis/sdk/iconfont.css",
    ]);

    return new Promise((resolve, reject) => {
      try {
        const sdkUrl = '/assets/amis/sdk/sdk.js'
        const loadedBool = (window as any).amisRequire
        if(loadedBool) {
          resolve(true)
          return 
        }
        this.loadScript(sdkUrl, (err: any) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(true);
        });
      } catch {
        reject()
      }

    });
  }
  




}
