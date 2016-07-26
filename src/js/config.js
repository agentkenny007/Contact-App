export default function config($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('add', {
            url: '/add',
            templateUrl: 'templates/add.template.htm',
            controller: 'AddController as vm'
        })
        .state('list', {
            url: '/',
            templateUrl: 'templates/list.template.htm',
            controller: 'HomeController as vm'
        })
        .state('single', {
            url: '/contact/{id}',
            templateUrl: 'templates/single.template.htm',
            controller: 'SingleController as vm'
        });
    $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
