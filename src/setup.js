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
