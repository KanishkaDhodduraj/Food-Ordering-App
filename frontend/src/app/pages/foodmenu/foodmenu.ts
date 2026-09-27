import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food';

@Component({
    selector: 'app-foodmenu',
    imports: [CommonModule],
    templateUrl: './foodmenu.html',
    styleUrl: './foodmenu.css'
})
export class Foodmenu implements OnInit {

    foods: any[] = [];
    restaurantId = '';

    constructor(
        private route: ActivatedRoute,
        private foodService: FoodService
    ) {}

    ngOnInit() {
        this.restaurantId = this.route.snapshot.paramMap.get('restaurantId') || '';

        this.getFoods();
    }

    getFoods() {
        this.foodService.getFoods(this.restaurantId).subscribe({
            next: (response: any) => {
                console.log(response);
                this.foods = response;
            },
            error: (error) => {
                console.error(error);
            }
        });
    }
}