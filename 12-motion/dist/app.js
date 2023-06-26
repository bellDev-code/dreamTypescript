import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', './assets/karina.jpeg');
        image.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Note Title', 'Note Body');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('todo Title', 'Todo Item');
        todo.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
