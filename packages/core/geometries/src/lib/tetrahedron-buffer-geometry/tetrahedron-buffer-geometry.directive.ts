// GENERATED
import { ThreeBufferGeometry } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { TetrahedronBufferGeometry } from 'three';

@Directive({
  selector: 'ngt-tetrahedron-buffer-geometry,ngt-tetrahedron-geometry',
  exportAs: 'ngtTetrahedronBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: TetrahedronBufferGeometryDirective,
    },
  ],
})
export class TetrahedronBufferGeometryDirective extends ThreeBufferGeometry<TetrahedronBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof TetrahedronBufferGeometry>
    | undefined;

  @Input() set args(
    v: ConstructorParameters<typeof TetrahedronBufferGeometry>
  ) {
    this.extraArgs = v;
  }

  geometryType = TetrahedronBufferGeometry;
}
