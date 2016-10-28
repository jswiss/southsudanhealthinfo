export class Welcome {
  heading = 'welcome to aurelia';
  firstName = 'Jon';
  lastName = 'Doe';

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome ${this.firstName}!`);
  }

}