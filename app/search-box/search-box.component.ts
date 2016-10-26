import { Component, Input, EventEmitter } from '@angular/core'
import { SearchBoxService } from './search-box.service'

@Component({
  selector: 'rt-search-box',
  template: `
    <div class="row">
      <form>
        <input class="form-control" name="searchText"
         [(ngModel)]="searchText"
         (ngModelChange)="onSearchTextChange($event)"
         (focusout)="onInputFocusOut()"
          />
        <div class="song-list" *ngIf="showSongList()" (mouseenter)="toggleMouseOver(true)" (mouseleave)="toggleMouseOver(false)">
          <rt-song-item [song]="song" (songSelected)="onSongSelected($event)" *ngFor="let song of songs"></rt-song-item>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .song-list {
      border: solid 1px black;
    }
  `]
})
export class SearchBoxComponent {
  songs: Array<any> = [];
  searchText: string = '';
  songSelected: EventEmitter<any> = new EventEmitter();

  private searching: boolean = false;
  private hasMouseOver: boolean = false;

  constructor(public searcher: SearchBoxService) {}

  onSearchTextChange(searchText) {
    if(searchText == '') {
      this.searching = false;
      this.songs = []
    }
    else {
      this.searching = true;
      this.songs = this.searcher.getSongs(searchText);
    }
  }

  onSongSelected(song) {
    this.searching = false;
    this.songSelected.next(song);
  }

  showSongList() {
    return this.searching && this.songs.length > 0;
  }

  private onInputFocusOut() {
    if(!this.hasMouseOver) {
      this.searching = false;
    }
  }

  private toggleMouseOver(mouseOver) {
    this.hasMouseOver = mouseOver;
  }
}
