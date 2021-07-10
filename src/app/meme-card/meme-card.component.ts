import { Component, Input, OnInit } from '@angular/core';
import { Meme } from '../meme';

@Component({
  selector: 'app-meme-card',
  templateUrl: './meme-card.component.html',
  styleUrls: ['./meme-card.component.scss']
})
export class MemeCardComponent implements OnInit {
  @Input() meme!: Meme;
  width: number = 100;
  height: number = 100;

  ngOnInit(): void {
    this.width = this.meme.width/4;
    this.height = this.meme.height/4;
  }

}
