import { AnyConstructor, ThreeObject3d } from '@angular-three/core';
import {
  Directive,
  EventEmitter,
  Input,
  OnInit,
  Optional,
  Output,
  SkipSelf,
} from '@angular/core';
import type { Object3D } from 'three';
import { Audio } from 'three';
import { AudioListenerDirective } from '../audio-listener';

@Directive()
export abstract class ThreeAudio<
  TAudioNode extends AudioNode = GainNode,
  TAudio extends Audio<TAudioNode> = Audio<TAudioNode>
> implements OnInit {
  @Input() object3d?: Object3D;

  @Output() ready = new EventEmitter<TAudio>();

  constructor(
    @Optional()
    @SkipSelf()
    private readonly listenerDirective?: AudioListenerDirective,
    @Optional()
    @SkipSelf()
    protected readonly parentObjectDirective?: ThreeObject3d
  ) {}

  abstract audioType: AnyConstructor<TAudio>;

  private _audio?: TAudio;

  ngOnInit() {
    if (!this.listenerDirective) {
      console.error('AudioListener must exist to initialize Audio');
      return;
    }

    this._audio = new this.audioType(this.listenerDirective.audioListener);

    if (this.audio) {
      if (this.object3d) {
        this.object3d.add(this.audio);
      } else if (this.parentObjectDirective) {
        this.parentObjectDirective.object3d.add(this.audio);
      }
    }

    this.ready.emit(this.audio);
  }

  get audio(): TAudio | undefined {
    return this._audio;
  }
}
