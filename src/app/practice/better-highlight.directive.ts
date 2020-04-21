import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input("appBetterHighlight") highlightColor: string = "#f86";

  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elmRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   "background-color",
    //   "#f86"
    // );
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mousehover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   "background-color",
    //   "#f86"
    // );
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.defaultColor;
  }
}
