# Project overview




## How to download and run this project

To get a copy of the project either clone the repo using https://github.com/brianbochicchio/udacity-feedreader.git. Or download the zip file using the link proivded above and extract the project to a local folder. 

The starter code provided by Udacity contained everything needed to run the project. Open the index.html in the project folder to run it. 


## Tests and how to verify they are working

### RSS Feed Definition Test Suite
The first suite of tests verifies that feed urls are defined and valid. 

#### Test 1:  "allFeeds" variable is defined and not empty

To validate this test, remove allFeeds and/or remove all the feeds from allFeeds. This code example shows the minimum that needs to be defined to pass the test. 

``` 
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }
];
```

#### Test 2:  "allFeeds" "feed" must have a URL defined and not be empty

A valid feed appears in the code sample above. To validate this test, empty the url or remove it like in the samples below. 

``` 
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: ''
    }
];
```
``` 
var allFeeds = [
    {
        name: 'Udacity Blog',
    }
];
```

#### Test 3:  "allFeeds" "feed" must have a NAME defined and not be empty

A valid feed appears in the code sample for test 1 above. To validate this test, empty the name or remove it like in the samples below.

``` 
var allFeeds = [
    {
        name: '',
        url: 'http://blog.udacity.com/feed'
    }
];
```
``` 
var allFeeds = [
    {
        url: 'http://blog.udacity.com/feed'
    }
];
```


### The Menu Test Suite
This suite verifies the manu is hidden on startup and that it toggles state as expected. Menu visibility is controled by the class menu-hidden on the body tag.

####Test 1:  ensure the menu is hidden by default
To validate this test remove menu-hidden from the body tag in index.html 

#### Test 2:  ensure the menu toggles state when clicked
The menu is initally hidden.  The test clicks the menu and checks for the presence of the menu-hidden class.

````
    menuIcon.on('click', function() {
        //$('body').toggleClass('menu-hidden');
    });
````


### Initial Entries Test Suite
This suite verifies the asynchronous loadFeed() fuction completes and that there is atleast one entry. This test is performed on the first entry in the allFeeds arrary. 

To validate the test, update the name of the first element with an invalid URL like below.  Making it empty would trigger "must have a URL defined and not be empty" too.  Which is not what we are testing. 


``` 
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feeds'
    }
];
```

### New Feed Selection Test Suite
This suite verifies that when a new feed is loaded the content actually changes. 

To validate the test, set the first two URLs in allFeeds to the same URL.  

````
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }
````