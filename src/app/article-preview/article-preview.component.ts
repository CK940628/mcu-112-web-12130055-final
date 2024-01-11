import { Component, HostBinding } from '@angular/core';
import { Article } from '../article';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css',
})
export class ArticlePreviewComponent {
  @HostBinding('class') class = 'article-preview';

  tags = ['enit', 'repellat', 'est', 'eos'];

  article = new Article({
    id: 1,
    title:
      'Ill quantify the redundant TCP bus, that should hard drive the ADPbandwidth!',
    content:
      ' Aut facilis qui. Cupiditate sit ratione eum sunt rerum impedit. Qui suscipitdebitis et et voluptates voluptatem voluptatibus. Quas voluptatum quaecorporis corporis possimus.',
    favoriteCount: 30,
    author: 'Oliver',
    createDate: new Date(2024, 6, 4),
    tags: ['enit', 'repellat', 'est', 'eos'],
  });
}
