import {
  Directive,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  SkipSelf,
} from '@angular/core';
import { Color, Material, MaterialParameters } from 'three';
import { CanvasStore, InstancesStore } from '../stores';
import type { AnyConstructor, ThreeColor, UnknownRecord } from '../typings';

@Directive()
export abstract class ThreeMaterial<
  TMaterial extends Material = Material,
  TMaterialParameters extends MaterialParameters = MaterialParameters
> implements OnInit, OnDestroy {
  @Input() ngtId?: string;

  @Input() set parameters(v: TMaterialParameters | undefined) {
    this._parameters = v;
    if (v && this.material) {
      this.ngZone.runOutsideAngular(() => {
        this.convertColorToLinear(v);
        this.material.setValues(v);
        this.material.needsUpdate = true;
      });
    }
  }

  get parameters(): TMaterialParameters | undefined {
    return this._parameters;
  }

  private _parameters?: TMaterialParameters;

  constructor(
    protected readonly ngZone: NgZone,
    @SkipSelf() protected readonly instancesStore: InstancesStore,
    @SkipSelf() protected readonly canvasStore: CanvasStore
  ) {}

  abstract materialType: AnyConstructor<TMaterial>;

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      if (this.parameters) {
        this.convertColorToLinear(this.parameters);
      }
      this._material = new this.materialType(this.parameters);
      this.instancesStore.saveMaterial({
        id: this.ngtId,
        material: this._material,
      });
    });
  }

  private _material!: TMaterial;
  get material(): TMaterial {
    return this._material;
  }

  private convertColorToLinear(parameters: TMaterialParameters) {
    if ('color' in parameters) {
      const colorParams = (parameters as UnknownRecord)['color'] as ThreeColor;
      (parameters as UnknownRecord)['color'] = Array.isArray(colorParams)
        ? new Color(...colorParams)
        : new Color(colorParams);

      if (!this.canvasStore.getImperativeState().isLinear) {
        ((parameters as UnknownRecord)['color'] as Color).convertSRGBToLinear();
      }
    }
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.material) {
        this.instancesStore.removeMaterial(this.ngtId || this.material.uuid);
        this.material.dispose();
      }
    });
  }
}
