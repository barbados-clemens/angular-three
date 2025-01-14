// GENERATED
import { ThreeBufferGeometry } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { ParametricBufferGeometry } from 'three';

@Directive({
  selector: 'ngt-parametric-buffer-geometry,ngt-parametric-geometry',
  exportAs: 'ngtParametricBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: ParametricBufferGeometryDirective,
    },
  ],
})
export class ParametricBufferGeometryDirective extends ThreeBufferGeometry<ParametricBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof ParametricBufferGeometry>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof ParametricBufferGeometry>) {
    this.extraArgs = v;
  }

  geometryType = ParametricBufferGeometry;
}
