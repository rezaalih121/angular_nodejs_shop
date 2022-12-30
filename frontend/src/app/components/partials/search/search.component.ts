import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchTerm = '';

  // when injecting objects if you put a access specifier you can access that object inside the class
  // but if you don't put an access specifier in this case ActivatedRoute , it will only accessible in the constructor function
  constructor(activatedRout: ActivatedRoute, private reouter: Router) {
    activatedRout.params.subscribe((params) => {
      if (params.searchTerm) this.searchTerm = params.searchTerm;
    })
  }

  search(term: string): void {
    if (term)
      this.reouter.navigateByUrl('/search/' + term);
    else
      this.reouter.navigateByUrl('/');
  }

}
