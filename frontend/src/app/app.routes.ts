import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Restaurants } from './pages/restaurants/restaurants';
import { Foodmenu } from './pages/foodmenu/foodmenu';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Orders } from './pages/orders/orders';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'restaurants', component: Restaurants },
    { path: 'foodmenu/:restaurantId', component: Foodmenu },
    { path: 'cart', component: Cart },
    { path: 'checkout', component: Checkout },
    { path: 'orders', component: Orders }
];