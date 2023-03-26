

export const isAdmin = (userData, redirect) => {
    if (userData.isAdmin === false) {
        return {
            redirect: {
                destination: redirect,
            },
        };
    }
};