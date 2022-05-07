import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
// https://github.com/VeliovGroup/flow-router/blob/master/docs/full.md

import '../../ui/pages/login/login';
import '../../ui/pages/dashboard/dashboard';
import '../../ui/pages/leaderboard/leaderboard';
import '../../ui/pages/notfound/404'

FlowRouter.route('/', {
    name: 'login',
    action() {
        this.render('login');
    },
});

console.log(FlowRouter.getParam("login"))

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        this.render('dashboard');
    },
});

FlowRouter.route('/leaderboard', {
    name: 'leaderboard',
    action() {
        this.render('leaderboard');
    },
});

// Erreur 404 (not found)
FlowRouter.route('*', {
    action() {
      this.render('404');
    }
});