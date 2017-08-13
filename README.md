<h2> Interaction Angular 4 / Firebase </h2>
<h3> Planning quotidien pour projectionnistes </h3>
<img src="https://user-images.githubusercontent.com/14042789/29250005-ffac0168-803a-11e7-9b91-018a67f37152.jpg" />
<h4> Authentification Github, Gmail ou Anonyme</h4>
<img src="https://user-images.githubusercontent.com/14042789/29250089-6220ea42-803c-11e7-833e-cb9d092047ad.jpg" />
<h4> Attribution d'une séance (projectionniste / horaire / film / salle) /  Modification / Suppression d'une ou de toutes les séances</h4>
<img src="https://user-images.githubusercontent.com/14042789/29244582-bdae5998-7fbb-11e7-92a4-d192b88d237c.jpg" />
<h4>Stockage Firebase via AngularFire2</h4>
<img src="https://user-images.githubusercontent.com/14042789/29244583-c0418c5c-7fbb-11e7-839a-737238d776ba.jpg" />

<h5>Angular4:</h5>
<p>npm install -g @angular/cli</p>
<p>ng new project</p>

<h5>AngulareFire2:</h5>
<p>npm install angularfire2 firebase –save</p>

<h5>Firebase:</h5>
<p>Modification des règles sur la console:</p>
<pre><code>{
  "rules": { 
    ".read": "auth != true",
    ".write": "auth != true"
  }
}</code></pre>
<p>Génération des données d'initialisation</p>
<pre><code> var config =  {
    apiKey: "XXXXXXX",
    authDomain: "XXXXX.firebaseapp.com",
    databaseURL: "https://XXXXXXX.firebaseio.com",
    projectId: "XXXXXX",
    storageBucket: "XXXXXX.appspot.com",
    messagingSenderId: "XXXX"
  }
</pre></code>
<p>Activation des fournisseurs de connexion: Github, Google, Anonyme<p>
<img src="https://user-images.githubusercontent.com/14042789/29250101-cde98a4a-803c-11e7-90ad-f9256b49b427.png" />
<h5>Bootstrap:</h5>
<p>npm install --save bootstrap</p>
<p>Dans angular-cli.json:</p>
<pre><code>"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.css"
      ],</code></pre>


# Angdyn

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
