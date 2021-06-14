# UCSD-CodeBootCamp-10_TemplateEngine-EmployeeSummary
This is my tenth homework project.  I will build a a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

Instructions:
------------
Instructions are located in the readme.md file in the root folder of the hw assignment repository: "https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/blob/master/10-OOP/02-Homework/README.md"


Resources used:
------------
- GitBash
- GitHub
- node.js
- node.js modules:
	- Manager
	- Engineer
	- Intern
	- inquirer
	- path
	- fs
	- render


Progress:
------------
2020.03.06_0100 - Initial commit. Set up folder structure and imported initial starting point from "https://ucsd.bootcampcontent.com/UCSD-Coding-Bootcamp/UCSD-SD-FSF-PT-12-2019-U-C/tree/master/10-OOP/02-Homework".

2020.03.06_0612 - Corrected resources used section in 'readme.md'.  Added first pass prompts, and began the .then function that runs after prompts have been answered by the user, and the render function in 'app.js'.  I also added comments to 'app.js'.

2020.03.06_0635 - Updated function for prompts in 'app.js', including adding a switch case for the prompts based on employee jobTitle as well as reordering the prompts to make more sense.  I then chained the function that will create employee 'objects' based on the user's input to run after the user has answered all prompts.

2020.03.06_0647 - Began first pass of building 'employee' class in 'Employee.js'.

2020.03.06_0703 - Added 'module.export' to 'Employee.js'.  I then began first pass at extending 'Employee' class into 'Engineer' subclass in 'Engineer.js'.

2020.03.06_1902 - I completed first pass at extending 'Employee' class into 'Engineer' subclass in 'Engineer.js', and then added 'module.export' to 'Engineer.js'. 

2020.03.06_1906 - I added some explanatory comments to 'Engineer.js', and then copied over and intergrated code from 'Engineer.js' to 'Intern.js'.

2020.03.06_1910 - I copied over and intergrated code from 'Intern.js' to 'Manager.js'.

2020.03.06_1918 - I ran 'npm i' from gitBash in 'develop' folder, creating 'package-lock.json'.  I ran into an issue initially with the following error: 'Maximum call stack size exceeded', though I was able to get around this by forcing npm to clear cache and then re-running 'npm install'.

2020.03.07_0035 - I added a require() for 'Employee' to 'app.js' and updated the name of the answer of several prompts, including updating corresponding locations in '.js' files in /develop/lib.  I then added a '.gitignore' file to /develop.

2020.03.07_0150 - I updated 'app.js' to include a .catch() function.  I am researching solutions to making employee objects from the answers.

2020.03.07_0203 - I updated format of and added a for loop to newEmployee() function in 'app.js'.

2020.03.07_0233 - I updated name of anewEmployee() function in 'app.js' to newTeam(). I then corrected the console.logs in each of the '.js' files in /develop/lib.  I then alternated testing and updating/correcting my code in 'Employee.js' until all tests passed in 'Employee.test.js'.

2020.03.07_0249 - I alternated testing and updating/correcting my code in 'Engineer.js' until all tests passed in 'Engineer.test.js'.  It should be noted that the format of the tests required me to update them to match extended class formats.  No other test functionality was changed.

2020.03.07_0302 - I alternated testing and updating/correcting my code in 'Intern.js' and 'Manager.js' until all tests passed in 'Intern.test.js' and 'Manager.test.js', respectively.  It should be noted that the format of the tests required me to update them to match extended class formats.  No other test functionality was changed.

2020.03.07_0305 - I ported y code from 'app.js' to 'index,js', and then renamed the old 'app.js' to 'app_deprecated.js', and then renamed 'index.js' to 'app.js'.

2020.03.07_0317 - I added an example employee-card template to 'main.html', so that I can see what I am working with when I begin styling the employee cards to better match the reference given. 

2020.03.07_1815 - I have been test-running 'app.js' and altering the order and format of the code in the newEmployee() function. I first attempted adding a newRole() function, but ended up commenting it out in favor of keeping all prompts within the newEmployee() function.

2020.03.07_2052 - I am trying to get my switch case function to work within 'app.js', such that it asks the user for employee details based on the employee's role.  I have been able to get the switch case to run without type errors now, however, it is currently reverting to 'default', even though it appears to me that the cases are being met.  

2020.03.12_0403 - I have begun to implement my fixes to 'app.js'.  This includes commenting out the code block of prompts I had previously, and replacing it with a new structure that seperates the prompts into their own functions.  This helps with organization and functionality.  I added a new const containing an empty array to contain the team, and built new functions 'newManager', 'newEmployee', and 'newTeam'.

2020.03.12_0412 - I updated the '.html' files in /develop/template.  These files now include correct html doctype structures and head sections.  I plan to add more styles to these files at a later point.

2020.03.12_1738 - I updated the 'main.html' file in /develop/template to have the correct value in the main div.  I then reverted the 'test.js' files to their initial setup, and then updated my class files in /devlop/lib to pass all tests.  I then revisited 'app.js', and finished building and correcting my prompt function structures while testing the results by running 'app.js' in node, and then updating my code based on the results until satisfied that it was both functional, and at least minimally user friendly.  My only remaining wants are to update the styles in the output .html file.
