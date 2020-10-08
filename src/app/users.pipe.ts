import {Pipe, PipeTransform} from '@angular/core';
import {User} from "./user-model";

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(users: User[], ...args: any): any {
    let changedUsers;
    users.forEach(user => {
      changedUsers += `<div>
          <h2>${user.id}</h2>
          <p>${user.username}</p>
          <p>${user.name}</p>
          <p>${user.email}</p>
          <p>${user.address.street}</p>
          </div>`;
    });

    return changedUsers;
  }
}
