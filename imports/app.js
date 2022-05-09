// Container global
import './app.html';

// Templates de pages
import './ui/pages/login/login'
import './ui/pages/dashboard/dashboard'
import './ui/pages/leaderboard/leaderboard'
import './ui/pages/notfound/404'

// Composants
import './ui/components/header/header'
import './ui/components/footer/footer'
import './ui/components/message/message'

// Création des pages
import { creerPage } from "./router";

creerPage('/', "dashboard", "app");
creerPage('/login', "login", "app");
creerPage('/leaderboard', "leaderboard", "app");
creerPage('*', "404", "404");

import { Template } from 'meteor/templating';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.app.helpers({
    isUserLogged() {
        return isUserLogged();
    }
})