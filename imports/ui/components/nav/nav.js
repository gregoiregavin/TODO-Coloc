import './nav.html'
import './nav.css'

Template.app.onCreated(function () {
    this.state = new ReactiveDict();
    this.state.set('ecran', 'dashboard');
});

Template.app.helpers({
    isLeaderboard() {
        const inst = Template.instance();
        return inst.state.get('ecran') == "dashboard" ? inst.state.get('ecran') : null
    },
    isDashboard() {
        const inst = Template.instance();
        return inst.state.get('ecran') == "leaderboard" ? inst.state.get('ecran') : null
    }
})

Template.app.events({
    'click #dashboard'(event, inst) {
        inst.state.set('ecran', 'dashboard');
    },
    'click #leaderboard'(event, inst) {
        inst.state.set('ecran', 'leaderboard');
    }
});