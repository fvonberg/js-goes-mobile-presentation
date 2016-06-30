# TheCodeCampus Vortrag - JS goes Mobile - Eine Übersicht

Dieses Repository enthält die Präsentation zu meinem Vortrag 'Penetrationstests für Entwickler'. Eine PDF-Datei mit den Folien zum Vortrag liegt unter ```etc/pdf```.

## Abstract
Mit Apache Cordova (ehem. PhoneGap) gibt es seit 2009 die Möglichkeit mobile Anwendungen mit JavaScript zu schreiben, die User Experience (UX) ist jedoch nicht wie vom Anwender erwartet. Mit Facebooks “React Native” und Teleriks “NativScript” gibt es seit 2015 einen neuen Ansatz native Apps mit JavaScript zu entwickeln.
Der Vortrag soll einen Überblick über die aktuellen Möglichkeiten geben und bei folgenden Fragen weiterhelfen:
* Welche Vorraussetzungen gibt es für mein Projekt?
* Wie kann ich eine bestehende Codebasis weiterverwenden?
* Welches Vorgehen bietet sich bei einer Neuentwicklung an?
* Welche Vor-/ Nachteile gibt es für den Kunden?

## Inhalt
* Historie
* Übersicht über MobileNative JavaScript
* Gegenüberstellung zu Nativen und Hybrid Apps
* React Native
* NativeScript
* Projektsetup und Demoanwendung (auch unter Github zu finden)


## Kurz-Bio

Frederik von Berg ist seit 2012 bei der w11k GmbH tätig. Dort beschäftigt er sich mit Projekten rund um Scala und Web-Entwicklung.
Immer häufiger sieht er sich in seinem Entwickleralltag mit JavaScript und mobilen Anwendungen konfrontiert.
Zusammen mit seinen Kollegen bloggt Frederik über aktuelle Themen aus diesem Umfeld unter [blog.thecodecampus.de](blog.thecodecampus.de). Privat tanzt er gerne Salsa.


## Setup

Die Präsentation ist als Web-Anwendung mit [AngularJS](https://angularjs.org/) und [w11k-slides](https://github.com/w11k/w11k-slides) umgesetzt. Um sie lokal laufen zu lassen genügen folgende Aufrufe nach dem Checkout. Anschließend läuft ein lokaler Server (Port siehe Konsolenausgabe).

```
npm install
npm run dist
```
