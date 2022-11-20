const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class DateTime {

    dayOfWeek = (year, month, day) => {
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);

        // validate date
        if(!this.isValidateDate(year, month, day)) return "Invalid Date"

        // array with leading number of days values
        const t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];

        // if month is less than 3 reduce year by 1
        year -= month < 3;
        
        // this formula mention about leap year and add the day of the month and an offset t[] that depends on the month
        const index = Math.floor((year + year / 4 - year / 100 + year / 400 + t[month - 1] + day) % 7);

        return daysOfWeek[index];
    }

    isValidateDate = (year, month, day) => {
        let maxDateOfMonth = 31

        switch (month) {
            //Feb
            case 2 :
                maxDateOfMonth = (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28
            break;
            //The months have 30 days
            case 9 : case 4 : case 6 : case 11 :
                maxDateOfMonth = 30
            break;
        }

        // validate year less 1900, month less 1 or than 12, date less 1 or than maximum date in month
        if(year < 1900 || month <= 0 || month > 12 || day <= 0 || day > maxDateOfMonth) return false

        return true;
    }
}

export const datetime = new DateTime();
export default datetime;