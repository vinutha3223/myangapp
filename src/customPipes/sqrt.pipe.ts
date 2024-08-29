import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrt'
})
export class SqrtPipe implements PipeTransform {

  transform(value: any): unknown {
    return Math.sqrt(value);
  }

  

}
