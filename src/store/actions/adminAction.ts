export const SET_ADMIN_LOGIN= 'SET_ADMIN_LOGIN'

export const setAdminLogin = (bool: boolean) => {
    return { type: SET_ADMIN_LOGIN, bool };
};