# Project overview




# How to download and run this project

To get a copy of the project either clone the repo using https://github.com/brianbochicchio/udacity-feedreader.git. Or download the zip file using the link proivded above and extract the project to a local folder. 

The starter code provided by Udacity contained everything needed to run the project. Open the index.html in the project folder to run it. 


# Tests and how to verify they are working

## RSS Feed Definition Test Suite
The first suite of tests verifies that feed urls are defined and valid. 

### Test 1:  "allFeeds" variable is defined and not empty

To validate this test, remove allFeeds and/or remove all the feed references. This code example shows the minimum that needs to be defined to pass the test. 

``` 
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }
];
```

### Test 2:  "allFeeds" "feed" must have a URL defined and not be empty

A valid feed appears in teh code above. To validate this test, empty the url or remove it like in the samples below. Both cases will fail.

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

### Test 3:  "allFeeds" "feed" must have a NAME defined and not be empty

A valid feed appears in the code for Test 1 above. To validate this test, empty the name or remove it like in the samples below. Both cases will fail. 

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
