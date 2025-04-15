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
// /**
//  * debug
//  */

// const gui = new GUI.GUI();
// const debugObject = { materiaColor: '#81D4FA' };
// gui.addColor(debugObject, 'materiaColor').onChange(() => {
//   material.color.set(debugObject.materiaColor);
// });
// const particleColor = { particleColor: '#CFD8DC' };
// gui.addColor(particleColor, 'particleColor').onChange(() => {
//   particlesMaterial.color = new THREE.Color(particleColor.particleColor);
// });

//canvas
const canvas = document.querySelector('canvas.webgl');

//create scene
const scene = new THREE.Scene();

/**
 * objects
 */

//texture
const textureLoader = new THREE.TextureLoader();
const gradientTexture = textureLoader.load('static/3.jpg');
gradientTexture.magFilter = THREE.NearestFilter; //漸變濾鏡

//material
// const initialMeshColor = '#81D4FA'; //初始顏色
const material = new THREE.MeshToonMaterial({
  // color: debugObject.materiaColor,
  color: INITIAL_MESH_COLOR,
  gradientMap: gradientTexture,
  // wireframe: true, // 啟用線框模式
});

//meshs

const mesh1 = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.45, 12, 48),
  material
);
const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 24), material);
const mesh3 = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.8, 0.35, 80, 16),
  material
);

mesh1.position.y = -OBJECT_DISTANCE * 0;
mesh2.position.y = -OBJECT_DISTANCE * 1;
mesh3.position.y = -OBJECT_DISTANCE * 2;

mesh1.position.x = 2;
mesh2.position.x = -2;
mesh3.position.x = 2;

scene.add(mesh1, mesh2, mesh3);

const sectionMeshes = [mesh1, mesh2, mesh3];

/**
particles 
*/
//geometry

const positions = new Float32Array(PARTICLES_COUNT * 3); //每個粒子都有三個值(x,y,z)

for (let i = 0; i < PARTICLES_COUNT; i++) {
  positions[i * 3 + 0] = (Math.random() - 0.5) * 10; //隨機生成x座標
  positions[i * 3 + 1] =
    OBJECT_DISTANCE * 0.5 -
    Math.random() * OBJECT_DISTANCE * sectionMeshes.length * 2; //隨機生成y座標
  //或者可寫成 * OBJECT_DISTANCE * 3
  //用sectionMeshes.length 就算新增物件也不用重新修改
  positions[i * 3 + 2] = (Math.random() - 0.5) * 14; //隨機生成z座標
}
const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3)
); //3表示每個粒子都有三個值(x,y,z)
//material

const particlesTexture = textureLoader.load('static/smoke_05.png');
const particlesMaterial = new THREE.PointsMaterial({
  alphaMap: particlesTexture,
  color: INIT_PARTICLE_COLOR,
  sizeAttenuation: true,
  size: 38,
  transparent: true,
  depthWrite: false, // 深度寫入
  opacity: 0.25,
  blending: THREE.AdditiveBlending, // 混合模式
  sizeAttenuation: true,
});
//points
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

/**
lights 
*/
const directionLight = new THREE.DirectionalLight('#ffffff', 1);
directionLight.position.set(1, 1, 0);
scene.add(directionLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

function updateMeshPositionsForResponsiveness() {
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  // 根據螢幕大小調整位置
  // 如果是 mobile (isMobile 為 true)，就把 X 座標設為 0 (置中)
  // 否則 (桌面版)，使用你原本的數值
  mesh1.position.x = isMobile ? 0 : 2;
  mesh2.position.x = isMobile ? 0 : -2;
  mesh3.position.x = isMobile ? 0 : 2;
}
// 首次載入時，根據當前的螢幕寬度設定一次位置
updateMeshPositionsForResponsiveness();

window.addEventListener('resize', () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //WebGL 渲染器的像素比 window.devicePixelRatio：表示設備的實際像素與 CSS 像素的比例。普通顯示器：devicePixelRatio = 1；Retina 顯示器：devicePixelRatio = 2。
  // 每當視窗大小改變時，重新計算並設定 mesh 的位置
  updateMeshPositionsForResponsiveness();
});

/**
 * camera
 */
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

/**
 * render
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
  antialias: true, // 抗鋸齒
});
renderer.setSize(sizes.width, sizes.height);

/**
 * scroll
 */
let scrollY = window.scrollY;
let currentSection = 0;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  //計算當前滾動的區域
  const newSection = Math.round(scrollY / sizes.height);
  // console.log(newSection);
  //更新Section
  if (newSection != currentSection) {
    currentSection = newSection;
    // console.log('change', currentSection);
    gsap.to(sectionMeshes[currentSection].rotation, {
      duration: 1.5,
      ease: 'power2.inOut',
      x: '+=6',
      y: '+=3',
      z: '+=1.5',
    });
  }
});

/**
 * cursor
 */
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

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
