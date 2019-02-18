<h1> The Podium </h1>
<h2> My current project and on-going creation. </h2>
<h4> My personal creation using Express, Angular, and Node to develop a simple and functional location to get information regarding the game Apex Legends. I will eventually want to add MongoDb to create a full MEAN stack application through allowing users to sign up, log in, and submit content.</h4>
  
<h2> Legends Page </h2>

<p> This page is created firstly through a component that renders the current list of legends by using the 'legend.service.ts' file. This allows a one stop shop location to allow various components to draw from the same typescript to reduce confusion and create accurate and consistent information.</p>
<br>
<p> After selecting a legend, the routerLink changes the route. The legend.service.ts file grabs the route and splits it down to find which legend the user is looking for and sets a variable to that legend. Using this legend, I am able to extract all information regarding that legend in the legend.service.ts file and share that with the legendinfopage component. This also allows me to render previous/next buttons that are based around the user's current location in the list. Selecting a button, changes the route, changing the selected legend, and updating the information without forcing a reload.</p>
<br>
<p> I decided to make it a conditional render based off the route, rather than setting the service each time a user clicks (similiar to setting props in React) because it allows a user to visit the site by typing in the exact route to the legend they desire to pull the proper information. This allows me to circumvent forcing the user to always defaulting to the legend select page and having to select their legend manually each time.</p>

# Podium

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
