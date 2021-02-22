class WizLib {
    constructor(date = new Date()) { //Default value in constructor
        this.date = date;
        this.dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];
        this.monthToday = this.monthOfYear[this.date.getMonth()];
        this.dayToday = this.dayOfWeek[this.date.getDay()];
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

    dateMDY() {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let day = this.date.getDate();

        return `${month + 1}/${day}/${year}`;
    }

    dateDMY() {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let day = this.date.getDate();

        return `${day}/${month + 1}/${year}`;
    }

    dateYMD() {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let day = this.date.getDate();

        return `${year}/${month + 1}/${day}`;
    }

    dateMDYWord() {
        let year = this.date.getFullYear();
        let month = this.monthToday;
        let day = this.date.getDate();

        return `${month}/${day}/${year}`;
    }

    dateDMYWord() {
        let year = this.date.getFullYear();
        let month = this.monthToday;
        let day = this.date.getDate();

        return `${day}/${month + 1}/${year}`;
    }

    dateYMDWord() {
        let year = this.date.getFullYear();
        let month = this.monthToday;
        let day = this.date.getDate();

        return `${year}/${month}/${day}`;
    }

    year() {
        return this.date.getFullYear();
    }

    month() {
        return this.monthToday;
    }

    monthNumber() {
        return this.date.getMonth();
    }
    
    day() {
        return this.dayToday;
    }

    dayNumber() {
        return this.date.getDay();
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

    pastDay(subtractDays) {
        let d = new Date();

        d.setDate(d.getDate() - subtractDays);

        return `${subtractDays} days before today ${d.toLocaleString()}`;
    }

    futureDay(addDays) {
        let d = new Date();

        d.setDate(d.getDate() + addDays);

        return `${addDays} days from now are ${d.toLocaleString()} `; //toLocaleString just changes how it looks when outputed
    } 

    pastHour(subtractHour) {
        let d = new Date();

        d.setHours(d.getHours() - subtractHour);

        return `${subtractHour} hours from now was ${d.toLocaleString()}`;
    }

    futureHour(addHour) {
        let d = new Date();

        d.setHours(d.getHours() + addHour);

        return `${addHour} hours from now was ${d.toLocaleString()}`;
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