var type = 0; 
window.addEventListener("load", function() {
    type = Math.floor(Math.random() * 11);
    makeVideo();
});

function makeVideo () {
    const iframe = document.getElementById('my-iframe');

    if (type <= 4) {
        // calm
        iframe.src = "https://www.youtube.com/embed/YGlIYgd0Mfw";
    } else {
        iframe.src = "https://www.youtube.com/embed/STHwcaQZyUA";
    }
}

function surveyLink() {
    if (type <= 4) {
        // calm
        window.open('https://forms.gle/x4ri6BxGWuC2s4o38');
    } else {
        window.open('https://forms.gle/QejuXYLia6NyQJc69');
    }
    
}

