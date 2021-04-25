import { Component } from '@angular/core';
import * as Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Editor = Editor;
  editorConfig = {

    toolbar: {
      items: [
        'bold',
        'italic',
        'underline',
        'link',
        '|',
        'alignment',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'undo',
        'redo'
      ]
    },
    language: 'tr',
    licenseKey: '',


  };
}
