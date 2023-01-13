import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{index+1}} / {{images.length}}</h1>
    <pre>click left and right sides of the image to browse</pre>

    <carousel 
      [images]="images" 
      (change)="onChange($event)"></carousel>
  `,
  styles: [`
    h1, pre { text-align: center }
  `]
})
export class AppComponent  {
  index;

  images = [ 
    'https://placeimg.com/300/300/nature/6',
    'https://placeimg.com/300/300/nature/7',
    'https://placeimg.com/300/300/nature/8',
    'https://placeimg.com/300/300/nature/9',
    'https://placeimg.com/300/300/nature/2',
    'https://placeimg.com/300/300/nature/3',
    'https://placeimg.com/300/300/nature/1',
  ];

  onChange(idx) {
    console.log(idx);
    this.index =  idx;
  }
}
