
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight/*, false*/ ); // commented part is for lower resolution
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0xC27BA0 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const radius = 1;
    const geometry2 = new THREE.DodecahedronGeometry(radius);
    const dodecahedron = new THREE.Mesh( geometry2, material );
    dodecahedron.position.x=2;
    scene.add(dodecahedron);


    const color = 0xFFFFFF;
    const intensity = 3;
    const light = new THREE.PointLight(color, intensity);
    scene.add(light);

    //const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    //scene.add(light);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    animate();