$(document).ready(() => {
    // particle animation using three.js

    var SEPARATION = 40,
        AMOUNTX = 130,
        AMOUNTY = 20;

    var container;
    var camera, scene, renderer;
    /*

    if (window.WebGLRenderingContext){
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    }
    else {
    renderer = new THREE.CanvasRenderer();
    }
    */

    var particles, particle, count = 0;

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;

    init();
    animate();

    function init() {


        container = document.querySelector('.particle_aniCon');
        // container = document.createElement('div');
        // document.body.appendChild(container);
        if (container) {
            container.className += container.className ? ' waves' : 'waves';
        }

        camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.y = 150; //changes how far back you can see i.e the particles towards horizon
        camera.position.z = 300; //This is how close or far the particles are seen

        camera.rotation.x = 0.35;

        scene = new THREE.Scene();

        particles = new Array();

        var PI2 = Math.PI * 2;
        var material = new THREE.SpriteCanvasMaterial({

            color: 0x71FCAA, //changes color of particles
            program: function (context) {
                context.beginPath();
                context.arc(0, 0, 0.1, 0, PI2, true);
                context.fill();
            }

        });

        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++] = new THREE.Sprite(material);
                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 100);
                scene.add(particle);

            }

        }

        renderer = new THREE.CanvasRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x2D2E32, 1); //bg color
        container.appendChild(renderer.domElement);

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        var i = 0;

        for (var ix = 0; ix < AMOUNTX; ix++) {
            for (var iy = 0; iy < AMOUNTY; iy++) {
                particle = particles[i++];
                particle.position.y = (Math.sin((ix + count) * 0.5) * 20) + (Math.sin((iy + count) * 0.5) * 20);
                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 2) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
            }

        }

        renderer.render(scene, camera);

        // This increases or decreases speed
        count += 0.1;

    }

})