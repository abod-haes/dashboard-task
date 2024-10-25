import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIconButton]',
  standalone: true,
})
export class IconButtonDirective {
  ref: ElementRef<HTMLButtonElement>;
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    this.ref = elementRef;
  }

  ngOnInit(): void {
    const classes =
      'cursor-pointer transition-all w-[40px] h-[40px] border rounded-full relative flex justify-center items-center bg-slate-200 hover:bg-slate-200/50 text-slate-400 text-2xl';
    this.ref.nativeElement.className = classes;
  }
}
