import { Directive, Input, NgZone, OnInit, Optional } from '@angular/core';
import { Curve, Vector, Vector2, Vector3 } from 'three';
import type { AnyConstructor } from '../typings';
import { ThreeBufferGeometry } from './geometry.abstract';

@Directive()
export abstract class ThreeCurve<TCurve extends Curve<Vector> = Curve<Vector>>
  implements OnInit {
  @Input() divisions?: number;

  abstract curveType: AnyConstructor<TCurve>;

  private _extraArgs: unknown[] = [];

  protected set extraArgs(v: unknown[]) {
    this._extraArgs = v;
    this.ngZone.runOutsideAngular(() => {
      this.init();
    });
  }

  constructor(
    private readonly ngZone: NgZone,
    @Optional() private readonly geometryDirective?: ThreeBufferGeometry
  ) {}

  private _curve?: TCurve;

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      if (!this.curve) {
        this.init();
      }
    });
  }

  private init() {
    this._curve = new this.curveType(...this._extraArgs);
    if (this.curve && this.geometryDirective) {
      const points = this.curve.getPoints(this.divisions);
      this.geometryDirective.bufferGeometry.setFromPoints(
        (points as unknown) as Vector3[] | Vector2[]
      );
    }
  }

  get curve(): TCurve | undefined {
    return this._curve;
  }
}
