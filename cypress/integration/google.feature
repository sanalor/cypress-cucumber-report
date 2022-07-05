Feature: Searching in Google

    Feature page where the users can search some words in Google and check the number of search results
    Background:
        Given A user enters on Google webpage

    @orange-proof-pass
    Scenario: "Orange Bank" should have more than 100000 search results in Google
        And accepts all cookies
        When enters "Orange Bank" on search bar
        And clicks enter button
        Then search results is greater than "100000"

    @orange-proof-fail
    Scenario: "peperonisimo" should have more than 10000 search results in Google
        And accepts all cookies
        When enters "peperonisimo" on search bar
        And clicks enter button
        Then search results is greater than "10000"