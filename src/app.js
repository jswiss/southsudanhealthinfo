export class Welcome {
  heading = 'welcome to aurelia';
  firstName = 'Jon';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome ${this.firstName}!`);
  }

}