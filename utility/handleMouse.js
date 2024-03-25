export function handleMouseEnter(event) {
    const video = event.target;

    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (video) {
        overlay.style.opacity = "0";
        title.style.opacity = "1";
    }
};

export function handleMouseLeave(event) {

    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");
    if (overlay.style.opacity == "0") {
        overlay.style.opacity = "0";
        title.style.opacity = "0";
    }
};