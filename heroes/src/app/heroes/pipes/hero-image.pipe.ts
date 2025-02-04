import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroe';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(value: Hero): string {
    if (!value.id && !value.alt_img) {
      return 'no-image.png';
      
    }
    if (value.alt_img) {
      return `heroes/${value.alt_img}.jpg`;
    }
    return `heroes/${value.id}.jpg`;
  }

}
