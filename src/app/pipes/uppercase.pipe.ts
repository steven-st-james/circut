import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(word: string): unknown {
    if (word === '') {
      return null;
    }
    const string: Array<string> = word.split(" ");
  const updatedTitle: Array<string> = [];
  for (let st in string) {
    updatedTitle[st] = string[st][0].toUpperCase() + string[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
  }

}
