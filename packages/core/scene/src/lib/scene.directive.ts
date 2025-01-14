import {
  OBJECT_3D_CONTROLLER_PROVIDER,
  ThreeObject3d,
} from '@angular-three/core';
import { Directive, OnInit } from '@angular/core';
import { Scene } from 'three';

@Directive({
  selector: 'ngt-scene',
  exportAs: 'ngtScene',
  providers: [
    { provide: ThreeObject3d, useExisting: SceneDirective },
    OBJECT_3D_CONTROLLER_PROVIDER,
  ],
})
export class SceneDirective extends ThreeObject3d<Scene> implements OnInit {
  private _scene!: Scene;

  ngOnInit() {
    this.init();
  }

  protected initObject() {
    this._scene = new Scene();
  }

  get object3d(): Scene {
    return this._scene;
  }
}
