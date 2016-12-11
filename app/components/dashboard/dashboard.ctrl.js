'use strict';

(function() {

  /**
   * @ngdoc function
   * @type challengeApp.controller:DashboardCtrl
   * @description
   * # DashboardCtrl
   * Controller of the challengeApp
   */
  var DashboardCtrl = function($scope) {

    // Mock-up info data
    $scope.datalist = [{
      name: "Tenrox-R1_1235",
      type: "build",
      owner: "",
      time: "",
      state: "Pending",
      metrics: 0,
      build: 0,
      unit: 0,
      function: 0
    },{
      name: "432462",
      type: "firewall",
      owner: "jtuck",
      time: "4/18/2014 12:12pm",
      state: "Running",
      metrics: 30,
      build: 0,
      unit: 0,
      function: 0
    },{
      name: "432461",
      type: "firewall",
      owner: "samy",
      time: "4/18/2014 10:53am",
      state: "Rejected",
      metrics: 100,
      build: 0,
      unit: 0,
      function: 0
    },{
      name: "Tenrox-R1_1234",
      type: "build",
      owner: "",
      time: "4/17/2014 9:42am",
      state: "Complete",
      metrics: 100,
      build: 100,
      unit: 100,
      function: 100
    },{
      name: "432460",
      type: "firewall",
      owner: "samy",
      time: "4/17/2014 7:51am",
      state: "Rejected",
      metrics: 100,
      build: 0,
      unit: 0,
      function: 0
    },{
      name: "432459",
      type: "firewall",
      owner: "samy",
      time: "4/16/2014 6:43am",
      state: "Accepted",
      metrics: 100,
      build: 100,
      unit: 100,
      function: 100
    }];

  };

  DashboardCtrl.$inject = ['$scope'];

  angular
    .module('challengeApp')
    .controller('DashboardCtrl', DashboardCtrl);
})();
