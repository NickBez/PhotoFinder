import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //Allow use of SVG sprite images
  template: '<svg><use xlink:href="assets/symbol-defs.svg#icon-images"></use></svg>'
})
export class AppComponent {
  title = 'Photo-Finder';
}
