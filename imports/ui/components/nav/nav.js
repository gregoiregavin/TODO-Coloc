import './nav.html'
import './nav.css'

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.nav.events({
    "click #leaderboard"() {
        Meteor.leaderboard(
            FlowRouter.go('/leaderboard/:colocId')
        );
    },
    "click #dashboard"() {
        Meteor.dashboard(
            FlowRouter.go('/colocation/:colocId')
        );
    },
});