import { Article } from './../article';
import { Component, HostBinding, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgFor, ArticleComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  @HostBinding('class')
  class = 'article-list';

  @Input({ required: true })
  articles!: Article[];
}
