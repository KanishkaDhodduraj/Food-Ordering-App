import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    private apiUrl = 'http://localhost:5000/api/restaurants';

    constructor(private http: HttpClient) {}

    getRestaurants() {
        return this.http.get(this.apiUrl);
    }
}