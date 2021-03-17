Feature: Auth
  Login and registration processes

  Scenario: I want to log in
    Given I am on the Login Page
    When I type my credentials
    And I submit the form
    Then I should be redirected to the Home Page
