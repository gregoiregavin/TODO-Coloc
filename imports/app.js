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
creerRoute('/connection', "connection", "login");
creerRoute('/colocation/:colocId', "coloc", "dashboard");
creerRoute('/leaderboard/:colocId', "leaderboard", "leaderboard");
creerRoute('*', "404", "404");

/* Template.app.onCreated(function () {
    this.state = new ReactiveDict();
    this.state.set('ecran', 'dashboard');
});

Template.app.helpers({
    isLeaderboard() {
        const inst = Template.instance();
        if (inst.state.get('ecran') == "leaderboard") {
            return inst.state.get('ecran');
        } else {
            return null;
        }
    },
    isDashboard() {
        const inst = Template.instance();
        if (inst.state.get('ecran') == "dashboard") {
            return inst.state.get('ecran');
        } else {
            return null;
        }
    }
})

Template.app.events({
    'click #dashboard'(event, inst) {
        inst.state.set('ecran', 'dashboard');
    },
    'click #leaderboard'(event, inst) {
        inst.state.set('ecran', 'leaderboard');
    }
}); */