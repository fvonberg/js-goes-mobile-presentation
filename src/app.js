(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',
      'overview',

      '0-intro/about-us',

      '1-history/native-title',
      '1-history/native',
      '1-history/hybrid-title',
      '1-history/hybrid',

      '2-mnjs-overview/mnjs-title',
      '2-mnjs-overview/mnjs',
      '2-mnjs-overview/voraussetzung-title',
      '2-mnjs-overview/voraussetzungen',
      '2-mnjs-overview/code-example-title',
      '2-mnjs-overview/code-example',
      '2-mnjs-overview/code-example-screenshot',
      '2-mnjs-overview/uebersicht-title',
      '2-mnjs-overview/uebersicht',
      '2-mnjs-overview/demo',

      '3-comparison/mnjs-vs-native-title',
      '3-comparison/mnjs-vs-native',
      '3-comparison/mnjs-vs-hybrid-title',
      '3-comparison/mnjs-vs-hybrid',

      '4-frameworks/overview',
      '4-frameworks/react-native-title',
      '4-frameworks/react-native',
      '4-frameworks/react-native-code',
      '4-frameworks/react-native-screenshot',
      '4-frameworks/nativescript-title',
      '4-frameworks/nativescript',
      '4-frameworks/nativescript-button-example',

      '5-setup/nativescript-setup-title',
      '5-setup/nativescript-setup',
      '5-setup/example-in-vscode',

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
