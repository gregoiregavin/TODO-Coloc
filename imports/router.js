// https://github.com/VeliovGroup/flow-router

import { FlowRouter } from 'meteor/ostrio:flow-router-extra'; 

export const creerPage = (url, titre, template) => {

    FlowRouter.route(url, {
        name: titre,
        action() {
            this.render(template);
        }
    })
};