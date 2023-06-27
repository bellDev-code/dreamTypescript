import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { Composable, PageComponent } from "./components/page/page.js";

class App {
    private readonly page: PageComponent & Composable
    constructor(appRoot: HTMLElement) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);

        const image = new ImageComponent('Image Title', './assets/karina.jpeg');
        this.page.addChild(image)

        const video = new VideoComponent('Video Title', 'https://www.youtube.com/embed/M_-idnFymeU')
        this.page.addChild(video)

        const note = new NoteComponent('Note Title', 'Note Body')
        this.page.addChild(note)

        const todo = new TodoComponent('todo Title', 'Todo Item')
        this.page.addChild(todo)
    }
}

new App(document.querySelector('.document')! as HTMLElement)