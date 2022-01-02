//-------------------------------------------------
// Title: art_gallery.js
// Author: Berfin Çiçek
//         Çağla Su Keşan
// ID: TODO
// Section: 1
// Assignment: 10
// Description: js file of the art gallery implemented by three.js
//-------------------------------------------------

let scene, camera, renderer, cube, sphere, dodecahedron,skyboxGeo;

    function init(){
        //initialize scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xFCE5CD );

        //initialize camera
        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize( window.innerWidth, window.innerHeight/*, false*/ ); // commented part is for lower resolution
        document.body.appendChild( renderer.domElement );

        skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
        skybox = new THREE.Mesh(skyboxGeo);
        scene.add(skybox);

        const geometry = new THREE.BoxGeometry();
        //const material = new THREE.MeshBasicMaterial( { color: 0xC27BA0 } );
        const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        const radius = 1;
        const geometry2 = new THREE.DodecahedronGeometry(radius);
        const geometry3 = new THREE.SphereGeometry();

        dodecahedron = new THREE.Mesh( geometry2, material );
        dodecahedron.position.x=2;
        scene.add(dodecahedron);

        sphere = new THREE.Mesh( geometry3, material );
        sphere.position.x=-2;
        scene.add(sphere);

        camera.position.z = 5;
        //camera.position.set(1200, -250, 20000);

        animate();
    }
    function animate() {
        requestAnimationFrame( animate );

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        skybox.rotation.x += 0.005;
        skybox.rotation.y += 0.005;

  //requestAnimationFrame(animate);

        renderer.render( scene, camera );
    };

init();