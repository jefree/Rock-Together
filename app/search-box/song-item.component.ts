import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'rt-song-item',
  template:`
    <div (click)="onSongClicked()">
      <span> {{ song.title }} </span>
    </div>
  `,

  styles: [`
    :hover {
      cursor: pointer;
      background-color: green;
    }
  `]
})
export class SongItemComponent {
  @Input() song;
  @Output() songSelect = new EventEmitter();

  onSongClicked() {
    this.songSelect.emit(this.song);
  }
}
