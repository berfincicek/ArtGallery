//-------------------------------------------------
// Title: ArtGallery.js
// Author: Berfin Çiçek
//         Çağla Su Keşan
// ID: TODO
// Section: 1
// Assignment: 10
// Description: js file of the art gallery implemented by three.js
//-------------------------------------------------
//import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
let scene, camera, renderer, cube, sphere, dodecahedron, skyboxGeo, materialArray, controls, loader;

    function init()
    //-------------------------------------------------
    // Summary: initializes the scene, camera and adds objects
    // Precondition: -
    // Post-condition: the scene is set
    //-------------------------------------------------
    {

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xbdc3c7 );

        let light = new THREE.DirectionalLight(0xffffff, 0.5);
        scene.add(light);

        let light2 = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light2);

        //camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 45, 3000 );
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
        //camera.position.set(1200, -250, 20000);
        camera.position.z=5;


        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.domElement.id = "canvas";
        document.body.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls( camera, renderer.domElement );
        //camera.position.set( 0, 20, 100 );
        controls.update();

        const ft = "corona_ft.png";
        const bk = "corona_bk.png";
        const up = "corona_up.png";
        const dn = "corona_dn.png";
        const rt = "corona_rt.png";
        const lf = "corona_lf.png";

        const image_array=[ft,bk,up,dn,rt,lf];

        materialArray = createMaterialArray(image_array);
        addSkybox();

        addCube();
        addSphere();
        addDodecahedron();
        addRing();

        loadGLTF('./models/object1.gltf',-3,1.2,-20);
        loadGLTF('./models/object2canvas.gltf',3,2.4,-3);
        loadGLTF('./models/object3.gltf',-6,2,-2);
        loadGLTF('./models/object4.gltf',7,2,-2);

        animate();
    }

    //-------------------------------------------------
    // Summary: loads blender objects
    // Precondition: filename and the positions of the obj
    // Post-condition: object is added to the scene
    //-------------------------------------------------
    function loadGLTF(fileName, x,y,z){
        loader = new THREE.GLTFLoader();
        loader.load(fileName, (gltf) => {
            Mesh = gltf.scene;
            //Mesh.scale.set(0.2,0.2,0.2);
            scene.add(Mesh);
            Mesh.position.x = x;
            Mesh.position.y = y;
            Mesh.position.z = z;
            Mesh.material = texture;
        });

    }

    //-------------------------------------------------
    // Summary: creates material array from the skybox object
    // Precondition: takes the image locations
    // Post-condition: material array is created
    //-------------------------------------------------
    function createMaterialArray(images) {
      const materialArray = images.map(image => {
        let texture = new THREE.TextureLoader().load(image);
        return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }); // <---
      });
      return materialArray;
    }

    //-------------------------------------------------
    // Summary: adds skybox
    // Precondition: -
    // Post-condition: a box geometry is added with skybıx images
    //-------------------------------------------------
    function addSkybox() {
        skyboxGeo = new THREE.BoxGeometry(1000,1000,1000);
        skybox = new THREE.Mesh(skyboxGeo, materialArray);
        scene.add(skybox);
    }

    //-------------------------------------------------
    // Summary: animates skybox
    // Precondition: -
    // Post-condition: animates skybox with 0.0001 rotation
    //-------------------------------------------------
    function animateSkybox() {
        skybox.rotation.x += 0.0001;
        skybox.rotation.y += 0.0001;
    }

    //-------------------------------------------------
    // Summary: adds cube
    // Precondition: -
    // Post-condition: cube is added to the scene
    //-------------------------------------------------
    function addCube() {
        const geometry = new THREE.BoxGeometry();
        //const material = new THREE.MeshBasicMaterial( { color: 0xC27BA0 } );
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        cube = new THREE.Mesh( geometry, material );
        cube.position.y=-1.2;
        cube.position.z=-16;
        scene.add( cube );
    }

    //-------------------------------------------------
    // Summary: animates cube
    // Precondition: -
    // Post-condition: animates cube with 0.1 rotation
    //-------------------------------------------------
    function animateCube() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    //-------------------------------------------------
    // Summary: adds sphere
    // Precondition: -
    // Post-condition: sphere is added
    //-------------------------------------------------
    function addSphere() {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        sphere = new THREE.Mesh( geometry, material );
        //sphere.position.x=-2;
        sphere.position.z=-16;
        sphere.position.y=1.9;
        scene.add(sphere);
    }

    //-------------------------------------------------
    // Summary: rotates sphere
    // Precondition: -
    // Post-condition: sphere rotates with 0.01
    //-------------------------------------------------
    function animateSphere() {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
    }

    //-------------------------------------------------
    // Summary: adds Dodecahedron
    // Precondition: -
    // Post-condition: Dodecahedron is added
    //-------------------------------------------------
    function addDodecahedron() {
        const radius = 1;
        const geometry = new THREE.DodecahedronGeometry(radius);
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        dodecahedron = new THREE.Mesh( geometry, material );
        //dodecahedron.position.x=2;
        dodecahedron.position.z=-16;
        scene.add(dodecahedron);
    }

    //-------------------------------------------------
    // Summary: rotates Dodecahedron
    // Precondition: -
    // Post-condition: rotated with 0.01
    //-------------------------------------------------
    function animateDodecahedron() {
        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;
    }

    //-------------------------------------------------
    // Summary: adds ring
    // Precondition: -
    // Post-condition: ring is added
    //-------------------------------------------------
    function addRing(){
        const geometry = new THREE.RingGeometry( 1, 5, 32 );
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
        const mesh = new THREE.Mesh( geometry, material );
        mesh.position.z=-90;
        mesh.position.x=15;

        scene.add( mesh );
    }

    //-------------------------------------------------
    // Summary: animates the scene
    // Precondition: -
    // Post-condition: all animated objs are animated
    //-------------------------------------------------
    function animate() {
        animateCube();
        animateSphere();
        animateDodecahedron();

        animateSkybox();
	    controls.update();

        renderer.render( scene, camera );
        requestAnimationFrame( animate );
    };

init();