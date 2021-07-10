import { Component, OnInit } from '@angular/core';
import { Meme } from '../meme';
import { MemeListService } from './meme-list.service';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss']
})
export class MemeListComponent implements OnInit {

  meme_list: Array<Meme> = [];

  constructor(private service: MemeListService) { }

  ngOnInit(): void {
    this.service.getMemes().then((memes: Array<Meme>)=>
      this.meme_list = memes
    );
  }
}
