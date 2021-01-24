import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Establishments } from '../models/Establishments';

@Injectable({
	providedIn: 'root'
})
export class EstablishmentsService {
	constructor(private http: HttpClient) {}

	getEstablishments() {
		return this.http.get<Establishments>(
			'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'
		);
	}
}
