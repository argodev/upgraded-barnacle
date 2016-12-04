angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
        $stateProvider
            .state('app.shinysdr', {
                url: "/shinysdr",
                abstract: true,
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: 'Shiny SDR'
                }
            })
            .state('app.shinysdr.spectrum', {
                url: '/spectrum',
                templateUrl: 'static/views/shinysdr/spectrum.html',
                ncyBreadcrumb: {
                    label: 'Spectrum'
                }
            })
            .state('app.shinysdr.radioconfig', {
                url: '/radioconfig',
                templateUrl: 'static/views/shinysdr/radioconfig.html',
                ncyBreadcrumb: {
                    label: 'Radio Config'
                }
            })
            .state('app.shinysdr.freqdb', {
                url: '/freqdb',
                templateUrl: 'static/views/shinysdr/freqdb.html',
                ncyBreadcrumb: {
                    label: 'Frequency DB'
                }
            })
            .state('app.shinysdr.flowgraph', {
                url: '/flowgraph',
                templateUrl: 'static/views/shinysdr/flowgraph.html',
                ncyBreadcrumb: {
                    label: 'Debug: Flow Graph'
                }
            })
            .state('app.log', {
                url: '/logs',
                templateUrl: 'static/views/log.html',
                ncyBreadcrumb: {
                    label: 'Logs'
                },
                resolve: {
                    // Plugins loaded before
                    // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                    //     return $ocLazyLoad.load([
                    //         {
                    //             serial: true,
                    //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
                    //         }
                    //     ]);
                    // }],
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            files: ['static/js/controllers/logs.js']
                        });
                    }]
                }
            })
    }]);
