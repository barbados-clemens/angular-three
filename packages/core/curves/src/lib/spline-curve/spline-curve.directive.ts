// GENERATED
import { ThreeCurve } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { SplineCurve } from 'three';

@Directive({
  selector: 'ngt-spline-curve',
  exportAs: 'ngtSplineCurve',
  providers: [
    {
      provide: ThreeCurve,
      useExisting: SplineCurveDirective,
    },
  ],
})
export class SplineCurveDirective extends ThreeCurve<SplineCurve> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof SplineCurve>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof SplineCurve>) {
    this.extraArgs = v;
  }

  curveType = SplineCurve;
}
