# WEB SCRIPT APPLICATION - UP812199



The task was to create a contemporary web application using industry best practices that could help tutors design units with different numbers of weeks, lectures and practical sessions with different linked content, multiple practical sessions per lecture and combined lecture and practical sessions.


# Downloading the application

-----------
To run the server on localhost:8080. You must have installed node modules first.

``` bash
git clone https://GitHub.com/mattbishun5/WS_Application
cd WS_Application
npm start 
```

Alternatively, you can download the repository from GitHub, and then unpack the zip file. You must make sure you have NodeJS installed on your machine. 

``` bash
npm install 
cd WS_Application
npm start
```

# KEY FEATURES

-----------

The key features of my application are:

On the client side
-----------

I have an application whereby users can click on various buttons to add or remove lectures, weeks, practical’s and notes. As many rows of weeks, lectures, sessions, notes can be added as possible.

I have used jQuery to implement drag and drop. Users can drag cells (which are editable), to different columns and group sessions together. Plans can be re-ordered simply by dragging. Columns can combine cells from one or more columns by dragging.



On the server side
-----------

I have implemented a server, which can be run by typing, once in the applications directory.
``` bash
npm start 
``` 
Once the server is listening on port 8080, http://localhost:8080/ in a browser will take you to the application.



# IMPROVEMENTS FROM FIRST SUBMISSION  
-----------


I have improved my application greatly since the first submission. I have implemented a server using NodeJS, express and static enabling my webpage to be loaded onto port 8080, once the server is listening. 

I have also taken the feedback on board from my first submission. I have validated my CSS and HTML code, as there were issues in my validation in particular in my HTML. I have removed all the errors that it had initially, for both CSS and HTML. I have eradicated var in HTML, with it occurring once in my jQuery index.js for functionality. I have used Const to replace var in the HTML.
I have also added a hover on click of my buttons within my CSS file, adding a background colour of light blue before clicking. I have removed many unnecessary comments, as these do not comply with the industry best practice. I have also kept consistent indentation, to improve readability. I have changed confusing names of function in my index.js such as; date and de.

I have removed many script tags of my JavaScript code, in my HTML, as this is poor maintainability. My package.json file I have created manually, initially by a npm init, and then I have changed areas of it accordingly, such as name, dependencies, author, and scripts. 

