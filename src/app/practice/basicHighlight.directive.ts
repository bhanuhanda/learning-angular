import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBasicHighlight]",
})
export class BasicHighlilghtDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "#678";
    this.element.nativeElement.style.color = "#fff";
    this.element.nativeElement.style.fontSize = "4rem";
  }
}
