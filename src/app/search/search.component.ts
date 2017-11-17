import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      termTrack: new FormControl(),
      termArtist: new FormControl(),
      isSearchArtist: new FormControl(),
      isSearchTracksHaveLyric: new FormControl()
    });
  }

  handleSubmit() {

  }
}
