import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[betterhighlight]'
})

export class BetterHighlight implements OnInit{
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer2
    ){}

    ngOnInit(): void {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }
}