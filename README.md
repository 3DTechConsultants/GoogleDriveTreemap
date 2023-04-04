# GoogleDriveTreemap
GAS project to visualize the number of files in a drive as well as the relative sizes of the folders. 
To recreate this project: 
Create a new GAS project and paste the code from code.gs into the main file for your GAS project
Create a new HTML file named GUI.html and paste the contents of GUI.html in it
Create a new HTML file named JS.html and paste th contents of JS.html in it. 
Create a test deployment of your GAS script and visit the URL it gives and click "Refresh Drive Data"

GAS scripts can have a 6 or 30 min runtime limit and the script doesn't take it into account. 
If the app script function times out the throbber will just keep spinning forever. 

This is deployed publicly as a webapp. 
https://script.google.com/macros/s/AKfycbxO9nDrJYkLdJmiiw1EJRZlFoS2NZU6t5jrqKx35E6FYQRF_ev_gEJZy2_g1o501tle/exec
It is NOT verified and requires full read access to google drive. It's definitely a security risk to use the public app. 
