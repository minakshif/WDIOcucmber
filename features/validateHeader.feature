Feature: As user validate header on home page

    Scenario Outline: Scenario Outline name : As a user I can see Header on homepage
        Given As user I will able to launch <URL> of application
        Then  as user I validate <header> on homePage
        Examples:
            | URL                                 | header                  |
            | https://the-internet.herokuapp.com/ | Welcome to the-internet |