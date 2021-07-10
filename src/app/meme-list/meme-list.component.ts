import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meme } from '../meme';
import { MemeListService } from './meme-list.service';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss']
})
export class MemeListComponent implements OnInit, OnChanges {
  @Input() search_text: string = '';

  meme_list: Array<Meme> = [];
  filtered_meme_list: Array<Meme> = [];

  constructor(private service: MemeListService) { }

  ngOnInit(): void {
    this.service.getMemes().then((memes: Array<Meme>) => {
      this.meme_list = memes
      this.meme_list.forEach(meme => {
        meme.ratio = Math.ceil(meme.height / meme.width)
      })
      this.filtered_meme_list = this.meme_list
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    var change = changes["search_text"]
    if (change.currentValue != change.previousValue) {
      this.filtered_meme_list = this.meme_list.filter(m =>
        m.name.toLowerCase().includes(this.search_text.toLowerCase())
      )
    }
  }
}
