import {
  Directive,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
} from '@angular/core';
import type { BuiltinShaderAttributeName } from 'three';
import { BufferAttribute } from 'three';
import type { AnyConstructor } from '../typings';
import { ThreeBufferGeometry } from './geometry.abstract';

@Directive()
export abstract class ThreeAttribute<
  TAttribute extends BufferAttribute = BufferAttribute
> implements OnInit, OnChanges, OnDestroy {
  @Input() attach?: BuiltinShaderAttributeName;

  abstract attributeType: AnyConstructor<TAttribute>;

  constructor(
    protected readonly ngZone: NgZone,
    @Optional() protected readonly geometryDirective?: ThreeBufferGeometry
  ) {}

  private _extraArgs: unknown[] = [];

  protected set extraArgs(v: unknown[]) {
    this._extraArgs = v;
    this.ngZone.runOutsideAngular(() => {
      this.init();
    });
  }

  private _attribute?: TAttribute;

  ngOnChanges() {
    this.ngZone.runOutsideAngular(() => {
      if (this.attribute) {
        this.attribute.needsUpdate = true;
      }
    });
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      if (!this.attribute) {
        this.init();
      }
    });
  }

  private init() {
    if (this.geometryDirective && this.attach) {
      this._attribute = new this.attributeType(...this._extraArgs);
      if (this.attribute) {
        this.geometryDirective.bufferGeometry.setAttribute(
          this.attach,
          this.attribute
        );
      }
    }
  }

  ngOnDestroy() {
    this.ngZone.runOutsideAngular(() => {
      if (this.geometryDirective && this.attach) {
        this.geometryDirective.bufferGeometry.deleteAttribute(this.attach);
      }
    });
  }

  get attribute(): TAttribute | undefined {
    return this._attribute;
  }
}
