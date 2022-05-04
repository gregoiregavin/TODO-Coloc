import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '../imports/api/tasks-collection';
import { ColocationCollection } from '../imports/api/colocation-collection';

const insertTask = taskText => TasksCollection.insert({ text: taskText, userId: user._id, createdAt: new Date(), });
const insertColocation = colocationText => ColocationCollection.insert({ text: colocationText, userId: user._id, createdAt: new Date(), });
 
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'Votre liste de tâches est vide',
      'Vous pouvez supprimer ces tâches',
      'Et en créer des nouvelles !',
    ].forEach(taskText => insertTask(taskText, user))
  }

  // if (ColocationCollection.find().count() === 1){
  //   [
  //     'Ce nom est déjà utilisé',
  //     'Trouver un autre nom',
  //   ]
  // } 
  // else if (ColocationCollection.find().count() === 0) {
  //   [
  //     'Créer votre coloc'
  //   ].forEach(colocationText => insertColocation(colocationText, user))
  // }

});
