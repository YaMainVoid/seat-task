# Seat task 

The project contains **constructor in *back folder*** that helps you create different furnishings (tables, seats, scene) **using drag and drop**. 
<!-- photo  -->


Also contains ***front folder***. There are **guests** can see furnishings and **make orders**.
<!-- photo -->

***Server folder*** contains logic that **take requests** and **give responses**.  Detailed description below.

## Installation
```bash 
git clone https://github.com/YaMainVoid/seat-task.git
```
When project have been downloaded you have to 
```bash
cd back 
npm i 
cd ../
cd front 
npm i
cd ../
cd server
npm i
```
You also can run the project using  ```npm start``` from back, front, server

## Transmitted data structure
### Components data structure
After arranging and clicking on the **Save button**, data will be sent to the server. Data will be contained in an array of objects. **The first object always has this structure**
```js
{
    type: 'container',
    width: Number,
    height: Number,
}
```
Data from the first object will help create adaptive container, it's needed for front end part.

**Other objects will have this structure**
```javascript
{
    id: Number,
    type: String,
    width: Number,
    height: Number,
    left: Number,
    top: Number,
    spec: { /* specific data for every component */}
}
```
The structure means that every object will have (expected the first of course) id, type, width, height, left, top, spec fields

Type can have these values: ```'table' || 'seats' || 'scene' ```

### ```spec``` for each component 

---

```spec``` for ```table``` looks like this 
```js
{
    state: String,
    cost: Number,
    qty: Number
}
```

Where state can have these values ```'free' || 'booked'```

---

```spec``` for ```scene``` looks like this 
```js
{
    name: String
}
```

---

```spec``` for ```seats``` looks like this 
```js
{
    seatWidth: Number,
    seatHeight: Number,
    seatMargin: Number,
    seatMarginBottom: Number,
    rows: Number,
    chairs: Number,
    seats_matrix: Array of Arrays
}
```

Now let's take a closer look at ```seats_matrix``` it's two-dimensional array. **The array contains arrays of objects**. Each object has **type field**.

```type``` can have these values ```'row_info', 'seat'```

object for ```type: 'row_info'```
```js
{
    id: Number,
    type: String,
    existed: Boolean,
    content: String
}
```

object for ```type: 'seat'```
```js
{
    id: Number,
    type: String,
    existed: Boolean,
    content: String,
    cost: Number,
    state: String,
}
```

This ```state``` is similar to the state of the table's ```spec.state```

<!-- Example code with scree -->

### Order data structure

Order data is array of objects. Every object has these structure 

```javascript
{
    id: Number,
    type: String,
    cost: Number,
    additionalInfo: { /* there should be some additional info */ }
}
```

```additionalInfo``` for ```type: 'table'``` is empty object
```additionalInfo``` for ```type: 'seat'``` is object that contains row and chair fields. The structure looks like this 
```javascript
{
    row: Number,
    chair: Number
}
```
<!-- Example + photo -->

## Back in detail

Everything is intuitively (if you clearly know react redux :P), but I'll talk about reducers. This will help to quickly understand program logic.

In ***reducers folder*** are 6 files 
* ***componentsStore.js*** - state is array of objects. Initially empty array. After clicking on **Create button** component will be added at componentsStore and its structure will have the same structure as the objects from the array that is transferred to the server ([*see the transmitted data structure/components data structure*](#transmitted-data-structure)) ***Note***: the state won't contain object with field `type: 'container'`, the object will added when we'll generate data for sending to server
* ***currentDragComponent.js*** - state is object. Initially empty object. When we start drag component, the component removes from componentsStore store and adds at currentDragComponent. When we finished to drag component adds at componentsStore and removes from currentDragComponent (state will be empty)
* ***index.js*** - there exports all reducers and combines, nothing unexpected :)
* ***inputsStore.js*** - state is array of objects. There store all inputs info (3 inputs with type number and 1 input with type text to be precise). Object has thise structure 
```js
{
    name: String,
    value: String
}
```
* ***resultModalWindow.js***
* ***serverCommunication.js***

