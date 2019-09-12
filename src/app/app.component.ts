import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personne: string;
  personnes = [
    {
      nom: 'diop',
      prenom: 'moussa'
    },
    {
      nom: 'dia',
      prenom: 'malick'
    },
    {
      nom: 'diallo',
      prenom: 'nafi'
    },
  ]

  onShow(personne){
    // console.log(personne);
    this.personne = personne; 
  }
}
