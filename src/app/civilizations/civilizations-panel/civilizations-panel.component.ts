import { Civilization } from './../../models/civilization';
import { CivilizationsService } from './../civilizations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-civilizations-panel',
  templateUrl: './civilizations-panel.component.html',
  styleUrls: ['./civilizations-panel.component.scss']
})
export class CivilizationsPanelComponent implements OnInit {

  civilizations: Civilization[];

  constructor(private civilizationsService: CivilizationsService) { }


  ngOnInit(): void {
    this.civilizationsService.getCivilizations().subscribe(data => {
      this.civilizations = data;
      console.log( this.civilizations );

    });
  }

}
