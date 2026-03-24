//your JS code here. If required.
let para = document.querySelector("#day");
         let span = document.querySelector("#time");

         let date = new Date();

         let day = date.getDay()
         let month = date.getMonth()+1
         let year = date.getFullYear()

        let days = `${day}/${month}/${year},`

        span.innerText = days

        setInterval(()=>{
            let clock = new Date();

            let hour = clock.getHours()
            let minutes = clock.getMinutes()
            let seconds = clock.getSeconds()

            let ampm = hour >= 12 ? "PM" : "AM";

            hour = hour % 12;
            hour = hour ? hour : 12; 

            let time = `${hour}:${minutes}:${seconds}:${ampm}`;
            para.innerText = time
        },1000)
