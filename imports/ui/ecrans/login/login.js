import "./login.html"
import "./login.css"
import "../../components/header/header"
import "../../components/footer/footer"
import { Colocations } from '../../../collections/Colocations'

import { Template } from "meteor/templating"
import { ReactiveDict } from "meteor/reactive-dict"
import { Accounts } from "meteor/accounts-base"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { popMessage } from "../../components/message/message"

Template.login.onCreated(function loginContainerOnCreated() {
  this.state = new ReactiveDict();
  this.state.set('etat', false);
  this.state.set('new_coloc', false);
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
    }, function (err, val) {
      if (instance.state.get("new_coloc")) { // tester lq var reactive
        const colocId = document.getElementById('select_colocation').value
        Colocations.update(
          { _id: colocId },
          {
            $push: {
              membres: {
                username: name,
                score: 0,
              }
            }
          }
        )
      } else {
        const nomColoc = target.nomColoc.value
        const colocId = Colocations.insert({
          nom: nomColoc,
          dateCreation: new Date(),
          membres: [{
            username: name,
            score: 0,
          }]
        }, function (err, val) {
          if (err) {
            alert("C'est la merde")
          } else {
            FlowRouter.go('coloc', { colocId: colocId });
          }
        });
      }
    });


  },
  "submit .login-form"(event) {
    event.preventDefault()

    const target = event.target;
    const username = target.username.value
    const password = target.password.value

    Meteor.loginWithPassword(username, password, popMessage("success", "Connexion réussie"))
  },
});