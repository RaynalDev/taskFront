import { inject, Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";



export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    return authService.isAuthenticated();
  };

