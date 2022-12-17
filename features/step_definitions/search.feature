Feature:Book a movie ticket 
    Scenario: Should search by text
        Given user is on start page
        When user clicks on the desired date
        When user click on need hall
        When user set place in hall
        When user click on submit button
        Then user sees text "Вы выбрали билеты:"


        