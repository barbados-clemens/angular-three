export const controls = [
  {
    name: 'OrbitControls',
    injectDocument: false,
    importThree: false,
    useRenderer: true,
    inputs: [],
    constructor: '(camera, renderer.domElement)',
  },
  {
    name: 'FlyControls',
    injectDocument: false,
    importThree: false,
    useRenderer: true,
    inputs: [],
    constructor: '(camera, renderer.domElement)',
  },
  {
    name: 'DeviceOrientationControls',
    injectDocument: false,
    importThree: false,
    useRenderer: false,
    inputs: [],
    constructor: '(camera)',
  },
  {
    name: 'FirstPersonControls',
    injectDocument: false,
    importThree: false,
    useRenderer: true,
    inputs: [],
    constructor: '(camera, renderer.domElement)',
  },
  {
    name: 'PointerLockControls',
    injectDocument: true,
    importThree: false,
    useRenderer: false,
    inputs: [],
    constructor: '(camera, this.document.body)',
  },
  {
    name: 'DragControls',
    injectDocument: false,
    importThree: true,
    useRenderer: true,
    inputs: [
      {
        name: 'objects',
        import: 'Object3D',
        isOptional: false,
        isArray: true,
        default: '[]',
      },
    ],
    constructor: '(this.objects, camera, renderer.domElement)',
  },
  {
    name: 'TrackballControls',
    injectDocument: false,
    importThree: false,
    useRenderer: true,
    inputs: [],
    constructor: '(camera, renderer.domElement)',
  },
  {
    name: 'TransformControls',
    injectDocument: false,
    importThree: false,
    useRenderer: true,
    inputs: [],
    constructor: '(camera, renderer.domElement)',
  },
];