// Container global
import './app.html';

// Templates de pages
import './ui/pages/login/login'
import './ui/pages/dashboard/dashboard'
import './ui/pages/leaderboard/leaderboard'
import './ui/pages/notfound/404'

// Composants
import './ui/components/header/header'
import './ui/components/nav/nav'
import './ui/components/footer/footer'
import './ui/components/message/message'

import { creerRoute } from "./router";

// Création des routes
creerRoute('/', "dashboard", "app");
creerRoute('/login', "login", "app");
creerRoute('/leaderboard', "leaderboard", "app");
creerRoute('*', "404", "404");