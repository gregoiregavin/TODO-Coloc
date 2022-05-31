import './nav.html'
import './nav.css'

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.nav.events({
    "click #leaderboard"() {
        Meteor.score(
            FlowRouter.go('leaderboard/:id')
        );
    },
    "click #dashboard"() {
        Meteor.dashboard(
            FlowRouter.go('colocation/:colocId')
        );
    },
});