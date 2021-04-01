function fadeIn() {
    let cover = document.getElementById("fullCover");
    cover.style.opacity = 0;

    const remove = () => cover.parentNode.removeChild(cover);
    setTimeout(remove, 1000);
}