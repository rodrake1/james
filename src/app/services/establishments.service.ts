import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Establishment } from '../models/Establishment';

@Injectable({
	providedIn: 'root'
})
export class EstablishmentsService {
	constructor(private http: HttpClient) {}

	getEstablishments() {
		return this.http.get<Establishment[]>(
			'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
		);
	}
}
