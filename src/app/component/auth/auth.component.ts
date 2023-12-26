import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {


  login(): void {
    // Perform login logic

    // Set authentication status to true
    // this.authService.setAuthenticationStatus(true);
  }

  isActive: boolean = false;

  activateContainer() {
    this.isActive = true;
  }

  deactivateContainer() {
    this.isActive = false;
  }

}
