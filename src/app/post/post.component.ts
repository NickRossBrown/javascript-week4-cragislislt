import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Layout } from '../layout.model';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [LayoutService]
})
export class PostComponent implements OnInit {
  postId = null;
  postToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private layoutService: LayoutService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
  });
    this.postToDisplay = this.layoutService.getPostById(this.postId);
}

}
