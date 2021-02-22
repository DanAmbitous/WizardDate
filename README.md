# Welcome to Time Wizard

## what is this?
Time Wizard is a library which makes working 
with date methods in Javascript much easier
for beginners and people who don't like
writing code and can make creating stop
watches and alarms easier.

## Basic Documentation
``` javascript
$('.exampleDiv') // Just like JQuery we use $ for our selector
.on(event,callback) // example .on('click',function(){ }) 
.element // selects the acctuall element so if your trying to get innerText use .element after the selector
.getYear // gets the year number...for example 2021
.getDay // gets the Day date...for example 2
.getMonth // gets the Month date... for example 4
.getDate // selects the entire date... for example 2/20/2021
.getTime // gets the your Local Time.. for example 3:23:48 PM
```
## Example Usage
```javascript
$('button').on('click',()=> {
    console.log(`${getYear}/${getDay}/${getMonth}`)
    console.log($('h1').element.innerText = getTime);
})
```
### Outputs 
``` 
// inside the console //
    2021/20/2 
    2:21:35 PM
```   
## Installation


## CDN
