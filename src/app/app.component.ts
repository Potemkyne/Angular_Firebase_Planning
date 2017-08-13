import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

  export class AppComponent {
    movie: FirebaseListObservable <any>;
    user: Observable<firebase.User>;

    constructor(db: AngularFireDatabase , public afAuth: AngularFireAuth) {
      this.movie = db.list('/movies');
      this.user = afAuth.authState;
    }

    loginAnonymous() {
      this.afAuth.auth.signInAnonymously();
    }

    loginGoogle() {
         this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginGithub() {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
   }

    logout() {
      this.afAuth.auth.signOut().then(function () {
        console.log('ok');
      }).catch(function (error) {
        console.log('ko');
      });
    }

    updateMovie(key: string, updatetitle: string, updatedate: string , updateplace: string, updateprojectionnist: string){
      this.movie.update(key, { title: updatetitle , date: updatedate, projectionnist: updateprojectionnist});
    }

    deleteMovie(key: string){
      this.movie.remove(key);
    }

    addMovie(newTitle: string , newDate: string, newPlace: string, newProjectionnist: string ) {
      this.movie.push({ title: newTitle , date: newDate, place: newPlace, projectionnist: newProjectionnist} );
    }

    deleteEverything() {
      this.movie.remove();
    }
}
