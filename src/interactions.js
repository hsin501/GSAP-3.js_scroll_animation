import gsap from 'gsap';
import { sizes } from './utils';
import {
  INITIAL_MESH_COLOR,
  INIT_PARTICLE_COLOR,
  MOBILE_BREAKPOINT,
} from './constants';

export const cursor = { x: 0, y: 0 };
let currentSection = 0;

/**
 * 設置滾動事件監聽器，觸發模型進入視圖時的動畫
 * @param {THREE.Mesh[]} sectionMeshes - 需要動畫的模型數組
 */
export function setupScrollLinstener(sectionMeshes) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // 獲取當前滾動位置

    //// 計算當前滾動到哪個區域
    const newSection = Math.round(scrollY / sizes.height);
    // console.log(newSection);

    // 如果當前區域與新區域不同，則觸發動畫
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
  console.log('滾動事件監聽器已設置');
}

/**
 * 設置鼠標移動事件監聽器，更新共享的 cursor 對象
 */
export function setupCursorListener() {
  window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  });
  console.log('鼠標移動事件監聽器已設置');
}

/**
 * 根據屏幕寬度更新模型位置 (響應式)
 * @param {THREE.Mesh[]} sectionMeshes - 需要調整位置的模型數組
 */

function updateMeshPositionsForResponsiveness(sectionMeshes) {
  if (!sectionMeshes || sectionMeshes.length < 3) return;
  const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
  sectionMeshes[0].position.x = isMobile ? 0 : 2;
  sectionMeshes[1].position.x = isMobile ? 0 : -2;
  sectionMeshes[2].position.x = isMobile ? 0 : 2;
}

/**
 * 設置窗口大小調整的監聽器，處理響應式佈局
 * @param {THREE.PerspectiveCamera} camera - 場景相機
 * @param {THREE.WebGLRenderer} renderer - WebGL 渲染器
 * @param {THREE.Mesh[]} sectionMeshes - 需要響應式調整的模型數組
 */

export function setupResizeListener(camera, renderer, sectionMeshes) {
  window.addEventListener('resize', () => {
    // 更新共享的 sizes 對象
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //  更新相機的長寬比和投影矩陣
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // 更新渲染器的大小和像素比
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 調用函數更新模型位置
    updateMeshPositionsForResponsiveness(sectionMeshes);
    console.log('窗口尺寸已更新');
  });
  updateMeshPositionsForResponsiveness();
  console.log('響應式監聽器已設置');
}

/**
 * 設置所有與 HTML DOM 元素的交互
 * @param {THREE.Material} material - 模型材質 (用於顏色選擇器更新)
 * @param {THREE.PointsMaterial} particlesMaterial - 粒子材質 (用於顏色選擇器更新)
 */
