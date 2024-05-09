export const LoginStart = (useCredentials) =>({
    type:"LOGIN_START",
});

export const LoginSucess = (user) =>({
    type: "LOGIN_SUCESS",
    payload:user,
});

export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE",
});