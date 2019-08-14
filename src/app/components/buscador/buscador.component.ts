import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes : any[] = [];
  termino : string;
  @Input() heroe : any = {};
  @Input() index : number;

  constructor( private _heroesService : HeroesService,
    private activatedRoute : ActivatedRoute,
    private router : Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx: number){
    console.log(this.index);
    this.router.navigate(['/heroe', this.index])
  }

}
