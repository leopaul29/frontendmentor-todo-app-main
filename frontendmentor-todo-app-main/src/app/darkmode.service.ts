import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkmodeService {
  darkmode: boolean = false;

  constructor() {}
  
  get darkmodeValue(): boolean {
    return this.darkmode;
  }

  toggleDarkmode(): void {
    this.darkmode = !this.darkmode;
  }
}
