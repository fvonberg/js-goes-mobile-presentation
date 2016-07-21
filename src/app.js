(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',
      'overview',

      '0-intro/about-us',

      '1-jsgoesmobile/jsgoesmobile-title',
      '1-jsgoesmobile/jsgoesmobile',

      '2-history/native-title',
      '2-history/native',
      '2-history/hybrid-title',
      '2-history/hybrid',

      '3-mnjs-overview/mnjs-title',
      '3-mnjs-overview/mnjs',
      '3-mnjs-overview/voraussetzung-title',
      '3-mnjs-overview/voraussetzungen',
      '3-mnjs-overview/code-example-title',
      '3-mnjs-overview/code-example',
      '3-mnjs-overview/code-example-screenshot',
      '3-mnjs-overview/uebersicht-title',
      '3-mnjs-overview/uebersicht',

      '4-comparison/mnjs-vs-native-title',
      '4-comparison/mnjs-vs-native',
      '4-comparison/mnjs-vs-hybrid-title',
      '4-comparison/mnjs-vs-hybrid',

      '5-frameworks/overview',
      '5-frameworks/react-native-title',
      '5-frameworks/react-native',
      '5-frameworks/react-native-code',
      '5-frameworks/react-native-screenshot',
      '5-frameworks/nativescript-title',
      '5-frameworks/nativescript',
      '5-frameworks/nativescript-button-example',

      '6-setup/nativescript-setup-title',
      '6-setup/nativescript-setup',

      '7-livecoding/live-coding-title',
      '7-livecoding/live-coding-content',

      'fragen',
      'end',
      'quellen'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html',
      'expert': '@@cacheBustingDir/masters/expert.html',
      'hands-on': '@@cacheBustingDir/masters/hands-on.html',
      'demo': '@@cacheBustingDir/masters/demo.html',
      'code': '@@cacheBustingDir/masters/code.html',
      'screenshot': '@@cacheBustingDir/masters/screenshot.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
   SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
