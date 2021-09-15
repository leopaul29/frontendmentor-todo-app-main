import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from './darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private darkmodeService: DarkmodeService) {}

  ngOnInit(): void {}

  getDarkmodeValue() {
    return this.darkmodeService.darkmodeValue;
  }
}
