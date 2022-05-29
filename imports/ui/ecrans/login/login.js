import "./login.html"
import "./login.css"
import "../../components/header/header"
import "../../components/footer/footer"
import { Colocations } from '../../../collections/Colocations'

import { Template } from "meteor/templating"
import { ReactiveDict } from "meteor/reactive-dict"
import { Accounts } from "meteor/accounts-base"
import { popMessage } from "../../components/message/message"

Template.login.onCreated(function loginContainerOnCreated() {
  this.state = new ReactiveDict();
  this.state.set('etat', true);
  this.state.set('new_coloc', true);
});

Template.login.helpers({
  creationDeCompte() {
    return Template.instance().state.get("etat")
  },
  colocations() {
    return Colocations.find({});
  },
  creationDeColoc() {
    return Template.instance().state.get("new_coloc");
  }
});

Template.login.events({
  "click #creation-compte, click #login"(event, instance) {
    event.preventDefault();
    const etatActuel = instance.state.get("etat")
    instance.state.set("etat", !etatActuel)
  },
  "click #creationDeColoc, click #rejoindreColoc"(event, instance) {
    event.preventDefault();
    const etatActuel = instance.state.get("new_coloc")
    instance.state.set("new_coloc", !etatActuel)
  },
  "submit .new-acc-form"(event, instance) {
    event.preventDefault()

    const target = event.target
    const name = target.username.value
    const password = target.password.value

    Accounts.createUser({
      username: name,
      password: password,
    });

    const colocId = "";

    if (instance.state.get("new_coloc")) { // tester lq var reactive
      colocId = document.getElementById('select_colocation').value
      Colocations.update(
        { _id: colocId},
        { $push: {
          membres : {
            username: name,
            score: 0,
          }
        }}
      )
    } else {
      const nomColoc = target.nomColoc.value
      colocId = Colocations.insert({
        nom: nomColoc,
        dateCreation: new Date(),
        membres: [{
          username: name,
          score: 0,
      }]
      })
    }
    console.log(colocId);
    let userId = Meteor.user();
    Meteor.users.update(userId, {$set: {colocId: colocId}});
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


//Template.form_colocation.events({
//  "click #creationDeColoc, click #sajouterauneColoc"(event, instance) {
 //   event.preventDefault();
 //   const etatActuel = instance.state.get("new_coloc")
 //   instance.state.set("new_coloc", !etatActuel)
//  },
//})