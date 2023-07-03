import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent & Composable
    constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
            imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();

            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
            // 섹션을 만들어서 페이지에 추가 해준다
            const image = new ImageComponent(inputSection.title, inputSection.url);
            this.page.addChild(image)
            dialog.removeFrom(dialogRoot);
        });
    });
        const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
            videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaSectionInput();

            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
            // 섹션을 만들어서 페이지에 추가 해준다
            const image = new VideoComponent(inputSection.title, inputSection.url);
            this.page.addChild(image)
            dialog.removeFrom(dialogRoot);
        });
    })

        const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
            noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();

            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
            // 섹션을 만들어서 페이지에 추가 해준다
            const image = new NoteComponent(inputSection.title, inputSection.body);
            this.page.addChild(image)
            dialog.removeFrom(dialogRoot);
        });
    })

        const todobtn = document.querySelector('#new-todo')! as HTMLButtonElement;
            todobtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextSectionInput();

            dialog.addChild(inputSection)
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListenr(() => {
            // 섹션을 만들어서 페이지에 추가 해준다
            const image = new NoteComponent(inputSection.title, inputSection.body);
            this.page.addChild(image)
            dialog.removeFrom(dialogRoot);
        });
    })
}

}

new App(document.querySelector('.document')! as HTMLElement, document.body);