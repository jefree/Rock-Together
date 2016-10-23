import { Component, Input } from '@angular/core'

@Component({
  selector: 'rt-search-box',
  template: `
    <div *ngFor="let song of songs">
      {{song.title}}
    </div>
  `
})
export class SearchBoxComponent {
  songs: Array<any> = [
    {title: "the song you was waiting for"}
  ];
}
