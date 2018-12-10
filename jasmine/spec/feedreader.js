/* feedreader.js
 *
 * This spec file contains all tests Jasmine is supposed to run.
 */

/* All of the tests are within the $() function, becasue
 * some tests will require DOM elements to be ready. 
 */
$(function() {
    /* "RSS Feeds Test Suite" */
    describe('RSS Feeds', function() {
        /* 
         * Check to see that allFeeds is defined and not empty 
         * See test 1 in README for more information
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* 
         * Check to see that the soure URL for the feed is defined
         * and not empty. See test 2 in README for more information
         */
        it('url is defined and not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe("");               
            }
        });

        /* 
         * Check to see that the soure NAME for the feed is defined
         * and not empty. See test 3 in README for more information
         */
        it('name is defined and not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe("");               
            }
        });
    });

    /* "The menu Test Suite" */
    describe('The menu', function() {
        /* 
        * This suite validates the menu behavior. 
        * See test notes in README for more information
        */

        let menuContent;
        
        // Grab a reference to the body tag before each test 
        beforeEach(function(){
            menuContent = document.querySelector('body');
        });

        /* 
         * Check the classlist of the body tag and verify menu-hidden exists
         * on the inital load.
         * See test 1 in README for more information
         */
        it('menu hidden by default', function(){
            expect(menuContent.classList.contains("menu-hidden")).toBe(true);           
            
        });

        /* 
         * Get a refernce to the menu link and clik it programtically.
         * Check for presence or lack of the menu-hidden class in the body tag.
         * See test 2 in README for more information
         */
         it('menu toggles correctly', function(){
            let clickTarget = document.querySelector('.menu-icon-link');
            // The inital state of the menu is hidden
            clickTarget.click();
            expect(menuContent.classList.contains("menu-hidden")).toBe(false);
            clickTarget.click();
            expect(menuContent.classList.contains("menu-hidden")).toBe(true);

        });
    });

    /* "Intital Entries Test Suite" */
    describe('Initial Entries', function() {
        // Let's make sure the feed is loaded   
        beforeEach(function(done){
        //Done as a callback so we know it's done... done :)
            loadFeed(0, done);
         });
    
        /* 
         * Now that the feed "should be loaded" we check for entries
         * in the feed. See test notes in README for more information
         */
        it('content loaded successfully', function(){
            // Select the feed container and check for children by verifying there are links
            expect(document.querySelector('.feed').querySelectorAll('.entry-link').length).toBeGreaterThan(0);               
            });
        });

    /* New Feed Selection Test Suite */
    describe('New Feed Selection', function(){    
        /* 
        * This suite ensures that when a new feed loads via loadFeed()
        * the content changes. See test notes in README for more information
        */
        let feedOne,  
            feedTwo,
            theFeed = document.querySelector('.feed');
        
        
        /* 
        * Load the feeds and set the variables. 
        */ 
        beforeEach(function(done){
                loadFeed(0, function(){
                    feedOne = theFeed.children[0].innerText;
                });
                loadFeed(1, function(){
                    done();
                });
            });

        /* 
         * Now that the feeds "should be loaded" and variables set
         * we compare them to make sure there is a change. 
         */
        it('feed content changed', function(){
                expect(feedOne === feedTwo).toBe(false);
            });
        });

}());
