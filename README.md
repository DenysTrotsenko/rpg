# Rpg
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

##Create new Project
Run `ng g application {project}` command.

Add `"start:{project}": "ng serve --project={project}"` script to `package.json`.

Add `"build:{project}": "ng build --project={project}"` script to `package.json`.

Update `build:all` script in `package.json`.

Add `"@{project}/*": ["projects/{project}/src/*"]` path in `tsconfig.base.json` paths.

Add `"projects/shared-library/src/index.scss"` to the project `styles` in `angular.json`.

Add `"stylePreprocessorOptions": {"includePaths": ["projects/shared-library/src/styles/"]}` after the project `styles` in `angular.json`.

## Development server
Run `npm run start:{project}` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng g c component-name --project={project}` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `npm run build:all` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
