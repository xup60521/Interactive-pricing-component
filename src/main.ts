const slider = document.getElementById("slider") as HTMLButtonElement;
const scrollBar = document.getElementById("scroll-bar") as HTMLDivElement;
const scrollContainer = document.getElementById(
    "scroll-container"
) as HTMLDivElement;
const scrollProgress = document.getElementById("progress-fill-bar") as HTMLDivElement;
const p = document.querySelector("p") as HTMLParagraphElement

let allowSlide = false;

slider.addEventListener("mousedown", (e) => {
    allowSlide = true;
    e.preventDefault();
});
window.addEventListener("mouseup", () => {
    allowSlide = false;
});
window.addEventListener("mousemove", (e) => {
    if (!allowSlide) return;
    const rect = scrollContainer.getBoundingClientRect();
    const barRec = scrollBar.getBoundingClientRect();
    if (e.clientX - rect.x - 20 > barRec.width || e.clientX - rect.x - 20 < 0)
        return;
    scrollProgress.style.width = e.clientX - rect.x + "px";
    const sliderLeft = (e.clientX - rect.x)
    slider.style.left = sliderLeft + "px";
    const initRatio = ((sliderLeft - 20) / barRec.width) * 99.9
    const Roundedratio = Math.round(initRatio > 99 ? 100 : initRatio < 1 ? 0 : initRatio)
    p.innerHTML = Roundedratio.toString()
});
