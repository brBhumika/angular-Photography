import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phpipe'
})
export class PhpipePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(value:string,visibleChars:number=0):string{
    if(value.length<=visibleChars)
    {
      return value;
    }
    const maskSec="*".repeat(value.length-visibleChars);
    const visiSec=value.slice(-visibleChars);
    return maskSec+visiSec;

}

}
