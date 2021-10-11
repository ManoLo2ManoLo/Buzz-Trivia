# Buzz Trivia

# LINK SECTION
Link to Github Repository: https://github.com/ManoLo2ManoLo/Project-1-Quiz-Game.git <br />
Link to Application: https://manolo2manolo.github.io/Project-1-Quiz-Game/index.html

# INTRODUCTION
Buzz Trivia was created for Project 1 and includes JavaScript, HTML, CSS files, and three APIs. The trivia app allows the user to take a break from their daily stresses. Buzz Trivia is a quiz app that allows the user to choose from 24 topics including: Sports, Computers, and Video Games among others. The user then can choose from three difficulties ranging from Easy, Medium and Hard. Each topic will provide the user with  10 multiple choice questions. At the end, the user will get a score, they will receive 10 points for each correct answer. The user will then be able to enter their name and record their high score. 

# USAGE
Once on Buzz trivia app the user will choose their desired topic, for example the user may choose Sports. The user will then be taken to a page where they will choose a difficulty level. If the user selects easy, the user will be brought to a page with the first of 10 questions. For each question the user will choose the answer they believe is correct. Once through all of the questions the user will get a score. They will be able to record their high score. 

# CREDIT
This code was prepared for Project 1 for Rutgers University Bootcamp by Adam Abare and Manuel Canas-Menendez.

# NECESSARY FILES
index.html (the structure of the webpage)

-assets folder

--css folder <br />
---style.css (the styling of the webpage)

--js folder <br />
---script.js (the functionality of the webpage)

--images folder <br />
---favi.ico (the favicon of the webpage)

--audio folder <br />
---correct.mp3 <br />
---incorrect.mp3

# THIRD-PARTY API
Link to Materialize (CSS): https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css <br />
Link to Materialize (JS): https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js <br />
Link to Font Awesome (CSS): https://use.fontawesome.com/releases/v5.8.1/css/all.css <br />
Link to J Query (JS): https://code.jquery.com/jquery-3.5.0.min.js

# SERVER-SIDE API
Link to Open Trivia: https://opentdb.com/api_config.php <br />
Link to Giphy (for the gifs): https://developers.giphy.com/ <br />
Link to Fun Fact Generator: https://asli-fun-fact-api.herokuapp.com/ 

# SCREENSHOTS
In this image, it displays what the user will first see when the first open up the webpage, with a list of categories to choose from.
![Screenshot (350)](https://user-images.githubusercontent.com/88364269/136726599-4a616bb7-0983-4aba-b47a-59912e7363ff.png)

In this image, it displays the list of difficulty the user has to choose from.
![Screenshot (359)](https://user-images.githubusercontent.com/88364269/136726671-9621daa3-32ec-4fe0-841b-67df15858079.png)

In this image, it displays how the question and answered are displayed to the user, from a server side api. Underneath the answers, there is a score that increases by 10 everytime a user gets a question correct. With a gif on the bottom of the screen that is related to category chosen, from a server side api. 
![Screenshot (352)](https://user-images.githubusercontent.com/88364269/136726833-e24fc7ba-769d-419d-bab8-5f38926aee5a.png)

In this image, it display the user's final score with a textarea for the user to enter thier name, and submit it to local storage. On the bottom their is a fun fact that is generated from a server side api.
![Screenshot (353)](https://user-images.githubusercontent.com/88364269/136727007-62d6e404-cc69-4a46-8ec5-18dd38a6af36.png)

In this image, it displays the score list, from pervious scores the user had, alongside with the category and difficulty
![Screenshot (356)](https://user-images.githubusercontent.com/88364269/136727180-a5c8fd3f-30eb-4c96-a2f8-772bea417dcd.png)

In this image, it displays how responsive the webpage is to a cell phone (iphone x)
![Screenshot (357)](https://user-images.githubusercontent.com/88364269/136727351-403a8ee9-fec7-4db9-8fdf-c363ecbdcc6c.png)

In this image, it displays how responsive the webpage is to a tablet (ipad pro)
![Screenshot (360)](https://user-images.githubusercontent.com/88364269/136727445-456f1e72-d212-413b-9ced-4f1600a9f328.png)

In this image, it displays an error message for quizes that may not have a quiz avaliable for that difficulty. Since we use a server side api, we dont not control which categories have certain difficulties readily avaliable. For Example math does not have an easy mode, but medium and hard are avaliable. But most categories have all three difficulties. This error page is displayed for those few instances.
![Screenshot (361)](https://user-images.githubusercontent.com/88364269/136727597-2575dbe0-d5f6-4cbb-bd7c-77505ac2f5a9.png)

# LICENSE
Copyright (c) 2021 ManoLo2ManoLo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.