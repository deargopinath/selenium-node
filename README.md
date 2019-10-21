# selenium-node
Test automation with Selenium, Nodejs and Typescript

Pre-requisites:

1. Nodejs 10.16
2. Typescript
3. Chrome Browser
4. Chrome driver - https://chromedriver.chromium.org/
5. Firefox Browser
5. Firefox Gecko Driver - https://github.com/mozilla/geckodriver
6. Mocha testing framework


Steps to use this software:
---------------------------

1. Install Nodejs

2. Install Typescript 

    Command to execute:    npm install -g typescript

3. Install Mocha 

    Command to execute:    npm install -g mocha

4. Install dependencies for the project

    Command to execute:    npm install

5. Compile the test cases (Convert /src/*.ts into /test/*.js)

    Command to execute:     tsc

    This command will compile all the Typescript files of '/src' folder and 
    create the corresponding .js files in /test folder

6. Run the test cases
    Command to execute:    mocha

    This command will run all the compiled test cases

How the test automation works
-----------------------------

Selenium is a browser automator tool. 
Mocha is a test execution tool.

Selenium and Mocha are combined to perform automated testing of web applications.

Parameters for testing (Type of browser, home page url) are specified in a yaml file.