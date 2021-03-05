import { OnInit, Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

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

    @HostListener('mouseenter') mouseEnter(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event){
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    }
}