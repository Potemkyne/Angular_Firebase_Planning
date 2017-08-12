import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

  export class AppComponent {
    movie: FirebaseListObservable <any>;

    constructor(db: AngularFireDatabase) {
      this.movie = db.list('/movies');
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
