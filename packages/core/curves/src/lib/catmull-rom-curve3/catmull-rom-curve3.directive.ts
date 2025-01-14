// GENERATED
import { ThreeCurve } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { CatmullRomCurve3 } from 'three';

@Directive({
  selector: 'ngt-catmull-rom-curve3',
  exportAs: 'ngtCatmullRomCurve3',
  providers: [
    {
      provide: ThreeCurve,
      useExisting: CatmullRomCurve3Directive,
    },
  ],
})
export class CatmullRomCurve3Directive extends ThreeCurve<CatmullRomCurve3> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof CatmullRomCurve3>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof CatmullRomCurve3>) {
    this.extraArgs = v;
  }

  curveType = CatmullRomCurve3;
}
