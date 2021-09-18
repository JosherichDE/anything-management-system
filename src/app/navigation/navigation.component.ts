import { Component, OnInit } from '@angular/core';
import { Universe } from '../shared/universe/universe.model';
import { UniverseService } from '../shared/universe/universe.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  universe?: Universe;

  constructor(private univserService: UniverseService) { 
    
  }

  ngOnInit(): void {
    this.univserService.getUniverse().subscribe(universe => this.universe = universe);
  }

  showInfo(link: any) {

  }

}
