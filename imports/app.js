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

// Création des pages
import { creerPage } from "./router";

creerPage('/', "dashboard", "app");
creerPage('/login', "login", "app");
creerPage('/leaderboard', "leaderboard", "app");
creerPage('*', "404", "404");