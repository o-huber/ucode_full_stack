

class Timer {
    constructor(title, delay, stopCount, mode) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount + 4;
        this.mode = mode;
    }

    start() {
        let temp_cyrcle = 0;

        
        var timerId = setInterval( () => {
            if (this.mode == -2) {
                hum.calories = 0;
                status_info.innerHTML = "PERDOLE";
                calories.innerHTML = "WANT EAT";
                this.stop(timerId);
                return;
            }
            if (this.mode == -1) {
                if (hum.calories > 0)
                    hum.lost_callories();
                if (hum.calories == 0) {
                    status_info.innerHTML = "I WONT EAT. I HUNGRYY!"
                }
                return;
            }
            hmara_div.hidden = false;
            if (this.mode < 3) {
                if (this.mode == 1 && this.stopCount != 4) {
                    if (temp_cyrcle > this.stopCount - 4) {
                        status_info.innerHTML = 'I am awake now!';
                    } 
                    else {
                        status_info.innerHTML = 'I am sleeping!';
                    }
                } 
                else {
                    if (temp_cyrcle >= this.stopCount - 4) {
                        if (this.stopCount == 4) {
                            status_info.innerHTML = "I'm not hungry!";
                        }
                        else {
                            if (hum.calories < 500)
                                status_info.innerHTML = "I'm still hungry";
                        }
                    } 
                    else {
                        status_info.innerHTML = 'Nyam Nyam Nyam...';
                    }
                } 
        }
        else {
            console.log("Perdole")
            if (this.mode == 3) {
                status_info.innerHTML = 'I am flying....';
            }
            else {
                if (temp_cyrcle >= 0) {
                    status_info.innerHTML = 'Khhhh-chh...';
                if (temp_cyrcle > 3)
                    status_info.innerHTML = 'Bang-g-g-g...';
                if (temp_cyrcle > 6)  
                    status_info.innerHTML = 'Roshan is defeated!';  
                     
                }
            }
        }
            temp_cyrcle++;
            if ( temp_cyrcle >= this.stopCount)
            this.stop(timerId);
        }, this.delay);
    }


    stop(temp) {
        clearInterval(temp);
        status_info.innerHTML = "";
        hmara_div.hidden = true;
        eat_key.disabled = false;
        sleep_key.disabled = false;
    }

}