Also, within my README file I have explained in more depth how to run my application, as well as the key features it has. I have massively improved my README by learning some markdown, and it has been presented a lot better than my first README file. I have also written a more in-depth reflection of the year and included how my application has improved from my first submission. To improve my submission, I went through my feedback comments individually and tackled each one. I also did some thorough research online and found many YouTube tutorials, that enabled me to create a server, a working package.json file and create better HTML and CSS mark-up. I also used Stack Overflow (Source url: https://stackoverflow.com/) for help with my index.js, as I had a lot of errors here.


# INDUSTRY BEST PRACTICE 
-----------

According to industry best practice, I have changed my code to meet these expectations. I have removed unnecessary comments that are not needed, if the code is self-explanatory. I have declared variables before my functions in the script tag. (Source url: https://www.w3schools.com/js/js_best_practices.asp).


This was a requirement of the application, and so I researched what the best practice is and incorporated this into my work.

I have also placed my scripts to other local files at the bottom of my HTML page as per industry practice. I originally had these at the top of my file but have changed this in accordance with the best practice. I have also removed language in my script JavaScript tag, again which complies with the industry standard. (Source url: https://code.tutsplus.com/tutorials/24-javascript-best-practices-for-beginners--net-5399). 

I have also added a keyword meta tag, as described in the URL: https://www.webpagefx.com/blog/web-design/20-html-best-practices-you-should-follow/ on point no 3. According to point no 4 I have used div tags, in particular for my button code. I have also used a CSS file to separate my mark-up from HTML and CSS, this is a best practice. I have also implemented an unordered list, for my navigation buttons.



# YEAR REFLECTION
-----------


The first 6 weeks of the unit involved grasping some of the main concepts that would be used in the year. Variables were discussed in the early weeks, such as the use of let and const and to not use var! I had some knowledge of this having coded before, and I was able to implement the use of variables in my work. The use of functions to return values, and JSON notation was also something discussed early on.


I was familiar with functions, although JSON was something new to me, and I was able to grasp this quite quickly. The MDN website proved to be a great tool here to emphasize what I learnt in lectures and practical’s, and it was a website I was to use more frequently.

Next, I learnt about the DOM. This is an object-oriented API, that gives access to the document, so scripts can read data from the HTML. JavaScript can be used to change the elements of a HTML document, and the topic was something relatively new to me. A webpage requires the DOM to work with JS to display an efficient site, that looks appealing to a user. I was able to pick it up straight away from the lecture and again went to the MDN website for further reading. We also learnt about elements, and the various properties of elements, such as; ID, attributes, value and class Name. We also learnt about JavaScript graphics. I had previous knowledge of graphics having done Python before, and it was very much the same here. It involved drawing various shapes, including lines that could become very useful later on.

I struggled through getting to grips with AJAX, asynchronous coding using async functions. I was completely in the dark for this and found it hard to understand at first. Although, going over the lecture notes and looking through Google, enabled me to grasp the concept some more. I watched many YouTube tutorials to understand this type of coding.

Once the first Coursework was complete, we moved onto Server side. This is where NodeJS came into play, and I learnt about the various modules that could be required, as well as building a server to host pages on. I found this very enjoyable, and although at first, I struggled, I went back to MDN, which explained it to me further. I was able to get some help from colleagues and tutors who were able to look at my code and give me some pointers if I was struggling.

The final Coursework submission was not far away, and so it was a good time to introduce NodeJS. The first lecture gave an overview of what it was, and I had done some prior reading to being taught it. Soon after the lecture I was able to download NodeJS on my machine and start cracking on with it. The supplied tests on GitHub, enabled me to understand the topic further.

The next couple weeks went over packages, including package.json something we had looked at before briefly. As I had gone away and done some reading into JSON, I discovered that this is a very important file for all web applications. Scripts and dependencies make up a huge part of every package.json file. 

API’s were touched on in Week 10, something which can enhance every application. API's were also studied towards the end of the year. API's use routes as a way of requesting/retrieving data and it was something I looked into as it was an element of the Final coursework. I understood that CRUD - Create, Read, Update, Delete made up an api, and various short URL's are used to obtain or request information.


We then went onto MYSQL, a language I am very familiar with. As I knew I was good at SQL, I thought I wouldn't have problems coding in this language, however the harder part was how this would all come together with NodeJS. MySQL was just another module that can be required within NodeJS similar to express, http and path. Some of the functions used, were async functions and these incorporated SQL to insert data into a database.
I worked tirelessly, going through MDN and other material on Moodle, to make sure I understood the topic and was ready to use it in my End of year coursework.

I completed the next coursework to a satisfactory standard, although I felt I should have done better. I made some silly errors in my coursework such as poor indentation and I didn’t have express as a dependency in my package.json file. This was something to learn from for the final submission.

We learnt about RESTFUL applications. Representational State Transfer is a style with properties and constraints. REST systems use URLs instead of filenames, and library names. I managed to use some of this within my application, and it is a common style used in applications nowadays.

The final weeks leading up to the end of the year involved particular areas that would be needed in the Final submission. This included Drag and drop, and my tutors used a drag a cat example to implement this. I found this to be very interesting, and I was able to use parts of this API in my final Submission work. Using event listeners such as Drag start and drop were key aspects of Drag and Drop, and I went over this multiple time to ensure I fully understood the topic. 

Some extra bits, such as Google Sign in were covered right before the submission, something which would increase usability, and security of the application. Changing the protocol to Https would enhance my project and make it a more secure and stable application.

What I learnt throughout the year gave me a good stepping stone to create the final coursework. The majority of the work was done in each week, the final task just involved putting everything together effectively for the task set.

I took what I had learnt throughout each individual practical session and took parts of each week and implemented this into my final submission. I did some thorough reading around  some particular topics such as drag and drop jquery, and html tags. I went back to MDN and looked at YouTube videos to study parts that I wasn’t so familiar with. My code from each practical week was a great help, and I managed to get help from colleagues with my final submission. I also emailed my tutors regularly for help with coding errors.

I started this perhaps a little late but was able to create an application I was proud of. The supplied tests on Github were a great help, and I was able to refer to these for help on particular topics such as; api, database and servers. HTML I had no issues with and W3 schools website was a help here for my CSS coding as well. (Source url: https://www.w3schools.com/). I generally could find the solution to my problems quite quickly, either on W3 schools or on Stack Overflow. I had previous HTML and CSS experience so enjoyed this side of the project. What was more challenging was Javascript and jquery, however having studied it thoroughly this year I became more accustomed to it. The functions for adding and removing rows took some time and was probably the hardest part of the project. However, once this was complete everything became much easier.

I was able to create drag and drop to a sufficient standard. I also believe my server was to a good standard, and I was able to learn from my mistakes in my package.json file, such as having dependencies set up correctly. My HTML and CSS was validated, producing a functional client side of the application.




# FORWARD THINKING DISCUSSION

-----------


If this application were to be developed some more, then a native style of dragging could be implemented. I used jQuery for my dragging and this works well, however using JavaScript would create an ever-better style of dragging for the user. Additionally, saving plans and exporting plans to other formats could be something implemented further down the line. Also, the use of an undo and redo button would work well and create a more usable application.

Furthermore, a database could easily be implemented. I had troubles with getting MySQL to connect, and it’s something that would enhance my project greatly. I had the basics with a server, but a fully-fledged database would be something that would improve my application even further. The supplied repositories on Github from my tutors, would come in handy here, and I believe I could create a database given more time. I would create various sql and js files, where data could be inserted, selected and listed. Results would be then returned in the terminal. I would create week and topic data, as well as sessions and notes could be added to the database. The API would handle all the requests between the browser url and the database. URL's would return and retrieve different data.


