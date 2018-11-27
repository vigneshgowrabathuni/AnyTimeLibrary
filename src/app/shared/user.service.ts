import { Subject } from 'rxjs';

export class UserService {
    userChanged = new Subject();
    users: any;
    userName = '';
    constructor() { }

    setUsers(users) {
        this.users = users;
    }

    getUsers() {
        return this.users;
    }

    getUser(index: number) {
        return this.users[index];
    }

    getUserByEmailID(emailID) {
        const usersArray = this.users;
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].email === emailID) {
                this.userName = this.users[i].name;
                return this.users[i];
            }
        }
    }

    getUserName() {
        return this.userName;
    }

    addUser(user) {
        if (this.users === null) {
            this.users = [];
            this.users.push(user);
        } else {
            this.users.push(user);
        }

        this.userChanged.next(this.users.slice());
    }
}
