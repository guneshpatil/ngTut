import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  singleUser$: any;

  constructor(private singleUserDetails: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.singleUser$ = params.id) //id as defined in routes file
  }

  ngOnInit() {
    this.singleUserDetails.getUser(this.singleUser$).subscribe(   //do not forget $, money always works!
      singleUserDetails => this.singleUser$ = singleUserDetails //always assign local object to data service
    )
  }

}
