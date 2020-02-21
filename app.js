/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Timer
{
     static cur_second = 0; static cur_minute = 0; static cur_hour = 0;
     static _timer = false;
      
       
    constructor()
    {
        
    }
    
    startTimer()
    {
        let btn_start = document.querySelector('.start');
        let container = document.querySelector('.container');
      
        function  cb()
        {
        let curClass = new Timer;
        let flag = false;
        let class_list = container.children[0].classList;
        Array.from(class_list).forEach(elem => {
          if(elem == 'container_timer')
          {
            flag = true;
          }
          
        });
        
        if(Timer._timer == false)
        {
            if(flag == false)
            {
              curClass._createElement(container);
            }
            
         curClass._setTimer( container); 
        }
        else{
        alert('Таймер уже запущен');
    }
          
             
        };
           
        btn_start.addEventListener('click', cb);
        
    }
    
    stopTimer()
    {   
        let btn_stop = document.querySelector('.stop');
        
        function  cb()
        {
            
          
         Timer.cur_second = '00';
         Timer.cur_minute = '00';
         Timer.cur_hour = '00';
         
           document.querySelector('.seconds').textContent  =  (Timer.cur_second);
           document.querySelector('.minutes').textContent =  (Timer.cur_minute);
           document.querySelector('.hours').textContent =  (Timer.cur_hour);
           clearInterval(Timer._timer);
           Timer._timer = false;
         
        }
        
        btn_stop.addEventListener('click', cb);
    }
     
    _createElement(container)
    {
           
            var xhr = new XMLHttpRequest();  
            xhr.open('POST', 'adding.html');
            xhr.addEventListener('load',  () =>
            {
               let htmlCode = xhr.responseText; 
      
               container.insertAdjacentHTML('afterbegin',htmlCode);
            });
            xhr.send();
    }
    _setTimer(container)
    { 
         
         let timers = setInterval(() => {
         Timer.cur_second++;
         if(Timer.cur_second == 60)
             {
                  Timer.cur_second = '00';
                  Timer.cur_minute++;
                 
                  if(Timer.cur_minute == 60)
                 {
                       Timer.cur_minute = '00';
                       Timer.cur_hour++;
                 }
                 
             }
             
            document.querySelector('.seconds').textContent  = this.toFormat(Timer.cur_second);
            document.querySelector('.minutes').textContent = this.toFormat(Timer.cur_minute);
            document.querySelector('.hours').textContent = this.toFormat(Timer.cur_hour);
            },1000);
             
        
            Timer._timer = timers;
            
    }
  
    clearTimer()
    {
           console.log(Timer._timer);        
           clearInterval(Timer._timer);
           this.removeDiv();
           
    }
   
    
    removeDiv()
    {    let container = document.querySelector('.container');
         let children_count = container.children.length;
         if(children_count > 1)
        {
             
            container.firstChild.remove();
            
        }
    }
    toFormat(num, count = 2)
    {
        let length = String(num).length;
        let diff = count - length;
        let res = '';
         
        if(diff > -1)
        {
        
            for(let i = 1; i <= diff; i++)
            {
                res = res + '0';
            }
          res = String(res) + String(num);
        
         return (res);
        }
    return;
    }
    makeIteration(elem)
    {
          let s =  elem;
          s++;
          elem =  this.toFormat(s++);
          
    }
    
}

let timer = new Timer;
timer.startTimer();
timer.stopTimer();
 
 
 
 