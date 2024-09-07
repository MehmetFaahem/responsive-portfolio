import React, { useEffect, useRef } from "react";
import * as THREE from "three";

function SphereView() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth - 20, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Sphere geometry and material
    const geometry = new THREE.SphereGeometry(200, 32, 15);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.0005; // Decreased rotation speed on x-axis
      sphere.rotation.y += 0.0005; // Decreased rotation speed on y-axis
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Handle mouse move
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      sphere.rotation.x = mouseY * Math.PI; // Rotation according to cursor position on x-axis
      sphere.rotation.y = mouseX * Math.PI; // Rotation according to cursor position on y-axis
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full opacity-60"
      ref={mountRef}
    />
  );
}

export default SphereView;
