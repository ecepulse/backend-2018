/**
 * Created by rahul_ram on 11/22/17.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import todosController from 'todos/todos';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('todos', {
            url: '/',
            template: require('todos/todos.html'),
            controller: todosController
        })
        .state('about', {
            url: '/about',
            template: require('about/about.html')
        });

    // Gets rid of hashes from urls
    $locationProvider.html5Mode(true);
});

export default app;