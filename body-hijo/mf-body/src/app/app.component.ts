import { Component } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
@Component({
  selector: 'mf-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mf-body';
  sliderUno = assetUrl('slider.png');
  sliderProducto = assetUrl('iphone-11.webp');

}
