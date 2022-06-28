import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nextLine'
})
export class NextLinePipe implements PipeTransform {

  transform(text: string):unknown {
    return null;
  }


}
