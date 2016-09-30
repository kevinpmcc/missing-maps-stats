# missing-maps-stats
This app pulls data from the OpenStreetMap API and pushes it to Geckoboard. You can see the results
at https://kevinpmcc.geckoboard.com/dashboards/41214090B7D97FD3

This displays the current totals and also the change since the last update.

Installation Instructions
-------
Start by cloning this repository. In terminal or other Command line tool put in the below

<code>git clone https://github.com/kevinpmcc/rps-challenge.git</code>

Move into the project folder by entering

<code>cd rps-challenge</code>

Install all depenedencies  
<code>npm install</code>

In order to push data to geckoboard you will need to supply your geckoboard api
key and store it in a .env file.

<code>touch .env</code>

within the .env file add using your secret key  

<code>GECKOBOARD_API_KEY=your_secret_key</code>

To run tests  

<code>npm test</code>

To run program  

<code>node app/app.js</code>

You should begin to see data appear in your terminal.

Technology Used
-------
Node.js and Jasmine  

I used node as its good at asynchronous behaviour. I did not feel any additional
frameworks would be needed as it was a relatively simple program and there was
no need to over complicate things.


Process for creating
------------
<b>Experiment with geckoboard</b>  
The first thing I did was follow the
[tutorial](https://developer.geckoboard.com/getting-started) for pushing a
dataset to geckoboard. I then played with different types of data and how the
widgets worked until I was happy I had decent understanding.

<b>Find an API</b>  
I tried to think of an API which would produce data I could imagine using
myself. After quite a bit of googling I saw that Red Cross had a Missing Maps API. They
hold Mapathons all over the world where people sign up and contribute to the
Open Street Map project in areas Medecin sans Frontiers has identified as being
most urgently in need of mapping. I thought it would be great to have a
dashboard live at a hackathon which showed the totals of the contributions as
people mapped.
The API is not hugely documented but I found the right end-point and played with
pulling things down.

<b>Building the app</b>  
I started with pulling the data down from the API. I then decided what parts I
wanted to use and so cleaned up the data. For a Mapathon I decided 'users', 'roads' 
and 'buildings' would be most tangible.

Each time there was new data I added the JSON to an array.

Next I added the setInterval in app.js so the getData functino would run periodically. For 
an event every 10 mins would be effective. 

Finally I created push.js and once the data had been pulled and cleaned I called the pushDataset
function with the dataArray. This pushed the data up to Geckoboard.


Challenges
----------
<b>Missing Maps API updates not consistent.</b>  
It seems the API data does not update periodically
but everytime there is an edit. Also discovered that if I pushed two sets of
data to geckoboard with the same datetime it would add the values together. To stop this
and keep the data being pushed clean I check if the API call data is updated
since my last call. If it is not the program console logs 'no update' and does
not make a data push.

<b>Testing</b>  
I did not find an effective way to mock the API calls in my Jasmine tests which
left me with very little to test. This was something I would be eager to rectify
if I had to do the project again. 


Extensions
---------
While running an event it would be good to also have data showing the total
contributions during the event. This could be done by adding another element to
the dataSet for 'roads' and 'buildings' which compares the latest data to the
first piece of data in the array. The program would only be started just before
the event was to begin.

Similarly it is possible to focus in on single projects using hashtags in the
API. This would be helpful if there was urgent progress needed on just one area.

Leaderboards are also possible if there was a list of userids or if you drilled
into a specific project. I will certainly experiment more with these and see if
they may be used at a future Missing Maps event.
 


