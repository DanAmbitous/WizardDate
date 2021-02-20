function $(selector)
{
    const date = new Date();
    const self =
    {
        element: document.querySelector(selector),
        //html: ()=> self.element,
        inside: ()=> {
      return self.element.innerText
        },
        on: (event,callback)=> {
            self.element.addEventListener(event,callback)
        },
        // FIX getYear //
        /* getYear: ()=> {
            date.getFullYear()
        } */

    }

return self

}

//test code here//
console.log(getYear())
console.log($('h3').inside())

$('h3').on('click', function(){
    console.log('HIIIII')
})