export function handleMouseEnter(event) {
    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (overlay && title) {
        overlay.style.opacity = "0";
        title.style.opacity = "1";
    }
};

export function handleMouseLeave(event) {
    const video = event.target;
    const overlay = video.parentElement.querySelector(".video-overlay");
    const title = video.parentElement.querySelector(".title");

    if (overlay && title) {
        overlay.style.opacity = "1"; // Assuming you want to revert to visible
        title.style.opacity = "0"; // Assuming this should be hidden again
    }
};
