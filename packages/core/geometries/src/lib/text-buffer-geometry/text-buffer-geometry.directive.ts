// GENERATED
import { ThreeBufferGeometry } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { TextBufferGeometry } from 'three';

@Directive({
  selector: 'ngt-text-buffer-geometry,ngt-text-geometry',
  exportAs: 'ngtTextBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: TextBufferGeometryDirective,
    },
  ],
})
export class TextBufferGeometryDirective extends ThreeBufferGeometry<TextBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof TextBufferGeometry>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof TextBufferGeometry>) {
    this.extraArgs = v;
  }

  geometryType = TextBufferGeometry;
}
