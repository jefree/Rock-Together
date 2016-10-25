import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBoxComponent } from './search-box.component';
import { SongItemComponent } from './song-item.component';
import { SearchBoxService } from './search-box.service';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ SearchBoxComponent, SongItemComponent ],
  providers: [ SearchBoxService ],
  exports: [ SearchBoxComponent ]
})
export class SearchBoxModule { }

