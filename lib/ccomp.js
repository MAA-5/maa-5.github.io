

document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

	          
    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            //loading.style.display = 'none';
			loading.style.visibility = 'hidden';
            splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            startButton.style.opacity = 1;
        }, 2500);
    });

    startButton.addEventListener('click', function (e) {
        
        splash.style.display = 'none';
        
    });
});