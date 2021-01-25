export interface Establishment {
	id: string;
	index: number;
	guid: string;
	picture: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	registered: string;
	latitude: string;
	longitude: string;
	street?: string;
	city?: string;
	bank?: string;
	accountType?: string;
	cpfCnpj?: string;
	branch?: string;
	branchDigit?: string;
	account?: string;
	accountDigit?: string;
	autoWithdraw?: boolean;
}
