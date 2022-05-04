import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import '../../ui/pages/home/app';
import '../../ui/pages/création-coloc/création-coloc'

FlowRouter.route('/', {
    name: 'home',
    action() {
        this.render('home');
    },
});

FlowRouter.route('/création-coloc', {
    name: 'création-coloc',
    action() {
        this.render('création-coloc');
    },
});