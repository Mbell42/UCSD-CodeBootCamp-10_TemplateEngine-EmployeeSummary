# 10_TemplateEngine-EmployeeSummary
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