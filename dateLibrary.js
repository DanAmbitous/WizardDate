class WizLib { //Methods made by Danial
    constructor(date = new Date()) { //Default value in constructor
        this.date = date;
        this.dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.dayToday = this.dayOfWeek[this.date.getDay()];
        this.monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novermber", "December"];
        this.monthToday = this.monthOfYear[this.date.getMonth()];
    }

    timeArray() {
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

        return `${subtractDays} day from now was ${d.toLocaleString()}`;
    }

    futureDay(addDays) {
        let d = this.date;

        d.setDate(d.getDate() + addDays);

        return `${addDays} days from now are ${d.toLocaleString()} `; //toLocaleString just changes how it looks when outputed
    } 

    pastHour(subtractHour) {
        let d = this.date;

        d.setHours(d.getHours() - subtractHour);

        return `${subtractHour} hours from now was ${d.toLocaleString()}`;
    }

    futureHour(addHour) {
        let d = this.date;

        d.setHours(d.getHours() + addHour);

        return `${addHour} hours from now is ${d.toLocaleString()}`;
    }

    dayDifferenceYMD(date1, date2) { //Calculates difference between dates in days
        const millisecondsPerDay = 1000 * 60 * 60 * 24;

        // a and b are javascript Date objects
        function dateDiffInDays(date1, date2) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())   ;
        const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())   ;

        return Math.floor(Math.abs((utc2 - utc1) / millisecondsPerDay));
        }

        return dateDiffInDays(date1, date2); //diff date1 and date2
    }

    milisecondDifference(date1, date2) {
        let millisecondDifference = date1 - date2;

        let secondDifference = Math.floor(millisecondDifference / 1000);

        return millisecondDifference;
    }

    secondDifference(date1, date2) {
        let millisecondDifference = date1 - date2;

        let secondDifference = Math.floor(millisecondDifference / 1000);

        return secondDifference;
    }

    minuteDifference(date1, date2) {
        let millisecondDifference = date1 - date2;
        let secondDifference = Math.floor(millisecondDifference / 1000);

        let minuteDifference = Math.floor(secondDifference / 60);

        return minuteDifference;
    }

    hourDifference(date1, date2) {
        let millisecondDifference = date1 - date2;
        let secondDifference = Math.floor(millisecondDifference / 1000);
        let minuteDifference = Math.floor(secondDifference / 60);
        let hourDifference = Math.floor(minuteDifference / 60)

        return hourDifference;
    }

    dayDifference(date1, date2) {
        let millisecondDifference = date1 - date2;
        let secondDifference = Math.floor(millisecondDifference / 1000);
        let minuteDifference = Math.floor(secondDifference / 60);
        let hourDifference = Math.floor(minuteDifference / 60)

        let dayDifference = Math.floor(hourDifference / 24)

        return dayDifference;
    }

    weekDifference(date1, date2) {
        let millisecondDifference = date1 - date2;
        let secondDifference = Math.floor(millisecondDifference / 1000);
        let minuteDifference = Math.floor(secondDifference / 60);
        let hourDifference = Math.floor(minuteDifference / 60)
        let dayDifference = Math.floor(hourDifference / 24)

        let weekDifference = Math.floor(dayDifference / 7)

        return weekDifference;
    }

    monthDifference(date1, date2) {
        let years = this.yearDifference(date1, date2);

        let months = (years * 12) + (date2.getMonth() - date1.getMonth());

        return months;
    }

    yearDifference(date1, date2) {
        let yearDifference = date1.getFullYear() - date2.getFullYear();

        return yearDifference;
    }  
    
    timerSecond(second) {
        let timer = setInterval(function() {
            console.log(second);
            second--;

            if (second < 0) {
                clearInterval(timer);
            }
        }, 1000)
    }

    timerSecondOne(second) {
        let timer = setInterval(function() {
            console.log(second);
            second--;

            if (second === 0) {
                clearInterval(timer);
            }
        }, 1000)
    }

    timerMinute(time) {
        time = time * 60;

        let timer = time, minutes, seconds;

        let interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            timer--;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (timer < 0) {
                clearInterval(interval)
            }

            console.log(`${minutes}:${seconds}`);
        }, 1000);
    }

    timerMinuteOne(time) {
        time * 60;

        let timer = time, minutes, seconds;

        let interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            timer--;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (timer === 0) {
                clearInterval(interval)
            }

            console.log(`${minutes}:${seconds}`);
        }, 1000);
    }

    secondToHMS(seconds) { 
        let hour = parseInt(seconds / 3600);
        let remainderSeconds = parseInt(seconds % 3600);
        let minute = parseInt(remainderSeconds / 60);
        let second = parseInt(remainderSeconds % 60);

        hour = hour < 10 ? `0${hour}` : hour;
        minute = minute < 10 ? `0${minute}` : minute;
        second = second < 10 ? `0${second}` : second;
      
        return `${hour}:${minute}:${second}`;
    }

    timerHour(seconds) {
        let interval = setInterval(function () {
            let hour = parseInt(seconds / 3600);
            let secondRemainder = parseInt(seconds % 3600);
            let minute = parseInt(secondRemainder / 60);
            let second = parseInt(secondRemainder % 60);

            hour = hour < 10 ? `0${hour}` : hour;
            minute = minute < 10 ? `0${minute}` : minute;
            second = second < 10 ? `0${second}` : second;

            console.log(`${hour}:${minute}:${second}`);

            seconds--;

            if (seconds < 0) {
                clearInterval(interval);
            }
        }, 1000);
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