# **Frontend Mentor Challenge - Interactive pricing component**

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8 "https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Slider](#slider)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/Interactive-pricing-component>

- Website: <https://xup60521.github.io/Interactive-pricing-component/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for switch animation

### What I learned

#### Slider

It's not enjoyable to re-implement a slider component in vanilla html despite the fact that there are already existed solution regardless of frameworks (e.g. react.js and shadcn/ui, vue.js and vuetify).

```ts
function updateSlider(clientX: number) {
    if (!allowSlide) return;
    const rect = scrollContainer.getBoundingClientRect();
    if (clientX - rect.x - 20 > barRec.width || clientX - rect.x - 20 < 0)
        return;
    const sliderLeft = clientX - rect.x;

    scrollProgress.style.width = sliderLeft + "px";
    slider.style.left = sliderLeft + "px";
}
```

I cannot use `layerX` or `offsetX` because it would capture the slider button's relative position, ruining the scrolling effect. So I asked ChatGPT, it suggested that by calculating the difference between the mouse global position and the container's `x` coordinate, it returns the correct result.

Then, by compute the ratio between the container width and the slider position, we can know what to display.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>