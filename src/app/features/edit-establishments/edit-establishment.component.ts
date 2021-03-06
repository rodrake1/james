import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { Banks } from 'src/app/consts/Banks';
import { Cities } from 'src/app/consts/Cities';
import { EstablishmentNames } from 'src/app/consts/EstablishmentNames';
import { saveEstablishment, selectEstablishments } from 'src/app/core/store';
import { Establishment } from 'src/app/models/Establishment';
import { Location } from '@angular/common';

@Component({
	selector: 'jd-edit',
	templateUrl: './edit-establishment.component.html',
	styleUrls: ['./edit-establishment.component.scss'],
})
export class EditEstablishmentComponent implements OnInit {
	establishment$: Observable<Establishment>;
	form: FormGroup;
	names = EstablishmentNames;
	cities = Cities;
	banks = Banks;

	constructor(
		private route: ActivatedRoute,
		private store: Store,
		private fb: FormBuilder,
		private location: Location
	) {}

	ngOnInit(): void {
		this.intiForm();
		this.establishment$ = this.getEstablishment();
		this.store.subscribe(console.log);
	}

	intiForm() {
		this.form = this.fb.group({
			id: [null],
			name: [null, Validators.required],
			city: [null, Validators.required],
			street: [null, Validators.required],
			bank: [null, Validators.required],
			accountType: [null, Validators.required],
			cpfCnpj: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(12)]],
			branch: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
			branchDigit: [null, Validators.required],
			account: [null, Validators.required],
			accountDigit: [null, Validators.required],
			autoWithdraw: [null, Validators.required]
		});
	}

	getEstablishment() {
		return this.route.paramMap.pipe(
			withLatestFrom(this.store.select(selectEstablishments)),
			map(([params, establishments]) => {
				const id = params.get('id');
				const establishmentById = (establishment: Establishment) => establishment.id === id;

				return establishments.find(establishmentById);
			}),
			tap((establishment) => this.form.patchValue(establishment))
		);
	}

	save() {
		this.store.dispatch(saveEstablishment({ payload: this.form.value }));
		this.form.markAsPristine();
	}

	goBack() {
		this.location.back();
	}
}
