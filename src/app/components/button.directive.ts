import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() variant: 'default' | 'ghost' = 'default';
  @Input() mainColor: 'default' | 'secondly' = 'default';
  @Input() size: 'default' | 'sm' | 'lg' = 'default';
  ref: ElementRef<HTMLButtonElement>;
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    this.ref = elementRef;
  }
  applyStyles(): string {
    const baseClasses =
      'active:scale-95 inline-flex capitalize items-center font-semibold transition justify-center rounded-md text-sm transition-color focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const colorClasses =
      this.mainColor === 'secondly'
        ? 'bg-secondly focus:ring-secondly/80 text-secondly border-secondly hover:bg-secondly/85'
        : 'bg-mainBlue focus:ring-mainBlue/80 text-mainBlue border-mainBlue hover:bg-mainBlue/85';
    const variantClasses =
      this.variant === 'ghost'
        ? 'bg-transparent border-2 hover:bg-mainBlue/5'
        : 'text-white';
    const sizeClasses =
      this.size === 'sm'
        ? 'px-2'
        : this.size === 'lg'
        ? 'px-8'
        : 'py-[13px] px-4';
    const widthClass = this.fullWidth ? 'w-full' : '';

    // Split the classes by spaces and filter out empty strings
    const classes = [
      baseClasses,
      colorClasses,
      variantClasses,
      sizeClasses,
      widthClass,
    ]
      .filter((cls) => cls.trim() !== '')
      .join(' ');

    return classes;
  }

  ngOnInit(): void {
    const classes = this.applyStyles();
    this.ref.nativeElement.className = classes;
  }
}
