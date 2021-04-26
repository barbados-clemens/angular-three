import type { UnknownRecord } from '@angular-three/core';
import { ThreePass } from '@angular-three/postprocessing';
import { Directive, Input } from '@angular/core';
import type {
  Color,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderTarget,
} from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

@Directive({
  selector: 'ngt-unrealBloomPass',
  exportAs: 'ngtUnrealBloomPass',
  providers: [{ provide: ThreePass, useExisting: UnrealBloomPassDirective }],
})
export class UnrealBloomPassDirective extends ThreePass<UnrealBloomPass> {
  @Input() set args(v: ConstructorParameters<typeof UnrealBloomPass>) {
    this.extraArgs = v;
  }

  @Input() resolution?: Vector2;
  @Input() strength?: number;
  @Input() radius?: number;
  @Input() threshold?: number;
  @Input() clearColor?: Color;
  @Input() renderTargetsHorizontal?: WebGLRenderTarget[];
  @Input() renderTargetsVertical?: WebGLRenderTarget[];
  @Input() nMips?: number;
  @Input() renderTargetBright?: WebGLRenderTarget;
  @Input() highPassUniforms?: UnknownRecord;
  @Input() materialHighPassFilter?: ShaderMaterial;
  @Input() separableBlurMaterials?: ShaderMaterial[];
  @Input() compositeMaterial?: ShaderMaterial;
  @Input() bloomTintColors?: Vector3[];
  @Input() copyUniforms?: UnknownRecord;
  @Input() materialCopy?: ShaderMaterial;
  @Input() oldClearColor?: Color;
  @Input() oldClearAlpha?: number;
  @Input() basic?: MeshBasicMaterial;
  @Input() fsQuad?: UnknownRecord;

  passType = UnrealBloomPass;
  extraInputs = [
    'resolution',
    'strength',
    'radius',
    'threshold',
    'clearColor',
    'renderTargetsHorizontal',
    'renderTargetsVertical',
    'nMips',
    'renderTargetBright',
    'highPassUniforms',
    'materialHighPassFilter',
    'separableBlurMaterials',
    'compositeMaterial',
    'bloomTintColors',
    'copyUniforms',
    'materialCopy',
    'oldClearColor',
    'oldClearAlpha',
    'basic',
    'fsQuad',
  ];
}
