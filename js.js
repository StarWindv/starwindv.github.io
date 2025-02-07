document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    const cubeContainer = document.querySelector('.cube-container');

    window.addEventListener('mousemove', (e) => {
        let rect = cubeContainer.getBoundingClientRect();
        let x = e.clientX - (rect.left + rect.width / 2);
        let y = e.clientY - (rect.top + rect.height / 2);

        let rotateX = (y / rect.height) * 360;
        let rotateY = (x / rect.width) * 360;

        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    window.addEventListener('mouseout', () => {
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});
