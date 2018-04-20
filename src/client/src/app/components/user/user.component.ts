import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listUsers: User[]
  name: string
  last_name: string
  twitter: string
  age: number

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => {
      this.listUsers = data
    })
  }

  addUser ($event) {
    $event.preventDefault()
    const newUser: User = {
      name: this.name,
      last_name: this.last_name,
      twitter: this.twitter,
      age: this.age
    }

    console.log(newUser)

    this.service.addUser(newUser).subscribe(data => {
      this.listUsers.push(data)
    })
  }

  removeUser (id) {
    this.service.deleteUser(id).subscribe(data => {
      this.listUsers = this.listUsers.filter(user => user._id !== id)
    })
  }

}
