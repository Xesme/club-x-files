# X Files Fan Club

## Created by Xia Amendolara April 7th, 2017

  This website serves as the homebase for the X-Files fan club.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## User Story

* As a user, I'd like to visit a page to see a list of all team or club members.

* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.

* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.

* As a user, I'd like all data persisted in a database, so it's always there when I need it.

* As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category. (For instance, a club may have a treasurer, president, and/or secretary. A sports team may have a goalie, forward, or striker, a book club may have founders and attendees. You're also welcome to filter by something other than role, if it's more relevant to your project.)

* As an administrator, I want to add new users to the club. (User authentication is not required).

* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.

* As an administrator, need the option to delete a user, in case they leave the club or team.


## Implementation Plan

| Objective | Implementation | Status |
|:-------------:|:-------------:|:-------------:|
| Create a new project | $ng new x-files | complete |
| Application has a well thought out README | Set up README with implementation plan and all other necessary information. | complete |
| Create seed (club.json) | ( displayName: " ", posts: [ id: "" post: ""], comments: [], ranking: " " )| complete |
| Seed has been imported firebase | import club.json | complete |
| Create service for project | $ ng g service club.service | complete |
| Implement ClubService | import ClubService | complete |
| Create routing | $ touch app.router.ts | complete |
| Route to homepage(splash) in navbar | < a (routerLink)="/"> | complete (splash, about, admin) |
| Create components | ( splash, about, admin, members-list, member-page(dynamic), post(dynamic) ) | complete (splash, about, admin, member-page, dynamic )|
| Implement routing for all components | add to routes to router.ts and module.ts | complete|
| Retrieve data from firebase | Import FirebaseListObservables<any[]> and add to constructor(s) private  angularfire: AngularFire (in service as well as .ts files using the service) | complete |
| Implement post request to Firebase for new-member | Add form for new-member on admin  | complete |
| Add the ability to edit a member from the admin page | Add form and use the member.$key to update an existing post | complete |
|Add the ability to delete a member from the admin page | Add a delete button on the admin page | complete |
| Create a members-list page to display members | members component | complete |
| Create dynamic routing for member-page |  use the $key from firebase | complete |
| Create pipe for generating posts on the member-list page (rank, and username) | $ng g pipe ranking.pipe | complete |
| Create a model | member.model.ts | complete |
| (Extra) Create new post form from member-page | add button for new-post form on user-page | complete |
| (Extra) Implement post request to Firebase  (form on component new-post) | push to firebase (new post)| complete |
| (Extra) Project is portfolio-quality | Remove unnecessary code, refactor if needed, and use SASS or CSS for styling | completed |

## Setup/Installation Requirements

  * Follow the link to the Git repository for this project. [Github](https://github.com/Xesme/meal-tracker.git)
  * In the terminal run `$ git clone link-to-repo-here`
  * In the terminal run `$ cd project-name`
  * In the terminal run `$ npm install`
  * In the terminal run `$ npm install`
  * In the terminal run `npm start`
  * In the terminal run `ng serve`
  * Open your broswer and go to `localhost:4200` to view the web application in browser.

##  Configuration/dependencies

  * NPM (Development)
    * @angular/cli (Populates  an Angular application)

    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)

    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)

    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)

    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)

    * codelyzer (Helps write consistent code, and discover potential errors)

    * gulp-concat (concatenates files into one)

    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)

    * protractor (end-to-end test framework for Angular and AngularJS applications)

    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

    * bower (Production)

    * Bootstrap

    * Firebase (data management)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Bugs
There are no known bugs at this time, but please contact the creator with questions or concerns regarding this application.

## Technologies Used
* JavaScript
* TypeScript
* Angular 2
* Node
* Bower
* Bootstrap
* HTML
* CSS
* SASS
* Git
* FireBase

## Licensing
This application features MIT licensing.

Copyright &copy; 2017 **Xia Amendolara** All Rights Reserved.
