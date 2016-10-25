import { Injectable } from '@angular/core';

const SONGS:Array<any> = [
  {title: 'this cocaine makes me feel like'},
  {title: 'undisclosed desires'},
  {title: 'one way or another'},
  {title: 'overthrow'},
  {title: 'got it'},
  {title: 'should be higher'},
  {title: 'walking in my shoes'}
];

@Injectable()
export class SearchBoxService {
  getSongs(text: string): Array<any> {
    if(text == '') return  [];
    return SONGS.filter(song => song.title.match(text));
  }
}
