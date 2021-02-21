class WizLib {
    constructor(date = new Date()) {
        this.date = date;
        this.dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];
    }

    time() {
        let year = this.date.getFullYear();
        let month = this.monthOfYear[this.date.getMonth()];
        let day = this.dayOfWeek[this.date.getDay()];
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        let second = this.date.getSeconds();
        let milliseconds = this.date.getMilliseconds();
        
        return [year, month, day, hour, minute, second, milliseconds];
    }
    
    day() {
        return this.dayOfWeek[this.date.getDay()];
    }

    hour() {
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        return [hour, minute];
    }

    minute() {
        let minute = this.date.getMinutes();
        let second = this.date.getSeconds();

        return `${hour}:${second}`;
    }

    amPmFormate() {
        var d = this.date;
        var hh = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var dd = "AM";
        var h = hh;
        if (h >= 12) {
             h = hh - 12;
            dd = "PM";
        }
        if (h == 0) {
            h = 12;
        }

        /* Syntax for teranary operators
        output = (condition) ? the if body : the else body 
        */

        m = (m < 10) ? "0" + m : m
        s = (s < 10) ? "0" + s : s

        var replacement = h + ":" + m + ":" + s;
        replacement += " " + dd;
          
        return replacement;
    }
}

/*
If a method in the class doesn't have a any attributes (this.something), can be convereted to a static method like this 

static methodName() {


}

* The benfit is that there is no need to call an instance instead

console.log(className.methodName());

var msec = Date.parse("March 21, 2012");
document.getElementById("demo").innerHTML = msec;

!note the "Date" is the new Date();
*/