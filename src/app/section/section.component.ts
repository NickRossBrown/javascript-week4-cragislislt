import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Layout} from '../layout.model';
import {LayoutService} from '../layout.service'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [LayoutService]
})
export class SectionComponent implements OnInit { 
  layoutToDisplay: Layout[];

  constructor(private router: Router, private location: Location, private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutToDisplay = this.layoutService.getLayoutBySection(this.router.url);
  }

};
