import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class AboutComponent implements OnInit {

  leaders: Leader[];

  selectedLeader: Leader;

  constructor(private LeaderService: LeaderService) { }

  ngOnInit() {
    this.LeaderService.getLeaders().subscribe(leaders => this.leaders = leaders);

  }

  onSelect(Leader: Leader) {
    this.selectedLeader = Leader;
  }

}
