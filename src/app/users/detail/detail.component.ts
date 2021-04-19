import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id!: string;
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getById(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user)
    })
  }

}
