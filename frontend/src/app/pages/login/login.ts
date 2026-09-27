import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
    selector: 'app-login',
    imports: [FormsModule, RouterLink],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    email = '';
    password = '';
    message = '';

    constructor(
        private auth: Auth,
        private router: Router
    ) {}

    login() {
        const user = {
            email: this.email,
            password: this.password
        };

        this.auth.login(user).subscribe({
            next: (response: any) => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));

                this.router.navigate(['/restaurants']);
            },
            error: (error) => {
                this.message = error.error?.message || 'Login failed';
            }
        });
    }
}