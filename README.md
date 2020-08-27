# Fullstack Crud Application

In this application we are in a group of four and creating an application that will show off images. Each photo will show the user the name, image URL, author and a URL (if applicable). 

###### The client and server based application will allow a user to:
- View a list of items 
- Create an item 
- Update an item 
- Delete an item. 

The items that will showcased on the website will be held in a database on a backend server, Firebase. Firebase will hold the images in Cloud Storage and the properties will be stored in a databse.

##### Featues we are planning to add after we create the MVP:
- Search Bar / Filter
- Image Tags
- Login
- Up / Down Vote
- Comments
- Caterogies
- Refresh Button

## Finished Application

We created a web application that allowed a user to look at a list of posts, create one, update it and delete the post too. From our feature list of everything we wanted to add once the MVP was created we managed to get a login working with their data being stored in a Firebase database, caterogies, and a search bar partly working with it just needing to be refined. 

We had a team of 4 working on this for a week, Alex Bull, Ben Elwood, Sophie Crilly and Zoe McLean. We all had ur parts to do that we sorted out each morning in our stand up and working on version control through Github. 

##### Alex Bull
Design
Our application was heavily influenced by current social media and image sharing sites as they have already established key elements for effectively conveying information to their users such as image/news feeds, search/categorisation functionality, image layout and content hierarchy.
We have used these elements by applying them to key pages in our application (home,login,account and new post) to establish a foundation of how we want our site to look.

##### Ben Elwood
Firebase
Sign up
On sign up a call is made to Firebase Auth to create a user with email and password, then creates a document in the 'Users' collection on Firestore.
Login
When the user logs in it stores their email address and a boolean (signedIn = true) in the local storage of their browser.
This is useful because when any page is loaded the vue instance checks the local storage for said boolean, and if true it makes a call to get their user data.
Making a post
When a user makes a post the posts user, image, title, content, date and category are all stored in its own document on Firestore which is then pulled down on the 'Home' page and displayed as cards.

##### Sophie Crilly
Sophie started by creating the Vue.cli pages and getting the links to each page working. Her next task was to design the UI for the login / sign up page. This page would have both options clearly laid out for the user to pick which one applied to them. Sophie was working along side with Ben as he was setting the database up so he was going in and adding all the necessary vue data and methods to get the login data saved.

##### Zoe McLean
Zoe was working on designing the UI for the profile page once we had all decided on the lowFis without changes. This was one of her first times designing through Vue.cli which made it a different experience and something new to her. Once the UI was done she started to work on the search bar so the users could search for specific images from the title or caterogies. Zoe only got as far as getting the search bar to console log the search input but would be something she would work on further to get it finished to develop her skills.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
