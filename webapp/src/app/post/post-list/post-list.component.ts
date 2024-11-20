import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  //   posts = [
  //     { title: 'First Post', content: 'This is the first post' },
  //     { title: 'Second Post', content: 'This is the Second post' },
  //     { title: 'Third Post', content: 'This is the Third post' },
  //   ];
  @Input() posts: any = [];
}
