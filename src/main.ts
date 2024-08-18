import gsap from "gsap";

const slider = document.getElementById("slider") as HTMLButtonElement;
const scrollBar = document.getElementById("scroll-bar") as HTMLDivElement;
const scrollContainer = document.getElementById(
    "scroll-container"
) as HTMLDivElement;
const scrollProgress = document.getElementById(
    "progress-fill-bar"
) as HTMLDivElement;
const switchBtn = document.getElementById("switch") as HTMLButtonElement;
const price = document.getElementById("price") as HTMLSpanElement
const priceMobile = document.getElementById("price-mobile") as HTMLSpanElement
const pageviews = document.getElementById("pageviews") as HTMLSpanElement

let allowSlide = false;
let isYearly = false;
let Roundedratio = 0

switchBtn.addEventListener("click", () => {
    if (!isYearly) {
        isYearly = true;
        switchBtn.disabled = true;
        updatePrice(getCloseRatio(Roundedratio), isYearly)
        gsap.to("#switch  div", {
            x: "1.2rem",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                switchBtn.disabled = false;
            },
        });
    } else {
        isYearly = false;
        switchBtn.disabled = true;
        updatePrice(getCloseRatio(Roundedratio), isYearly)
        gsap.to("#switch  div", {
            x: "0",
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
                switchBtn.disabled = false;
            },
        });
    }
});
slider.addEventListener("mousedown", (e) => {
    allowSlide = true;
    e.preventDefault();
});
scrollBar.addEventListener("mousedown", (e) => {
    e.preventDefault();
    allowSlide = true;
    updateSlider(e.clientX);
});
scrollProgress.addEventListener("mousedown", (e) => {
    e.preventDefault();
    allowSlide = true;
    updateSlider(e.clientX);
});
window.addEventListener("mouseup", () => {
    allowSlide = false;
});
window.addEventListener("mousemove", (e) => {
    updateSlider(e.clientX);
});

function updateSlider(clientX: number) {
    if (!allowSlide) return;
    const rect = scrollContainer.getBoundingClientRect();
    const barRec = scrollBar.getBoundingClientRect();
    if (clientX - rect.x - 20 > barRec.width || clientX - rect.x - 20 < 0)
        return;
    const sliderLeft = clientX - rect.x;

    scrollProgress.style.width = sliderLeft + "px";
    slider.style.left = sliderLeft + "px";
    const initRatio = ((sliderLeft - 20) / barRec.width) * 99.9;
    Roundedratio = Math.round(
        initRatio > 99 ? 100 : initRatio < 1 ? 0 : initRatio
    );
    updatePrice(getCloseRatio(Roundedratio), isYearly)
}

function getCloseRatio(num: number) {
    if (num > 75) {
        return num - 75 < 12.5 ? 75 : 100;
    }
    if (num <= 75 && num > 50) {
        return num - 50 < 12.5 ? 50 : 75;
    }
    if (num <= 50 && num > 25) {
        return num - 25 < 12.5 ? 25 : 50;
    }
    return num < 12.5 ? 0 : 25;
}

function updatePrice(ratio: ReturnType<typeof getCloseRatio>, isYearly: boolean) {
    if (ratio === 0) {
        pageviews.innerHTML = "10K"
        const pricing = 8
        priceMobile.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
        price.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
    } else if (ratio === 25) {
        pageviews.innerHTML = "50K"
        const pricing = 12
        priceMobile.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
        price.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
    } else if (ratio === 50) {
        pageviews.innerHTML = "100K"
        const pricing = 16
        priceMobile.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
        price.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
    } else if (ratio === 75) {
        pageviews.innerHTML = "500K"
        const pricing = 24
        priceMobile.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
        price.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
    } else if (ratio === 100) {
        pageviews.innerHTML = "1M"
        const pricing = 36
        priceMobile.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
        price.innerHTML = isYearly ? (pricing*12*0.25).toFixed(2).toString() : (pricing).toFixed(2)
    }
}