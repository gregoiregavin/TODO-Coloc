import { Template } from 'meteor/templating';
import { ajouterColocation, toutesLesColocations } from "./collections/colocations";
import './app.html';


Template.mainContainer.helpers({
  colocations() {
    return toutesLesColocations();
  },
});

Template.formulaireColocation.events({
  "submit .formulaire-colocation"(event) {
    event.preventDefault();

    const target = event.target;
    const nomColoc = target.nom.value;

    ajouterColocation(nomColoc);

    target.nom.value = '';
  }
})