

### Meme Image Generator App
This is a React app that makes an API call to imgflip API to fetch random memes and displays them.

## API Used
The app makes a call to the following API to fetch memes:
https://api.imgflip.com/get_memes

## Components
App.js - Contains the main App component
Header.js - Displays the app header
Meme.js - Component that displays the fetched meme image and form to generate new memes

## Usage
Clone the repository
git clone https://github.com/kartikav05/Image-Generator-with-text
Install dependencies
Copy
npm install
Run the app
Copy
npm start
The app will be served at http://localhost:3000 ↗

The homepage will display a random meme fetched from the API.
You can generate new memes by entering text in the form and clicking 'Genrate a new meme' button. This will make a new API call to fetch a random meme.
The app header contains the app name.
Meme images and text are displayed using the Meme.js component.