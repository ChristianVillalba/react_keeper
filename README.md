# React: Keeper App

Created with [CodeSandbox](https://codesandbox.io/)  
Notes from: React module  
[The Complete 2021 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)  
Instructor: Dr. Angela Yu 

## Description

A note-taking application.      
It allows us to take notes, share them with others, and access them from different devices. 

## Getting Started

### Dependencies

* Visual Studio Code (+Extensions):     
    * Babel JavaScript    
    * VScode-icons     
* Node        
Check Node is Up to Date:
    * Check my Node version using:    
    ```
    node --version
    ```
    * Compare with the latest Node Version:     
    [NODE JS](https://nodejs.org/en/)

### Run Keeper App 
```
cd keeper    
```
```
npm start
```
    
## What I have learned with this project

This is the final project in the React Module.     
We added some functionality:    
* Implement functionality to add Notes      
* Implement functionality to delete Notes      

---
---
# Notes:

## Implement functionality to add Notes

### Create a constant that keeps track of the title and content.

Create a constant that keeps track of the title and content.
The CreateArea component (CreateArea.jsx), we've only got three components       
and we want to save what is typed into this `input` as `title`     
and what is typed in `textarea` as `content`.

We could create separate constants, one for the `title` and one for the `content`,   
but it means to write more lines of code and do a little bit more work.

Instead we create a constant `note` and a function called `setNote`      
and when we use state *useState*, the initial state is just going to be an object with:          
* A title key set to an empty string `title: ""`      
* A content key that's also set to an empty string `content: ""`     

```javascript
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
```
Now I can use this `note` inside my `input` and my `textarea` 
In this case, we will use it as `value`
```javascript
        <input
          value={note.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
```  
```javascript
        <textarea
          value={note.content}
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
        />
```
The next step is to update `value`(s) when they get change.

Inside the **input** and the **textarea** we added a `onChange`.      
And inside both of these **onChange**, we call a function `handleChange`. 

### Implement functionality to delete Notes    

