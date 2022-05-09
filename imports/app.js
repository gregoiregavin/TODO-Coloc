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
creerRoute('/', "login", "app");
creerRoute('*', "404", "404");

// https://docs.meteor.com/api/reactive-dict.html#ReactiveDict-get
// https://www.blazejs.org/api/spacebars.html
Template.app.onCreated(function () {
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
        //console.log(inst.state.get('ecran'));
    },
    'click #leaderboard'(event, inst) {
        inst.state.set('ecran', 'leaderboard');
    }
});