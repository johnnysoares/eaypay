import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-header-default',
	templateUrl: './header-default.component.html',
	styleUrls: ['./header-default.component.scss'],
})
export class HeaderDefaultComponent implements OnInit {

	@Input()
	public title: String;


	//Construtor
	public constructor() { 

	}

	ngOnInit() {}

}
