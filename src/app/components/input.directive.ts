import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInput]',
  standalone: true,
})
export class InputDirective {
  @Input() fullWidth?: boolean = false;
  ref: ElementRef<HTMLButtonElement>;
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    this.ref = elementRef;
  }

  ngOnInit(): void {
    let classes =
      'border rounded m-[1px]   p-3  outline-none font-normal text-sm  focus:border-mainBlue focus:border-2 focus:m-0 transition';
    if (this.fullWidth) classes += 'w-full';
    this.ref.nativeElement.className = classes;
  }
}
