Feature: Google search

    Scenario Outline: USer search on googel with differnet keyword
        Given USer searches with <key>

        Examples:
            | key      |
            | java     |
            | selenium |
            | cucumber |
            
