export class TestData_GetDateTime {
    constructor() {}
<<<<<<< HEAD

    async getDateTimeNow() {
        function padTo2Digits(num: number) {
            return num.toString().padStart(2, '0');
        }
        function padTo3Digits(num: number) {
            return num.toString().padStart(3, '0');
        }

        function formatDate(date: Date) {
            return (
                [
                    date.getFullYear(),
                    padTo2Digits(date.getMonth() + 1),
                    padTo2Digits(date.getDate()),
                ].join('-') +
                ' ' +
                [
                    padTo2Digits(date.getHours()),
                    padTo2Digits(date.getMinutes()),
                    padTo2Digits(date.getSeconds()),
                    padTo3Digits(date.getMilliseconds()),
                ].join(':')
            );
        }
        console.log(formatDate(new Date()));
        return {
            dateTimeNow: formatDate(new Date()),
        };
    }
}
=======
  
    async getDateTimeNow() {
      function padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
      }
      function padTo3Digits(num: number) {
        return num.toString().padStart(3, '0');
      }
  
      function formatDate(date: Date) {
        return (
          [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-') +
          ' ' +
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
            padTo3Digits(date.getMilliseconds()),
          ].join(':')
        );
      }
      console.log(formatDate(new Date()));
      return {
        dateTimeNow: formatDate(new Date()),
      };
    }
  }
  
>>>>>>> fc427a016600df33a6ccb83a514b38c4bf125f5d
