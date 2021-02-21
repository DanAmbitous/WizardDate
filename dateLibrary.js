class WizLib {
    constructor(date = new Date()) {
        this.date = date;
        this.dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];
        this.monthToday = this.monthOfYear[this.date.getMonth()];
        this.dayToday = this.dayOfWeek[this.date.getDay()]
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
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        return `${h}:${m}:${s}`;
    }

    date() {
        return `${this.date.getFullYear()}/${this.monthToday}/${this.date.getDay()}`;
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        return this.monthToday;
    }
    
    day() {
        return this.dayToday;
    }

    hour() {
        let hour = this.date.getHours();

        hour = (hour < 10) ? "0" + hour : hour  

        return hour
    }

    minute() {
        let minute = this.date.getMinutes();

        return minute;
    }

    second() {
        let second = this.date.getSeconds();

        return second;
    }

    millisecond() {
        let millisecond = this.date.getMilliseconds();

        return millisecond;
    }

    past(subtractDays) {
        let d = new Date();

        d.setDate(d.getDate() - subtractDays);

        return `${subtractDays} days from now was ${d.toLocaleString()}`;
    }

    future(addDays) {
        let d = new Date();

        d.setDate(d.getDate() + addDays);

        return `${addDays} days from now are ${d.toLocaleString()}`;
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