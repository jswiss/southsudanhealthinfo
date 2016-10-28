// export class Welcome {
//   heading = 'welcome to aurelia';
//   firstName = 'Jon';
//   lastName = 'Doe';

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   submit() {
//     alert(`Welcome ${this.firstName}!`);
//   }

// }

export class App {
  //Implement configure router method
  configureRouter(config, router) {
    config.title = 'South Sudan Health Info';

    //Use map to set array of possible routes
    config.map([
                { route: ['', 'map'], name: 'map', moduleId: './map/map', nav: true, title: 'Map' },
                { route: 'dashboard', name: 'dashboard', moduleId: './dash/dashboard', nav: true, title: 'Dashboard' }
               ]);

    //create a binding to this router
    this.router = router;
  }
}
