export function $(selector)
{
    const date = new Date();
    const self =
    {
        element: document.querySelector(selector),
        html: ()=> self.element,

        on: (event,callback)=> {
            self.element.addEventListener(event,callback)
        },
        
    }

    return self

}
//date methods//
const date = new Date();

const getYear = date.getFullYear();
const getDay = date.getDate();
const getMonth = date.getMonth() +1;
const getDate = date.toLocaleDateString();
const getTime = date.toLocaleTimeString()



//test code here//

/*document.querySelector('button').addEventListener('click',function(){
    const date = Date();
    document.querySelector('h1').innerText = date.toLocaleTimeString();
})*/



/*$('button').on('click',()=> {
    console.log(`${getYear}/${getDay}/${getMonth}`)
    console.log($('h1').element.innerText = getTime);
})*/
