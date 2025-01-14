// GENERATED
import { ThreeBufferGeometry } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { InstancedBufferGeometry } from 'three';

@Directive({
  selector: 'ngt-instanced-buffer-geometry,ngt-instanced-geometry',
  exportAs: 'ngtInstancedBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: InstancedBufferGeometryDirective,
    },
  ],
})
export class InstancedBufferGeometryDirective extends ThreeBufferGeometry<InstancedBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof InstancedBufferGeometry>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof InstancedBufferGeometry>) {
    this.extraArgs = v;
  }

  geometryType = InstancedBufferGeometry;
}
