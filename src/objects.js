import * as THREE from 'three';
import { textureLoader } from './utils.js';
import {
  INITIAL_MESH_COLOR,
  OBJECT_DISTANCE,
  INIT_PARTICLE_COLOR,
  PARTICLES_COUNT,
} from './constants.js';
import { log } from 'three/src/nodes/TSL.js';

/**
 * 加載應用所需的紋理
 * @returns {{gradientTexture: THREE.Texture, particlesTexture: THREE.Texture}} 包含已加載紋理的對象
 */

export function loadTextures() {
  //加載漸變紋理
  const gradientTexture = textureLoader.load('static/3.jpg');
  gradientTexture.magFilter = THREE.NearestFilter; //漸變濾鏡

  //加載粒子紋理
  const particlesTexture = textureLoader.load('static/smoke_05.png');
  console.log('紋理已加載');
  return { gradientTexture, particlesTexture };
}

/**
 * 創建應用所需的材質
 * @param {object} textures - 包含 loadTextures 返回的紋理對象
 * @param {THREE.Texture} textures.gradientTexture - 漸變紋理
 * @param {THREE.Texture} textures.particlesTexture - 粒子紋理
 * @returns {{material: THREE.MeshToonMaterial, particlesMaterial: THREE.PointsMaterial}} 包含模型和粒子材質的對象
 */

export function createMaterials(textures) {
  //創建模型材質
  const material = new THREE.MeshToonMaterial({
    color: INITIAL_MESH_COLOR,
    gradientMap: textures.gradientTexture,
    // wireframe: true, // 線框模式
  });
  //創建粒子材質
  const particlesMaterial = new THREE.PointsMaterial({
    alphaMap: textures.particlesTexture,
    color: INIT_PARTICLE_COLOR,
    sizeAttenuation: true,
    size: 38,
    transparent: true,
    depthWrite: false,
    opacity: 0.25,
  });
  console.log('材質已加載');
  return { material, particlesMaterial };
}

/**
 * 創建場景中的主要模型對象
 * @param {THREE.MeshToonMaterial} material - 用於所有模型的共享材質
 * @returns {THREE.Mesh[]} 包含所有創建的模型 (mesh1, mesh2, mesh3) 的數組
 */

export function createMeshes(material) {
  //創建第一個模型
  const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.45, 12, 48),
    material
  );
  //創建第二個模型
  const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 24), material);
  //創建第三個模型
  const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 80, 16),
    material
  );
  //設置初始位置
  mesh1.position.y = -OBJECT_DISTANCE * 0;
  mesh2.position.y = -OBJECT_DISTANCE * 1;
  mesh3.position.y = -OBJECT_DISTANCE * 2;

  mesh1.position.x = 2;
  mesh2.position.x = -2;
  mesh3.position.x = 2;
  const sectionMeshes = [mesh1, mesh2, mesh3];
  console.log('模型已加載');
  return sectionMeshes;
}

/**
 * 創建粒子系統
 * @param {THREE.PointsMaterial} particlesMaterial - 用於粒子的材質
 * @param {THREE.Mesh[]} sectionMeshes - 場景中的模型數組，用於確定粒子 Y 軸分佈範圍
 * @returns {THREE.Points} 創建的粒子系統對象
 */

export function createParticles(particlesMaterial, sectionMeshes) {
  //創建粒子幾何體位置數據
  const positions = new Float32Array(PARTICLES_COUNT * 3);
  const meshCount = sectionMeshes.length > 0 ? sectionMeshes.length : 3; // 安全處理，避免 length 為 0

  for (let i = 0; i < PARTICLES_COUNT; i++) {
    const i3 = i * 3;
    positions[i3 + 0] = (Math.random() - 0.5) * 10; //隨機生成x座標
    positions[i3 + 1] =
      OBJECT_DISTANCE * 0.5 - Math.random() * OBJECT_DISTANCE * meshCount * 2; //隨機生成y座標
    positions[i3 + 2] = (Math.random() - 0.5) * 14; //隨機生成z座標
  }
  //創建BufferGeometry並設置位置屬性
  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(positions, 3)
  );
  //創建粒子系統並添加到場景中
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  console.log('粒子系統已加載');

  return particles;
}
