import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
    selector: 'app-register',
    imports: [FormsModule, RouterLink],
    templateUrl: './register.html',
    styleUrl: './register.css'
})
export class Register {
    name = '';
    email = '';
    password = '';
    message = '';

    constructor(
        private auth: Auth,
        private router: Router
    ) {}

    register() {
        const user = {
            name: this.name,
            email: this.email,
            password: this.password
        };

        this.auth.register(user).subscribe({
            next: (response: any) => {
                this.message = response.message;
                this.router.navigate(['/login']);
            },
            error: (error) => {
                this.message = error.error?.message || 'Registration failed';
            }
        });
    }
}