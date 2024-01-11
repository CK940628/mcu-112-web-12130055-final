import { FavoriteButtonComponent } from './../favorite-button/favorite-button.component';
import { Component, HostBinding } from '@angular/core';
import { TagListComponent } from '../tag-list/tag-list.component';
import { Article } from '../article';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-preview',
  standalone: true,
  imports: [DatePipe, FavoriteButtonComponent, TagListComponent],
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
