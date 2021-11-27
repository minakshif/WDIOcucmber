Feature: user able to register suceessfully
    Scenario Outline: USer fill all information on register page
        Given User launch register page "https://www.hyrtutorials.com/p/basic-controls.html" successfully
        When user enter <fname> and <lastname>
        And Select <gender>
        And check <languages> known languages
        And Enter <mailid> and <password>

        Then click on Register button
        Then  user verify successful msg

        Examples:
            | fname | lastname | gender | languages | mailid         | password |
            | john  | smith    | female | Hindi     | john@gamil.com | ad@345   |








