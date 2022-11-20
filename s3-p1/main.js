var medType = 0; 
window.addEventListener("load", function() {
    medType = Math.floor(Math.random() * 11);
    makeVideo();
});

function makeVideo () {
    const iframe = document.getElementById('my-iframe');
    if (medType <= 4) {
        iframe.src = "https://www.youtube.com/embed/YGlIYgd0Mfw";
    } else {
        iframe.src = "https://www.youtube.com/embed/STHwcaQZyUA";
    }
}


