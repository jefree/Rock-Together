import { Component, Input } from '@angular/core'

@Component({
  selector: 'rt-song-item',
  template:`
    <div>
      <span> {{ song.title }} </span>
    </div>
  `
})
export class SongItemComponent {
  @Input() song;
}
