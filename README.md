# TUI-Challenge
 Tui QA Recruitment Test

The scope of this Test is to perform some UI Automation flows in the https://www.saucedemo.com website.

The tests were implemented in **Cypress using Typescript and Cucumber as a BDD.**

The tests made focus on regression testing in all the pages of the website and also come complete end to end workflows.

Steps to run the project
  
  1) Clone this project to a local folder in your machine
  2) Install node.js (Go to the https://nodejs.org/en/download and select and install the correct version for your OS)
  3) Install Visual Studio Code (Go to the https://code.visualstudio.com/download and select the correct version for your OS)
  4) Open the Visual Studio Code and Open the folder in your local machine where you saved the **Tui-Challenge** project.
  5) Open a new terminal on Visual Studio Code and run the following command.

     
         npm -v (to check if node.js is installed in the local machine)
  
  
  7) To run the test you need to run the following command.

      Run every test case in background

         npx cypress run --browser chrome

     Run every test with browser chrome open
     
          npx cypress run --browser chrome --headed

     Run every test without telling any browser (cypress will run the electron browser by default)

          npx cypress run
 

  
