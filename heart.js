document.addEventListener("DOMContentLoaded", function() {
    const heart = document.createElement("div");
    heart.id = "heart";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let currentX = targetX, currentY = targetY;
    const speed = 0.2; 

    document.addEventListener("mousemove", function(e) {
        targetX = e.clientX + 10;
        targetY = e.clientY + 10;
    });

    function animate() {
        currentX += (targetX - currentX) * speed;
        currentY += (targetY - currentY) * speed;
        heart.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animate);
    }

    animate();
});
