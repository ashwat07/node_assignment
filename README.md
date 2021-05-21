# node_assignment

## Solving below python assignment using nodejs for learning purpose

Task pre-requisites

1. Django/Flask Web framework
2. Python threading
3. Marshmallow library (For validating requests)
4. SQLite database

It's recommended to go through the above pre-requisites before proceeding with the development.

----------------------------Task-----------------------------------------

Relational DB schema

Table items

1. id --> integer (auto inc)
2. status --> varchar(20)
3. item --> varchar(20)

4. Create a flask/django API endpoint that

- Accepts method POST
- Accepts 1 param as type application/json:
  a. item --> Required and can be one of [book, pen, folder, bag] only, nothing else should be accepted (Use marshmallow to validate)

  e.g. {"item":"book"} is valid, but {"item":"red"} is invalid

- Performs validations on the above request with rules stated above
- Inserts the row to the table items, keep status=pending on insertion
- Sends response code as 200 along with the response body having the id of the recently inserted item.
  e.g. {"item":"book", "status":"pending","id":1}

After this, the DB Schema should look like -

id item status
1 book pending

2. Create another flask/django API endpoint in the same project that

- Accepts method GET
- Accepts 1 parameter as query param named "delay_value"
- The delay value will be an integer e.g. 1,2,3 and so on
- Create a function that will trigger a GET request to an external entity with the following details
  - URL: https://httpbin.org/delay/{delay_value} (The delay value should be taken from the query params)
- We need to trigger 5 requests concurrently to this function using Threading and wait for all responses to arrive We will also need to measure the time taken to execute these requests.
- Send response code as 200 with response body having the time taken to execute these requests
  e.g. {"time_taken":5.35}

Expectations:

1. Create separate files for configuration e.g. DB params --> Required
2. SQLite for database is alright -> Optional
3. Please create a postman collection with the endpoints and share it to ease testing --> Required
4. Please push all relevant files to git (gitlab.com) and share the repo access --> Optional
5. Deployment of the project is not expected
6. While sending over the project, please specify the requirements.txt file and exact steps to run the project for testing,
   please specify all 3rd party libraries in the requirements.txt file.
