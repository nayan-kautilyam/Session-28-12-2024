import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userData = localStorage.getItem('user');
  if(userData){
    const user = JSON.parse(userData);
    if(user.username === 'admin'){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
};
