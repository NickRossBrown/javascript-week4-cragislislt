import { Component, OnInit } from '@angular/core';
import { Layout} from '../layout.model';
import { Router } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LayoutService]
})
export class HomeComponent implements OnInit {
  layouts: Layout[];

  constructor(private router: Router, private layoutService: LayoutService) { }

  ngOnInit() {
    this.layouts = this.layoutService.getLayouts();
  }

  goToSectionPage() {
    console.log("clicked")
    this.router.navigate(['service', 5 ])
    // this.router.navigate['/community'], { queryParams: { sections: 'popular' } };
  };

}
