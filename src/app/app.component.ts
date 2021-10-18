import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public editorConfig = {
    extraPlugins: 'pramukhime',
    toolbarGroups: [
      // Here name has no effect but groups has
      { name: 'pramukhime', groups: ['pramukhime'] },
      { name: 'basicstyles', groups: ['basicstyles', 'list', 'indent', 'align', 'links'] }
    ]
  }
  title = 'ckeditor-angular-demo';
}
