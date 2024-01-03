import * as THREE from 'three';

// @ts-ignore
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
import { AsciiEffect } from '@/lib/AsciiEffect';
import { Pane } from 'tweakpane';
import { useEffect } from 'react';

export default function AsciiEffectPage() {
  useEffect(() => {
    let camera: THREE.PerspectiveCamera, controls: typeof TrackballControls, scene: THREE.Scene, renderer: THREE.WebGLRenderer, effect: AsciiEffect;
    
    let object: THREE.Mesh;
    
    const PARAMS = {
      characters: ' .:-+*=%@#',
      resolution: 0.15,
      scale: 1,
      color: '#ffffff',
      secondaryColor: '#000000',
      invert: true,
      object: 'sphere',
      background: '#000000',
    };
    
    function reInit() {
      effect.domElement.remove();
  
      effect = new AsciiEffect(renderer, PARAMS.characters, { 
        invert: PARAMS.invert,
        color: PARAMS.color,
        secondaryColor: PARAMS.secondaryColor,
        resolution: PARAMS.resolution,
        scale: PARAMS.scale,
      });
  
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
  
      document.body.appendChild(effect.domElement);
      
      controls = new TrackballControls(camera, effect.domElement);
  
      scene.background = new THREE.Color(PARAMS.background);
  
      scene.remove(object);
  
      switch(PARAMS.object.toLowerCase()) {
        case 'sphere':
          object = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
          scene.add(object);
          break;
        case 'box':
          object = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
          scene.add(object);
          break;
        case 'torus':
          object = new THREE.Mesh(new THREE.TorusGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
          scene.add(object);
          break;
        case 'cone':
          object = new THREE.Mesh(new THREE.ConeGeometry(200, 200, 200), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
          scene.add(object);
          break;
        case 'cylinder':
          object = new THREE.Mesh(new THREE.CylinderGeometry(200, 200, 200), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
          scene.add(object);
          break;
      }
  
      effect.domElement.style.backgroundColor = PARAMS.background;
    }
    
    function init() {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.y = 150;
      camera.position.z = 500;
    
      scene = new THREE.Scene();
      scene.background = new THREE.Color(PARAMS.background);
    
      const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
      pointLight1.position.set(500, 500, 500);
      scene.add(pointLight1);
    
      const pointLight2 = new THREE.PointLight(0xffffff, 0.05, 0, 0);
      pointLight2.position.set(-500, -500, -500);
      scene.add(pointLight2);
    
      const pointLight3 = new THREE.PointLight(0xffffff, 0.15, 0, 0);
      pointLight3.position.set(-500, -500, 500);
      scene.add(pointLight3);
    
      const pointLight4 = new THREE.PointLight(0xffffff, 0.15, 0, 0);
      pointLight4.position.set(-500, 500, -500);
      scene.add(pointLight4);
    
      const pointLight5 = new THREE.PointLight(0xffffff, 0.15, 0, 0);
      pointLight5.position.set(500, -500, -500);
      scene.add(pointLight5);
    
      object = new THREE.Mesh(new THREE.SphereGeometry(200, 20, 10), new THREE.MeshPhongMaterial({ flatShading: false, color: '#ff00000' }));
      scene.add(object);
    
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
    
      effect = new AsciiEffect(renderer, PARAMS.characters, { 
        invert: PARAMS.invert,
        color: PARAMS.color,
        secondaryColor: PARAMS.secondaryColor,
        resolution: PARAMS.resolution,
        scale: PARAMS.scale,
      });
    
      effect.setSize(window.innerWidth, window.innerHeight);
      effect.domElement.style.backgroundColor = PARAMS.background;
    
      document.body.appendChild(effect.domElement);
    
      controls = new TrackballControls(camera, effect.domElement);
    
      window.addEventListener('resize', onWindowResize);
    
      const pane = new Pane({
        "title": "Settings"
      });
    
      const f1 = pane.addFolder({
        title: 'ASCII Effect',
      });
    
      f1.addBinding(PARAMS, 'characters', {
        label: "Characters"
      });
      f1.addBinding(PARAMS, 'resolution', {
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "Resolution"
      });
      f1.addBinding(PARAMS, 'scale', {
        min: 0.5,
        max: 10,
        step: 0.5,
        label: "Scale"
      });
      f1.addBinding(PARAMS, 'color', {
        label: "Color 1"
      });
      f1.addBinding(PARAMS, 'secondaryColor', {
        label: "Color 2"
      });
      f1.addBinding(PARAMS, 'invert', {
        label: "Invert"
      });
    
      const f2 = pane.addFolder({
        title: 'Scene',
      });
    
      f2.addBinding(PARAMS, 'object', {
        options: {
          sphere: 'Sphere',
          box: 'Box',
          torus: 'Torus',
          cone: 'Cone',
          cylinder: 'Cylinder',
        },
        label: "Object"
      });
      f2.addBinding(PARAMS, 'background', {
        label: "Background"
      });
    
      const f3 = pane.addFolder({
        title: 'Misceallaneous',
        expanded: false,
      });
    
      f3.addButton({
        title: 'Reset',
      }).on('click', () => {
        PARAMS.characters = ' .:-+*=%@#';
        PARAMS.resolution = 0.15;
        PARAMS.scale = 1;
        PARAMS.color = '#ffffff';
        PARAMS.secondaryColor = '#000000';
        PARAMS.invert = true;
        PARAMS.object = 'sphere';
        PARAMS.background = '#000000';
    
        pane.refresh();
    
        reInit();
      });
    
      pane.on('change', (ev) => {
        reInit();
      });
    }
    
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    }
    
    function animate() {
      requestAnimationFrame(animate);
    
      render();
    }
    
    function render() {
      controls.update();
     
      effect.render(scene, camera);
    }

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      reInit();
    }
  }, []);

  return (
    <></>
  );
}