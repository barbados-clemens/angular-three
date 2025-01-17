// GENERATED
import { ThreeBufferGeometry } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { ShapeBufferGeometry } from 'three';

@Directive({
  selector: 'ngt-shape-buffer-geometry,ngt-shape-geometry',
  exportAs: 'ngtShapeBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: ShapeBufferGeometryDirective,
    },
  ],
})
export class ShapeBufferGeometryDirective extends ThreeBufferGeometry<ShapeBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof ShapeBufferGeometry>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof ShapeBufferGeometry>) {
    this.extraArgs = v;
  }

  geometryType = ShapeBufferGeometry;
}
