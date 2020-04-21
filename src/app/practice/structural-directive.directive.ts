import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appStructuralDirective]",
})
export class StructuralDirectiveDirective {
  @Input("appStructuralDirective") set value(condition: boolean) {
    if (condition) {
      // display
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      // don't display
      this.vcRef.clear();
    }
  }

  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
