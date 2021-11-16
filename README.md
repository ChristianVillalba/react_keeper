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

The function `handleChange` is going to receive an `event` when it gets triggered       
We're going to destructure the event so that we get hold of the **event.target.name** and **event.target.value**           
So we can use this `name` and `value` as separate constants:
```javascript
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
```
Then we added `setNote` to be able to receive the previous note `prevNote` and      
in addition, I'm going to use that to add to the existing note.      
So `setNote` will return a new object with the previous note `...preNote` (spread operator)     
and in addition I'm going to add the new `name` and `value`:            
`{ ...prevNote, [name]: value }`      
remember that `[name]` simply 
turns this `name key` from just the string name 
for the key to the actual `value` of this `name` constant `const{name...` above .
`...preNote` (spread operator) will spread all of the **key-value** pairs that is       
currently in existence in our `note` (inside funct: CreateArea, title: and content:)       

### Pass the newly created note back to the app.

We know that we've got this `note` saved in the constant and      
we know that we have a button called **add** which is supposed to trigger this adding of the note functionality.

We add a `onClick` to the Add Button and try to get this `note` that's been created in ` fucntion handleClick`       
passed back to the App.jsx
```javascript
 <button onClick={submitNote}>Add</button>
```
When this button gets clicked, we're going to pass it a function that should be triggered: `submitNote`
passed back to the App.jsx
```javascript
  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
```
**Default Behaviour:**     
Remember: whenever you click on a button inside a form, the default behavior is to refresh the page.          
`event.preventDefault();` prevents this.     

The next thing to do is to trigger a function that can pass the `note` (CreateArea.jsx) back over to the App.jsx.      
And to do that we have to pass in a function as a prop (App.jsx)
```javascript
  function addNote(newNote) {
    setMyNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
```
This `addNote` is going to receive a note object `newNote` and it's going to do something with that note object.    

That `addNote` is going to be added as a value to one of the props for the `CreateArea` Component.    
We are going to call it `onAdd` (or any other name) and I'm going to set it equal `addNote` .     

In CreateArea.jsx the `function CreateArea(props)` hold the props so it can trigger `addNote`.     
In the `fucntion submitNote` we can use `props.onAdd()`.     
And calling this `onAdd` from the props is going to be equivalent to calling the `addNote` from the App.jsx.        
In order to be able to add the `note` we have to pass it back as an input.       
So in the onAdd we're going to pass over the current created note:  `props.onAdd(note)`


## Implement functionality to delete Notes    

