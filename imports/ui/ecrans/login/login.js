import "./login.html"
import "./login.css"
import "../../components/header/header"
import "../../components/footer/footer"

import { Template } from "meteor/templating"
import { ReactiveDict } from "meteor/reactive-dict"
import { Accounts } from "meteor/accounts-base"
import { popMessage } from "../../components/message/message"

Template.login.onCreated(function loginContainerOnCreated() {
  this.state = new ReactiveDict();
});

Template.login.events({
  "click #creation-compte, click #login"(event, instance) {
    event.preventDefault();
    const etatActuel = instance.state.get("etat")
    instance.state.set("etat", !etatActuel)
  },
  "submit .new-acc-form"(event) {
    event.preventDefault()

    const target = event.target
    const name = target.username.value
    const password = target.password.value

    Accounts.createUser({
      username: name,
      password: password,
    });
  },
  "submit .login-form"(event) {
    event.preventDefault()

    const target = event.target;
    const username = target.username.value
    const password = target.password.value

    //checkAccount = Accounts.findUserByEmail(username) // CÔTÉ SERVEUR :'(
    //console.log("CheckAccount: " + checkAccount)

    test = Meteor.loginWithPassword(username, password)
    //console.log("Username: " + test.username)
  },
});

Template.login.helpers({
  creationDeCompte() {
    return Template.instance().state.get("etat")
  }
});
