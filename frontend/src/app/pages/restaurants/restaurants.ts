import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RestaurantService } from '../../services/restaurant';

@Component({
    selector: 'app-restaurants',
    imports: [CommonModule, RouterLink],
    templateUrl: './restaurants.html',
    styleUrl: './restaurants.css'
})
export class Restaurants implements OnInit {

    restaurants: any[] = [];

    constructor(private restaurantService: RestaurantService) {}

    ngOnInit() {
        this.restaurantService.getRestaurants().subscribe({
            next: (response: any) => {
                console.log('API RESPONSE:', response);
                this.restaurants = response;
            },
            error: (error) => {
                console.log('API ERROR:', error);
            }
        });
    }
}