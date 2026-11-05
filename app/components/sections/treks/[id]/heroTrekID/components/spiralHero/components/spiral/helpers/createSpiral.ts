import * as THREE from "three";

import { CONFIG } from "../constants/config";

interface CreateSpiralParams {
  textures: THREE.Texture[];
  cameraPositionUniform: {
    value: THREE.Vector3;
  };
  vertexShader: string;
  fragmentShader: string;
}

export function createSpiral({
  textures,
  cameraPositionUniform,
  vertexShader,
  fragmentShader,
}: CreateSpiralParams) {
  const spiral = new THREE.Group();

  const totalTiles = Math.floor(CONFIG.tilesPerRevolution * CONFIG.revolutions);

  const angleStep = (Math.PI * 2) / CONFIG.tilesPerRevolution;

  const tileEdgesY: number[] = [0];

  /*
   * Calculate vertical tile boundaries
   */
  for (let index = 0; index < totalTiles; index++) {
    const progress = index / totalTiles;

    const radius = CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;

    const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution;

    const tileHeight = arcWidth * CONFIG.tileHeightRatio;

    tileEdgesY.push(
      tileEdgesY[index] - (tileHeight + CONFIG.spiralGap) / CONFIG.tilesPerRevolution
    );
  }

  /*
   * Create tiles
   */
  for (let index = 0; index < totalTiles; index++) {
    const progress = index / totalTiles;

    const radius = CONFIG.startRadius + (CONFIG.endRadius - CONFIG.startRadius) * progress;

    const tileGap = 0.12;

    const arcWidth = (2 * Math.PI * radius) / CONFIG.tilesPerRevolution - tileGap;

    const tileHeight = arcWidth * CONFIG.tileHeightRatio;

    const tileAngle = arcWidth / radius + CONFIG.tileOverlap;

    const centerY = (tileEdgesY[index] + tileEdgesY[index + 1]) / 2;

    const slope = tileEdgesY[index + 1] - tileEdgesY[index];

    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    /*
     * Vertices
     */
    for (let row = 0; row <= 1; row++) {
      for (let column = 0; column <= CONFIG.tileSegments; column++) {
        const normalizedColumn = column / CONFIG.tileSegments;

        const angle = (normalizedColumn - 0.5) * tileAngle;

        positions.push(
          Math.sin(angle) * radius,

          (row - 0.5) * tileHeight + (normalizedColumn - 0.5) * slope,

          Math.cos(angle) * radius
        );

        uvs.push(normalizedColumn, row);
      }
    }

    /*
     * Indices
     */
    for (let column = 0; column < CONFIG.tileSegments; column++) {
      const current = column;
      const below = current + CONFIG.tileSegments + 1;

      indices.push(
        current,
        below,
        current + 1,

        below,
        below + 1,
        current + 1
      );
    }

    /*
     * Geometry
     */
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

    geometry.setIndex(indices);

    geometry.computeVertexNormals();

    /*
     * Material
     */
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,

      uniforms: {
        uMap: {
          value: textures[index % CONFIG.totalImages],
        },

        uCameraPosition: cameraPositionUniform,
      },

      side: THREE.DoubleSide,
    });

    /*
     * Mesh
     */
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.y = centerY;

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    /*
     * Tile
     */
    const tile = new THREE.Group();

    tile.rotation.y = index * angleStep;

    tile.add(mesh);

    spiral.add(tile);
  }

  return spiral;
}
