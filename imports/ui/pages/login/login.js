import "./login.html"
import "./login.css"
import '../../components/header/header'
import '../../components/footer/footer'

import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Accounts } from 'meteor/accounts-base'; 
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.login.onCreated(function loginContainerOnCreated() {
    this.state = new ReactiveDict();
});

Template.login.events({
    "click #account-creation, click #login"(event, instance) {
        event.preventDefault();
        const etatActuel = instance.state.get("etat");
        instance.state.set("etat", !etatActuel);
    },
    "submit .new-acc-form"(event, instance) {
        event.preventDefault();

        const target = event.target;
        const name = target.username.value;
        const password = target.password.value;

        Accounts.createUser({
            username: name,
            password: password
        }) 

        const etatActuel = instance.state.get("etat");
        instance.state.set("etat", !etatActuel);
    },
    "submit .login-form"(event) {
        event.preventDefault();

        const target = event.target;
        const username = target.username.value;
        const password = target.password.value;

        Meteor.loginWithPassword(username, password);

        const getUser = () => Meteor.user();
        const isUserLogged = () => !getUser();
        
        if (isUserLogged()) {
            FlowRouter.go('/');
        }
    }
});

Template.login.helpers({
    creationDeCompte() {
        return Template.instance().state.get("etat");
    }
})