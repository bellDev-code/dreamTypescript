import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
    constructor(title: string, url: string) {
        super(`<section class="video">
            <div class="video__player">
            <iframe class="video__iframe"></iframe>
            <h3 class="video__title"></h3>
            </div>
        </section>`)

        const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
        iframe.src = this.convertToEmbeddedURL(url); // url -> video id
        

        const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement
        titleElement.textContent = title; 
    }

    // 정규 표현식
    private convertToEmbeddedURL(url: string): string {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);

        const videoId = match? match[1] || match[2] : undefined;
        if(videoId) {
            return `https://www.youtube.com/embed/${videoId}`
        } 
        return url;
    }
}

// https://youtu.be/M_-idnFymeU
// <iframe width="853" 
// height="480" 
// src="https://www.youtube.com/embed/M_-idnFymeU" 
// title="하... 로아온..." 
// frameborder="0" 
// allow="accelerometer; 
// autoplay; 
// clipboard-write; 
// encrypted-media; 
// gyroscope; 
// picture-in-picture; web-share" allowfullscreen></iframe>