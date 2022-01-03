//-------------------------------------------------
// Title: art_gallery.js
// Author: Berfin Çiçek
//         Çağla Su Keşan
// ID: TODO
// Section: 1
// Assignment: 10
// Description: js file of the art gallery implemented by three.js
//-------------------------------------------------

let scene, camera, renderer, cube, sphere, dodecahedron, skyboxGeo;

    function init(){

        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xbdc3c7 );

        //camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 45, 3000 );
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );
        //camera.position.set(1200, -250, 20000);
        camera.position.z=5;

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight);
        renderer.domElement.id = "canvas";
        document.body.appendChild( renderer.domElement );

        addSkybox();

        const ft = new THREE.TextureLoader().load("negx.jpg");
        const bk = new THREE.TextureLoader().load("negy.jpg");
        const up = new THREE.TextureLoader().load("negz.jpg");
        const dn = new THREE.TextureLoader().load("posx.jpg");
        const rt = new THREE.TextureLoader().load("posy.jpg");
        const lf = new THREE.TextureLoader().load("posz.jpg");

        //addCube();
        //addSphere();
        //addDodecahedron();

        //camera.position.z = 5;

        animate();
    }

    function addSkybox(){
        skyboxGeo = new THREE.BoxGeometry(3,3,3);
        skybox = new THREE.Mesh(skyboxGeo);
        scene.add(skybox);
    }

    function animateSkybox(){
        skybox.rotation.x += 0.005;
        skybox.rotation.y += 0.005;
    }

    function addCube(){
        const geometry = new THREE.BoxGeometry();
        //const material = new THREE.MeshBasicMaterial( { color: 0xC27BA0 } );
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
    }

    function animateCube(){
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }

    function addSphere(){
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        sphere = new THREE.Mesh( geometry, material );
        sphere.position.x=-2;
        scene.add(sphere);
    }

    function animateSphere(){
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
    }

    function addDodecahedron(){
        const radius = 1;
        const geometry = new THREE.DodecahedronGeometry(radius);
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        dodecahedron = new THREE.Mesh( geometry, material );
        dodecahedron.position.x=2;
        scene.add(dodecahedron);
    }

    function animateDodecahedron(){
        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;
    }

    function animate() {

        //animateCube();
        //animateSphere();
        //animateDodecahedron();

        animateSkybox();

        renderer.render( scene, camera );
        requestAnimationFrame( animate );
    };

init();