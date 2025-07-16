Feature: GET /media Endpoint Tests

    @scenario1
    Scenario: Response status code is 200
        Given I have access to the API
        When I make a GET request to the '/media' endpoint
        Then it should return status code 200
        And it should be less than '1000' ms

    @scenario2
    Scenario: Response body has valid IDs and only one track is playing
        Given I have access to the API    
        When I make a GET request to the '/media' endpoint
        Then the 'id' field should not be null or empty
        And only one track is now playing

    @scenario3   
    Scenario: Response header has current date
        Given I have access to the API    
        When I make a GET request to the '/media' endpoint
        Then the current date is in the response header
