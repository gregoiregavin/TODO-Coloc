// Container global
import './app.html';

// Templates de pages
import './ui/ecrans/login/login'
import './ui/ecrans/dashboard/dashboard'
import './ui/ecrans/leaderboard/leaderboard'
import './ui/ecrans/notfound/404'

// Composants
import './ui/components/header/header'
import './ui/components/nav/nav'
import './ui/components/footer/footer'
import './ui/components/message/message'

import { creerRoute } from "./router";

// Création des routes
creerRoute('/', "login", "app");
creerRoute('*', "404", "404");