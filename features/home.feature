@home-page
Feature: All home pages features go here
  This part is for feature description

  Scenario: User can open home page and navigate to all other pages
    When open "https://www.qaontime.com" page
    Then "QA on time" header is present
    When user press "About" menu button
    Then "About us" header is present in About us page
    When user press "Pricing" menu button
    Then "Pricing" header is present in Pricing page
    When user press "Contact" menu button
    Then "Contact us" header is present in Contact us page
    When user press "TESTAVIMO KURSAI" menu button
    Then "PROGRAMINĖS ĮRANGOS TESTAVIMO KURSAI" header is present in TESTAVIMO KURSAI page