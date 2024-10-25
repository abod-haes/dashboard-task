import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLabelInput]',
  standalone: true,
})
export class LabelInputDirective {
  ref: ElementRef<HTMLButtonElement>;
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    this.ref = elementRef;
  }

  ngOnInit(): void {
    const classes = 'mb-0.5 capitalize';
    this.ref.nativeElement.className = classes;
  }
}
