import "./header.html"
import "./header.css"

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.header.events({
    "click #logout" () {
        Meteor.logout(
            FlowRouter.go('/')
        );
    },
});