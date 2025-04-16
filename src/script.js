import './style.css';
// import * as GUI from 'lil-gui';
import {
  createScene,
  setupLights,
  setupCamera,
  setupRenderer,
} from './setup.js';
import {
  loadTextures,
  createMaterials,
  createMeshes,
  createParticles,
} from './objects.js';
import {
  setupScrollLinstener,
  setupCursorListener,
  setupResizeListener,
  setupDOMInteractions,
} from './interactions.js';
import { startAnimation } from './animation.js';

//獲取Canvas元素
const canvas = document.querySelector('canvas.webgl');
if (!canvas) {
  throw new Error('錯誤：無法在頁面中找到 canvas.webgl 元素。應用無法初始化。');
} else {
  //==== 基礎設置(調用setup.js) ====
  const scene = createScene();
  const { camera, cameraGroup } = setupCamera(scene);
  const renderer = setupRenderer(canvas);
  setupLights(scene);

  //==== 對象創建(調用objects.js) ====
  const textures = loadTextures();
  const materials = createMaterials(textures);
  const sectionMeshes = createMeshes(materials.material);
  scene.add(...sectionMeshes);
  const particles = createParticles(materials.particlesMaterial, sectionMeshes);
  scene.add(particles);

  //==== 交互邏輯(調用interactions.js) ====
  setupResizeListener(camera, renderer, sectionMeshes);
  setupScrollLinstener(sectionMeshes);
  setupCursorListener();
  setupDOMInteractions(materials.material, materials.particlesMaterial);

  //==== 動畫循環(調用animation.js) ====
  startAnimation(scene, camera, cameraGroup, renderer, sectionMeshes);
}
console.log('應用初始化完成！');
