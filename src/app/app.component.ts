import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Memes for Life';
  search_text = '';
  columns = 4;
  column_options = [
    { icon: 'grid_view', value: 2 },
    { icon: 'view_module', value: 3 },
    { icon: 'view_comfy', value: 4 }
  ]
}
