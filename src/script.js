import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';
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

const canvas = document.querySelector('canvas.webgl');
if (!canvas) {
  throw new Error('No canvas found');
} else {
  //基礎設置(調用setup.js)
  const scene = createScene();
  const { camera, cameraGroup } = setupCamera(scene);
  const renderer = setupRenderer(canvas);
  setupLights(scene);

  //創建場景物件(調用objects.js)
  const textures = loadTextures();
  const materials = createMaterials(textures);
  const sectionMeshes = createMeshes(materials.material);
  scene.add(...sectionMeshes);
  const particles = createParticles(materials.particlesMaterial, sectionMeshes);
  scene.add(particles);
}

/**
particles 
*/
//geometry

//points

/**
 * scroll
 */
let scrollY = window.scrollY;

/**
 * cursor
 */

/**
 * animated
 */

const clock = new THREE.Clock();
let previousTime = 0;
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  //計算至上一幀過了多久時間 確保每一幀在不同裝置上不會差太多
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

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

// ===== 顏色選擇器 =====
const meshColorPicker = document.getElementById('meshColorPicker');
const particleColorPicker = document.getElementById('particleColorPicker');

// 設定選擇器的初始值 (雖然 HTML value 已設定，JS 再設一次確保同步)
meshColorPicker.value = INITIAL_MESH_COLOR;
particleColorPicker.value = INIT_PARTICLE_COLOR;

// 監聽模型顏色選擇器的變化 (使用 'input' 事件可即時反應)
meshColorPicker.addEventListener('input', (event) => {
  const newColor = event.target.value;
  material.color.set(newColor); // 更新共用的 material 顏色
});

// 監聽粒子顏色選擇器的變化
particleColorPicker.addEventListener('input', (event) => {
  const newColor = event.target.value;
  particlesMaterial.color.set(newColor); // 更新粒子 material 顏色
});

// ===== 顯示/隱藏 =====
const toggleButton = document.getElementById('toggleColorButton');
const colorPanel = document.querySelector('.color-controls');

if (toggleButton && colorPanel) {
  // 確保元素存在
  toggleButton.addEventListener('click', (event) => {
    event.stopPropagation(); // 停止事件冒泡，避免觸發其他事件
    colorPanel.classList.toggle('is-open');
  });
  // 監聽點擊事件，當點擊在顏色選擇器外部時關閉顏色選擇器
  // 這裡使用了 event.stopPropagation() 來避免事件冒泡，確保不會觸發到 toggleButton 的點擊事件
  document.addEventListener('click', (event) => {
    if (
      colorPanel.classList.contains('is-open') &&
      !colorPanel.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      colorPanel.classList.remove('is-open');
    }
  });
}

//修復觸控裝置的 hover 效果
const navItems = document.querySelectorAll('.glass-container ul li');
if (navItems.length > 0) {
  // 先移除所有的 touch-hover class
  const removeAllTouchHover = () => {
    navItems.forEach((item) => {
      item.classList.remove('touch-hover');
    });
  };

  navItems.forEach((item) => {
    // --- 觸控開始 ---
    item.addEventListener(
      'touchstart',
      function (event) {
        // 先移除其他項目的高亮，確保只有當前觸控的項目高亮
        removeAllTouchHover();
        // 為當前觸控的項目添加高亮
        // console.log('觸控開始，正在為此元素添加 touch-hover:', this);
        this.classList.add('touch-hover');
      },
      { passive: true }
    );
    // --- 觸控結束 ---
    item.addEventListener(
      'touchend',
      function (event) {
        this.classList.remove('touch-hover');
      },
      { passive: true }
    );
    // --- 觸控取消 ---
    item.addEventListener(
      'touchcancel',
      function (event) {
        this.classList.remove('touch-hover');
      },
      { passive: true }
    );
    // --- 保險措施：滾動時清除所有高亮 ---
  });
  window.addEventListener('scroll', removeAllTouchHover, { passive: true });
}

// =====================================
