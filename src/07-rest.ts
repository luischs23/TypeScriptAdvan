import {user,ROLES} from './01-enum';

const currentUser:user = {
  username: 'Luish28',
  role: ROLES.ADMIN
}

export const checkAdminRole = ()=>{
  if(currentUser.role === ROLES.CUSTOMER){
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log('checkAdminRole ',rta);

export const checkRole = (role1:string, role2:string)=>{
  if(currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}
const rta1 = checkRole(ROLES.SELLER , ROLES.CUSTOMER);
console.log('checkRole ',rta1);

export const checkRoleV2 = (roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}
const rta2 = checkRoleV2([ROLES.SELLER , ROLES.CUSTOMER]);
console.log('checkRoleV2 ',rta2);

export const checkRoleV3 = (...roles:string[])=>{
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

const rta3 = checkRoleV3(ROLES.SELLER , ROLES.CUSTOMER, ROLES.ADMIN);
console.log('checkRoleV3 ',rta3);
