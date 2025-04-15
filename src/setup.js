import * as THREE from 'three';
import { sizes } from './utils';

export function createScene() {
  //create scene
  const scene = new THREE.Scene();
  console.log('場景已創建');

  return scene;
}

export function setupLights(scene) {
  const directionLight = new THREE.DirectionalLight('#ffffff', 1);
  directionLight.position.set(1, 1, 0);
  scene.add(directionLight);
  console.log('燈光已加載');
  return directionLight;
}

export function setupCamera(scene) {
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);
  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 6;
  cameraGroup.add(camera);
  console.log('相機已加載');
  return { camera, cameraGroup };
}

export function setupRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true, // 抗鋸齒
  });
  renderer.setSize(sizes.width, sizes.height);
  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  console.log('渲染器已加載');
  return renderer;
}
