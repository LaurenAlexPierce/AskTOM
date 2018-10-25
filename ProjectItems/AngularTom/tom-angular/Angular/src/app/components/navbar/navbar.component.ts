import { Component, OnInit, Input } from 'node_modules/@angular/core';
import { Option } from '../option/option';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Input() option:Option;

  @Input() options:Option[]=[];

  constructor() { }

  ngOnInit() {
  }

}
