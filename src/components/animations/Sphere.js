import React, { Component } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import sphereLogo from '../../images/animated/sphere-logo.png';

class Sphere extends Component {
	componentDidMount() {
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(
			75,
			window.innerHeight / window.innerHeight,
			0.1,
			1000
		);

		var renderer = new THREE.WebGLRenderer({ alpha: true });
		renderer.setSize(280, 280);
		this.mount.appendChild(renderer.domElement);

		var controls = new OrbitControls(camera, renderer.domElement);

		controls.enableDamping = true;
		controls.enablePan = false;
		controls.maxDistance = 10;
		controls.minDistance = 5;

		var geometry = new THREE.SphereGeometry(
			3,
			50,
			50,
			0,
			Math.PI * 2,
			0,
			Math.PI * 2
		);

		var faceVertexUvs = geometry.faceVertexUvs[0];

		for (var i = 0; i < faceVertexUvs.length; i++) {
			var uvs = faceVertexUvs[i];
			var face = geometry.faces[i];

			for (var j = 0; j < 3; j++) {
				uvs[j].x = face.vertexNormals[j].x * 0.5 + 0.5;
				uvs[j].y = face.vertexNormals[j].y * 0.5 + 0.5;
			}
		}

		var material = new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load(sphereLogo)
		});

		var cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		camera.position.z = 5;

		var animate = function() {
			requestAnimationFrame(animate);

			cube.rotation.x += 0.005;
			cube.rotation.y += 0.005;

			renderer.render(scene, camera);
		};

		animate();
	}
	render() {
		return <div className="sphere" ref={ref => (this.mount = ref)} />;
	}
}

export default Sphere;
