import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css'],
})
export class DarkModeToggleComponent implements OnInit {
  constructor(private darkmodeService: DarkmodeService) {}

  ngOnInit(): void {}

  getDarkmodeValue() {
    return this.darkmodeService.darkmodeValue;
  }

  toggleDarkmode(): void {
    this.darkmodeService.toggleDarkmode();
  }
}
