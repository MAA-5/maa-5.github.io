

document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

	          
    scene.addEventListener('loaded', function (e) {
        setTimeout(function() {
            //loading.style.display = 'none';
			loading.style.visibility = 'hidden';
            splash.style.backgroundColor = 'rgba(220, 212, 207, 0.85)';
            startButton.style.opacity = 1;
        }, 4000);
		
    });

    startButton.addEventListener('click', function (e) {
        
        splash.style.display = 'none';
        
    });
});