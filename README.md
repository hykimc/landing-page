# Getting Started
## Introduction
This project requires you to build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

Project Rubric
Your project will be evaluated by a Udacity code reviewer according to the Landing Page project rubric. Please review for detailed project requirements.

Get the Starter Code
If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project (i.e., a "skeleton") to use.

You can download the starter code here by cloning the specific branch 'refresh-2019'.

The starter code has a static, non-interactive version of the project so you can get a jump-start on development!

JavaScript and the DOM
Great! You now have the starter code. Before moving forward, make sure you are comfortable with the content from the JavaScript and the DOM course. Ask yourself:

What is the Document?
What are events?
How do we listen for them?
How does event delegation help us avoid too many events?
Check Working with Browser Events in JavaScript and the DOM for a refresher if needed
How can we access elements with the following two methods? What are the differences between them?
querySelector()
querySelectorAll()
How do you use getElementbyId() to select a DOM element by its id?
We can also access elements with getElementsByClassName(). What does this method return, and how do you use it?
How do you use the className property? What does it return, and why would it be useful?
What are the different methods for classList?
Hint: the add(), remove(), and toggle() methods look particularly useful...
Every element has an innerHTML property that represents the markup of the element's content. How can you leverage this property to get and set content?
# PROJECT SPECIFICATION
Landing Page

## Interface and Architecture
### Architecture

The project should have a structure like the one shown below. All files shown must be present and the app must successfully render a home page with clear design and functionality added when index.html is loaded in the browser. No errors should display in console.

**SPECIFICATIONS**
css
- styles.css   [X] 
index.html [X]
js
- app.js [X]
README.md [X]
Usability [X]

All features are usable across modern desktop, tablet, and phone browsers.

### Styling

Styling has been added for active states.

### HTML Structure

There are at least 4 sections that have been added to the page.

## Landing Page Behavior

### Navigation

Navigation is built dynamically as an unordered list.

Section Active State

It should be clear which section is being viewed while scrolling through the page.

### Scroll to Anchor

When clicking an item from the navigation menu, the link should scroll to the appropriate section.

## Documentation

CRITERIA
MEETS SPECIFICATIONS
### README

The ReadMe file should have non-default text in it that is specific to this project. It doesn’t have to be thorough, but should have some basic information, and use correct markdown.

### Comments

Comments are present and effectively explain longer code procedure when necessary.

### Code Quality

Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.

## Suggestions to Make Your Project Stand Out!
See the "Suggested" items section in Development Strategy in the classroom.

Add an active state to your navigation items when a section is in the viewport.
Hide fixed navigation bar while not scrolling (it should still be present on page load).
**Hint**: setTimeout can be used to check when the user is no longer scrolling.
Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
Update/change the design/content.
Make sections collapsible.