import { Component, OnInit } from '@angular/core';

import { NotesService } from '../../services/notes.service';
import { GroupsService } from '../../services/groups.service';

import { Notes } from '../../model/notes';
import {Groups} from '../../model/groups';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  notes: Notes[] = [];
  test: string;
  errorMessage: string;

  constructor(private notesService: NotesService, private groupService: GroupsService) { }

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

  // private getGroups() {
  //   this.groupService.getGroups().subscribe(
  //       groups => this.groups = groups,
  //       error => this.errorMessage = error
  //   );
  // }

}
