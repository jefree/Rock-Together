import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopListComponent } from './top-list.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TopListComponent ],
    exports: [ TopListComponent ]
})
export class TopListModule {}
