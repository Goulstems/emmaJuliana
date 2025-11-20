export function enablePlayerMovement(playerImg) {
    document.addEventListener("mousemove", function(e){
        playerImg.style.position = "absolute";
        const imgWidth = playerImg.offsetWidth;
        const imgHeight = playerImg.offsetHeight;
        playerImg.style.left = (e.clientX - imgWidth / 2) + "px";
        playerImg.style.top = (e.clientY - imgHeight / 2) + "px";
    });
}
