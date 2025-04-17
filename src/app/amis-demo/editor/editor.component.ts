// amis-editor-wrapper.component.ts
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor } from 'amis-editor';

@Component({
  selector: 'app-amis-editor',
  template: '<div [id]="editorId"></div>',
})
export class AmisEditorWrapperComponent implements AfterViewInit {
  @Input() editorId = 'amis-editor';
  @Input() value: any;
  
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {

    ReactDOM.render(
      React.createElement(Editor, {
        value: this.value,
        onChange: (value: any) => this.value = value
      }),
      this.el.nativeElement.querySelector(`#${this.editorId}`)
    );
  }


  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.el.nativeElement.nativeElement);
  }
}