import { CanActivateFn } from '@angular/router';

export const deactivateGuard: CanActivateFn = (route, state) => {
  alert('ban deo dc roi di');
  return false;
};
