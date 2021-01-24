import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getEstablishments } from 'src/app/core/store/index';
import { selectEstablishments } from 'src/app/core/store/reducers/establishments.reducers';
import { Establishment } from 'src/app/models/Establishment';

@Component({
	selector: 'jd-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  establishments$: Observable<Establishment[]>;

	constructor(private store: Store, private router: Router) {}

	ngOnInit(): void {
		this.establishments$ = this.store.select(selectEstablishments);
		this.store.dispatch(getEstablishments());
	}

	editStablishment(id: string): void {
		this.router.navigate([`home/results/${id}`]);
	}
}
