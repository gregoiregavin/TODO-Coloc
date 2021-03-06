// https://github.com/VeliovGroup/flow-router

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const creerRoute = (url, titre, template) => {

    FlowRouter.route(url, {
        name: titre,
        action() {
            BlazeLayout.render('app', { main: template });
        },
    })
};