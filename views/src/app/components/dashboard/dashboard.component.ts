import { Component, OnInit } from '@angular/core';

import { NotesService } from '../../services/notes.service';

import { Notes } from '../../model/notes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Notes[] = [];
  test: string;
  errorMessage: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.getNotes();
    // this.getGroups();
      this.test = 'test';
  }

  private getNotes() {
    this.notesService.getNotes().subscribe(
        notes => this.notes = notes,
        error => this.errorMessage = error
    );
  }

}
