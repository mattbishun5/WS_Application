# WEB SCRIPT APPLICATION - UP812199



A contemporary web application using industry's best practices.


# Downloading the application

-----------

``` bash
git clone https://github.com/mattbishun5/WS_Application
cd WS_Application
npm start will begin the server
```

Alternatively you can download the repository from Github, and then unpack the zip file.

``` bash
Then cd to the file directory in your Command Prompt or Terminal, and run npm start to begin the server.
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

I have implemented a server, which can be ran by typing 
``` bash
npm start in the applications directory
``` 
Once the server is listening on port 8080, http://localhost:8080/ in a browser will take you to the application.



# IMPROVEMENTS FROM FIRST SUBMISSION  
-----------


I have improved my application greatly since the first submission. I have implemented a server using NodeJS, express and static enabling my webpage to be loaded onto port 8080, once the server is listening. 

I have also taken the feedback on board from my first submission. I have validated my CSS and html code, as there were issues in my validation in particular in my HTML. I have removed all the errors that it had initially, for both CSS and HTML. I have eradicated var in HTML, with it occurring once in my jQuery index.js for functionality. I have used Const to replace var in the HTML.
I have also added a hover on click of my buttons within my CSS file, adding a background colour of light blue before clicking.

I have removed many script tags of my JavaScript code, in my HTML, as this is poor maintainability. My package.json file I have created manually, initially by a npm init, and then I have changed areas of it accordingly, such as name, author, and scripts. 
Also, within my README file I have explained in more depth how to run my application, as well as the key features it has. I have massively improved my README by learning some markdown, and it has been presented a lot better than my first README file. I have also written a more in-depth reflection of the year and included some forward-thinking discussion.


According to industry’s best practices I have changed my code to meet these expectations. I have removed unnecessary comments that are not needed, if the code is self-explanatory. I have declared variables before my functions in the script tag. (Source url: https://www.w3schools.com/js/js_best_practices.asp).

I have also placed my scripts to other local files at the bottom of my HTML page as per industry practices. I have also removed language in my script javascript tag. (Source url: https://code.tutsplus.com/tutorials/24-javascript-best-practices-for-beginners--net-5399). 

# Year Reflection
The first 6 weeks of the unit involved grasping some of the main concepts that would be used in the year. Variables were discussed in the early weeks, such as the use of let and const and to not use var! I had some knowledge of this having coded before, and I was able to implement the use of variables in my work. The use of functions to return values, and JSON notation was also something discussed early on. I was familiar with functions, although JSON was something new to me, and I was able to grasp this quite quickly. The MDN website proved to be a great tool here and it was something I was to use later on.

Next, I learnt about the DOM. Javascript can be used to change the elements of a HTML document, and the topic was something relatively new to me. A webpage requires the DOM to work with JS to display an efficient site. 

I struggled though getting to grips with AJAX, asynchronous coding. I was completely in the dark for this and found it hard to understand at first. Although, going over the lecture notes and looking through Google, enabled me to grasp the concept some more.

Once the first Coursework was complete, we moved onto Server side. This is where NodeJS came into play, and I learnt about the various modules that could be required, as well as building a server to host pages on. I found this very enjoyable, and although at first I struggled I went back to MDN, which explained it to me further.



