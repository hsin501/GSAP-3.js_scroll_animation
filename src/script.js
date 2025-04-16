import './style.css';
import * as THREE from 'three';

// import * as GUI from 'lil-gui';
import {
  OBJECT_DISTANCE,
  INITIAL_MESH_COLOR,
  INIT_PARTICLE_COLOR,
  PARTICLES_COUNT,
  MOBILE_BREAKPOINT,
} from './constants.js';
import { textureLoader, sizes } from './utils.js';
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
  setDOMInteractions,
} from './interactions.js';

const canvas = document.querySelector('canvas.webgl');
if (!canvas) {
  throw new Error('No canvas found');
} else {
  //==== 基礎設置(調用setup.js) ====
  const scene = createScene();
  const { camera, cameraGroup } = setupCamera(scene);
  const renderer = setupRenderer(canvas);
  setupLights(scene);

  //==== 創建場景物件(調用objects.js) ====
  const textures = loadTextures();
  const materials = createMaterials(textures);
  const sectionMeshes = createMeshes(materials.material);
  scene.add(...sectionMeshes);
  const particles = createParticles(materials.particlesMaterial, sectionMeshes);
  scene.add(particles);
}

//==== 交互邏輯(調用interactions.js) ====
setupResizeListener(camera, renderer, sectionMeshes);
setupScrollLinstener(sectionMeshes);
setupCursorListener();
setDOMInteractions(materials.material, materials.particlesMaterial);

const clock = new THREE.Clock();
let previousTime = 0;
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  //計算至上一幀過了多久時間 確保每一幀在不同裝置上不會差太多
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  const scrollY = window.scrollY;

  //animate camera
  camera.position.y = (-scrollY / sizes.height) * OBJECT_DISTANCE;

  const parallaxX = cursor.x * 0.5;
  const parallaxY = -cursor.y * 0.5;

  // 每一幀都會根據目標位置(parallaxX/Y)和當前位置(cameraGroup.position.x/y)的差值
  // 乘上一個因子(x * deltaTime)來逐漸調整相機位置
  // 這樣相機不會直接跳到目標位置,而是平滑地過渡過去
  cameraGroup.position.x +=
    (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
  cameraGroup.position.y +=
    (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

  //animate mesh
  for (const mesh of sectionMeshes) {
    mesh.rotation.x += deltaTime * 0.2;
    mesh.rotation.y += deltaTime * 0.12;
  }

  // Render
  renderer.render(scene, camera);

  // // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
