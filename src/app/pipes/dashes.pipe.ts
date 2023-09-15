import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashes'
})
export class DashesPipe implements PipeTransform {

  transform(word: string): unknown {
    if (!word) {
      return word;
    }
    return word.split(' ').join('-')
    }
  }

