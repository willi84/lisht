import { Component } from 'angular2/core';
import { Output } from 'angular2/core';
import { EventEmitter } from 'angular2/core';

import { Bookmark } from './bookmark';

@Component({
  selector: 'bookmark',
  templateUrl: './app/templates/bookmark.html',
  inputs: [ 'bookmark' ]
})

export class BookmarkDetailComponent {

  public bookmark : Bookmark;
  _submitted = false;

  @Output() bookmarkChanged : EventEmitter<any> = new EventEmitter();

  onSubmit( bookmark : Bookmark ) {
    this._submitted = false;
    this.bookmarkChanged.emit( bookmark );
  }
}
