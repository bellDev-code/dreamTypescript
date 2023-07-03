import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent, PageItemComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent & Composable
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', './assets/karina.jpeg');
        this.page.addChild(image)

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/M_-idnFymeU')
        this.page.addChild(video)

        const note = new NoteComponent('Note Title', 'Note Body')
        this.page.addChild(note)

        const todo = new TodoComponent('todo Title', 'Todo Item')
        this.page.addChild(todo)

        const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
            imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();

            dialog.setOnCloseListenr(() => {
                dialog.removeFrom(document.body);
            });
            dialog.setOnSubmitListenr(() => {
            // 섹션을 만들어서 페이지에 추가 해준다
            dialog.removeFrom(document.body);
        });

      dialog.attachTo(document.body);
    });
    }
}

new App(document.querySelector('.document')! as HTMLElement)