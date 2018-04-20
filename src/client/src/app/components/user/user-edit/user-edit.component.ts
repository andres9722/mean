import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: object = {}
  name: string
  last_name: string
  twitter: string
  age: number

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id'])
  }

  getUser (id) {
    this.service.getUser(id).subscribe(data => {
      this.user = data
    })
  }

  updateUser ($event, id) {
    $event.preventDefault()
    this.service.updateUser(this.user).subscribe(data => {
      this.router.navigate(['/'])
    })
  }

}
