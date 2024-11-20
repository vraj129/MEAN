import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  titlePost = '';
  textAreaPost = '';
  @Output()
  postCreated = new EventEmitter();

  onAddPost(): void {
    const post = { title: this.titlePost, content: this.textAreaPost };
    this.postCreated.emit(post);
  }
}
