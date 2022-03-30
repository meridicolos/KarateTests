Feature: testKarate

  Background:
    * configure driver = { type: 'chrome' }
#    * configure driverTarget = { docker: 'justinribeiro/chrome-headless', showDriverLog: true }

  @TerminatorTag
  Scenario: test

  Then print 'Terminator vs Robocop'