import angular from 'angular';
import 'angular-ui-router';
import config from './config';
import SERVER from './server.constant';
import ServerService from './services/server.service';
import ListController from './controllers/list.controller';
import SingleController from './controllers/single.controller';

angular
    .module('app', ['ui.router'])
    .config(config)
    .constant('SERVER', SERVER)
    .controller('ListController', ListController)
    .controller('SingleController', SingleController)
    .service('ServerService', ServerService);
