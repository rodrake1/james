import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Establishments } from 'src/app/models/Establishments';
import { EstablishmentsService } from 'src/app/services/establishments.service';

@Component({
	selector: 'jd-results',
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  establishments$: Observable<Establishments>;

	constructor(private establishmentsService: EstablishmentsService, private router: Router) {}

	ngOnInit(): void {
    this.establishments$ = this.establishmentsService.getEstablishments();
	}

	editStablishment(id: string): void {
		this.router.navigate([`home/results/${id}`]);
	}
}
