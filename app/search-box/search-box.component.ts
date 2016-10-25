import { Component, Input } from '@angular/core'
import { SearchBoxService } from './search-box.service'

@Component({
  selector: 'rt-search-box',
  template: `
    <form class="col-xs-6">
      <input class="form-control" name="searchText" [(ngModel)]="searchText" (ngModelChange)="onSearchTextChange($event)" />
      <div *ngIf="songs.length > 0">
        <rt-song-item [song]="song" *ngFor="let song of songs"></rt-song-item>
      </div>
    </form>
  `
})
export class SearchBoxComponent {
  songs: Array<any> = [
    {title: "the song you was waiting for"}
  ];

  searchText: string = '';

  constructor(public searcher: SearchBoxService) {}

  onSearchTextChange(searchText) {
    this.songs = this.searcher.getSongs(searchText);
  }
}
