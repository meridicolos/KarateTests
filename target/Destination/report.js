$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/examples/users/users.feature");
formatter.feature({
  "line": 1,
  "name": "testKarate",
  "description": "",
  "id": "testkarate",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#    * configure driver \u003d { type: \u0027chrome\u0027 }"
    }
  ],
  "line": 5,
  "name": "configure driverTarget \u003d { docker: \u0027justinribeiro/chrome-headless\u0027, showDriverLog: true }",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "test",
  "description": "",
  "id": "testkarate;test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@TerminatorTag"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "driver \u0027https://www.travelski.com/\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "delay(10000)",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#    Then print text(\u0027#didomi-popup \u003e div \u003e div \u003e div \u003e div.didomi-popup-notice-text-container \u003e div.didomi-popup-notice-text \u003e span \u003e h1\u0027)"
    }
  ],
  "line": 13,
  "name": "print \u0027Terminator4\u0027",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});