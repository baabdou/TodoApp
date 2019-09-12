import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() nom: string;
  @Input() prenom: string;

  @Output() Afficher = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  onAfficher() {
    this.Afficher.emit(this.prenom+' '+this.nom);
  }
}
