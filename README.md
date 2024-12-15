### Chekpoint 5
you may have to `npm install` to install the required dependencies
To run the project please download this code and use `cd app` then `npm start`<br />
Since we aim for mobile web applcation, we are using the functionality fo google chrome. 
Please try this out on chrome, inspect element (press Ctrl+Shift+I on Windows/Linux or Cmd+Option+I on Mac), and use the dimension of iphone XR. <br /><br />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/7b91f587-28c0-4bde-81ed-dcc50ecb6250"><br />
We will improve the overall quality before the deadline.

To start Flask server use `flask run` 

if you would like to test registering a user, try :
    curl -X POST http://127.0.0.1:5000/api/users/register \
    -H "Content-Type: application/json" \
    -d '{"name": "Maria Doe", "email": "mariadoe@example.com", "password": "testingtesting123"}' 

