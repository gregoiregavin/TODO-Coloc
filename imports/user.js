const getUser = () => {
    Meteor.user();
}

export const isUserLogged = () => {
    return !!getUser();
}

