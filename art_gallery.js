//-------------------------------------------------
// Title: art_gallery.js
// Author: Berfin Çiçek
//         Çağla Su Keşan
// ID: TODO
// Section: 1
// Assignment: 10
// Description: js file of the art gallery implemented by three.js
//-------------------------------------------------


    //initialize scene
    const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xFCE5CD );

    //initialize camera
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight/*, false*/ ); // commented part is for lower resolution
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    //const material = new THREE.MeshBasicMaterial( { color: 0xC27BA0 } );
    const material = new THREE.MeshNormalMaterial({shading : THREE.FlatShading}); //every side has different colors
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const radius = 1;
    const geometry2 = new THREE.DodecahedronGeometry(radius);
    const geometry3 = new THREE.SphereGeometry();

    const dodecahedron = new THREE.Mesh( geometry2, material );
    dodecahedron.position.x=2;
    scene.add(dodecahedron);

    const sphere = new THREE.Mesh( geometry3, material );
    sphere.position.x=-2;
    scene.add(sphere);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;


        renderer.render( scene, camera );
    };

    animate();