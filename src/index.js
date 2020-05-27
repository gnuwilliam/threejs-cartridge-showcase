import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import hulkImage from '../images/hulk.jpg';

const canvas = document.getElementById('canvas');

let camera;
let controls;
let scene;
let renderer;

let geometry;
let material;
let texture;
let mesh;

window.onload = () => {
  init();
  animate();
};

const init = () => {
  camera = new THREE.PerspectiveCamera(70, 1, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  texture = new THREE.TextureLoader().load(hulkImage);
  geometry = new THREE.BoxGeometry(0.3, 0.5, 0.04);
  material = [
    new THREE.MeshBasicMaterial({ color: '#282b3f' }),
    new THREE.MeshBasicMaterial({ color: '#282b3f' }),
    new THREE.MeshBasicMaterial({ color: '#282b3f' }),
    new THREE.MeshBasicMaterial({ color: '#282b3f' }),
    new THREE.MeshBasicMaterial({ map: texture }),
    new THREE.MeshBasicMaterial({ map: texture }),
  ];

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
  renderer.setClearColor(new THREE.Color('#1e202f'));

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
};

const animate = () => {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
};
