/*
Template Name: Amezia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Tour 
*/


var tour = new Shepherd.Tour({
  useModalOverlay: true,
  defaultStepOptions: {
    
    cancelIcon: {
      enabled: true
    },
    classes: 'shepherd-has-cancel-icon shepherd-element class-1 class-2 shepherd-enabled',
    scrollTo: { behavior: 'smooth', block: 'center' }
  }
});

tour.addStep({
  title: 'Welcome Back !',
  text: "Donec quam felis, ultricies nec, pellentesque eu, pretium quis.",
  attachTo: {
    element: '.hero-welcome',
    on: 'bottom'
  },
  buttons: [
    
    {
      action() {
        return this.next();
      },
      classes: 'btn-primary',
      text: 'Next'
    }
  ],
  id: 'hero-step',
});



tour.addStep({
  title: 'Table',
  text: "This is example of Table",
  attachTo: {
    element: '.tour-table',
    on: 'right',
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      classes: 'btn-primary',
      text: 'Next'
    },
    
  ],
  id: "table-step"
  
});

tour.addStep({
  title: 'Notifications',
  text: "This is example of Notifications",
  attachTo: {
    element: '.notification-step',
    on: 'bottom'
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      classes: 'btn-primary',
      text: 'Next'
    }
  ],
  id: 'page-header-notifications-dropdown',
});


tour.addStep({
  title: 'User',
  text: "This is example of user",
  attachTo: {
    element: '.user-step',
    on: 'bottom',
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back'
    },
    {
      action() {
        return this.next();
      },
      classes: 'btn-success',
      text: 'Done'
    },
    
  ],
  id: "page-header-user-dropdown"
  
});

tour.start();



