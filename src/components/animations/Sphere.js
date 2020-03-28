import React, { Component } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import sphereLogo from '../../images/animated/sphere-logo.png';

class Sphere extends Component {
	componentDidMount() {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerHeight / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(280, 280);
		this.mount.appendChild(renderer.domElement);

		const controls = new OrbitControls(camera, renderer.domElement);

		controls.enableDamping = true;
		controls.enablePan = false;
		controls.enableZoom = false;

		const geometry = new THREE.SphereGeometry(
			3,
			50,
			50,
			0,
			Math.PI * 2,
			0,
			Math.PI * 2
		);

		const faceVertexUvs = geometry.faceVertexUvs[0];

		for (let i = 0; i < faceVertexUvs.length; i++) {
			const uvs = faceVertexUvs[i];
			const face = geometry.faces[i];

			for (let j = 0; j < 3; j++) {
				uvs[j].x = face.vertexNormals[j].x * 0.5 + 0.5;
				uvs[j].y = face.vertexNormals[j].y * 0.5 + 0.5;
			}
		}

		const material = new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load(sphereLogo)
		});

		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		camera.position.z = 5;

		const animate = function() {
			requestAnimationFrame(animate);

			sphere.rotation.x += 0.005;
			sphere.rotation.y += 0.005;

			renderer.render(scene, camera);
		};

		animate();
	}
	render() {
		return <div className="sphere" ref={ref => (this.mount = ref)} />;
	}
}

export default Sphere;
