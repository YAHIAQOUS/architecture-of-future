alert('Welcome to my first site, hope you like it');

var interest = prompt("Are you interested to know about architecture of the future?");

while (interest !== 'yes') { interest = prompt('please write yes in order to continue') };


var favouriteArchitect = prompt('Who is your favourite architect?');


while (favouriteArchitect !== 'zaha hadid' && favouriteArchitect !== 'norman foster') { favouriteArchitect = prompt('please choose between zaha hadid and norman foster') };


var favouriteArchitectImage = '';

if (favouriteArchitect == 'zaha hadid') {
    favouriteArchitectImage = '<img src= "https://i.guim.co.uk/img/media/2ca852576b9037530ae9885e68a7014dc7e09241/315_0_4185_2511/master/4185.jpg?width=620&quality=85&auto=format&fit=max&s=01034753f1f9719c623f5ec4a320d6f8"  width=540px /> </br>';

} else if (favouriteArchitect = 'norman foster') { favouriteArchitectImage = '<img src= "https://www.archoutloud.com/uploads/4/8/0/4/48046731/0361-fp5387_1_orig.jpg" width=540px /> </br>'; }

var rating = prompt('Rate his/her projects out of 5');
var ratingValue = '';

while (rating>5 || rating<0) { rating = prompt('rating should be between 0 & 5')}

for (var i = 0; i < rating; i++) { ratingValue += favouriteArchitectImage; }

document.write(ratingValue);