import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    private apiUrl = 'http://localhost:5000/api/foods';

    constructor(private http: HttpClient) {}

    getFoods(restaurantId: string) {
        return this.http.get(
            `${this.apiUrl}/restaurant/${restaurantId}`
        );
    }
}