export const userCreator = (user)=>{

    return {
        type:"SET_USER",
        payload:user,
    };
};

export const logoutUser =()=>{
    return {
        type:"LOGOUT_USER",
    };
};