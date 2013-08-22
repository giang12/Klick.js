Klick.js
========
addEventListener("leftClick*1000+rightClick*2+middleClick*500",function(){alert("Monkey loves banana")})

Klick.is enables the DOM to listen to a wide range of mouse click events. Sometimes dblclick just doesn't cut it.

DEMO
========
http://jsfiddle.net/tB3NM/30/


API
========
Klick self invokes on page load.

default options = {
        timeout: 250,
        waitStillClickEnd: false
    }
    
    timeout: click event reset time, increase timeout to increase acceptable time between click
	waitStillClickEnd: wait still click sequence end to run handlers

	ex: if waitStillClickEnd===false
	    user leftClick 4 time
	        => any listners with leftClick < 4 time will be fired
	        then listeners with leftClick 4 time will be fired
	     if waitStillClickEnd===true
	     user leftClick 4 time
	        only events with leftClick 4 time will be fired

Klick.start(options)

	Description: Start Klick manually (usually used after Klick.stop() to resume)
		options
		Type: Object
		An object containing data that will be passed to Klick.
		Exp: Klick.start({
			    timeout:400,//dafault:250
			    waitStillClickEnd:false //default: false
			});
			
			
Klick.stop()

	Description: stop Klick


Klick.isRunning()

	Description: Return Klick's state runnning(true) or stopped(false)
	
Klick.config(options)

	Description: Configure Klick's default options
		options
		Type: Object
		An object containing data that will be passed to Klick.
		Exp: Klick.config({
			    timeout:400,//dafault:250
			    waitStillClickEnd:false //default: false
			});
			
	Note: Klick.config(options) does not start Klick, use Klick.start(options) instead.

Examples:
========

rightClick*n => right click n time from 1( NO 0 click cus it makes no sense)

leftClick*n => left click n time from 1

middleClick*n => middle click n time from 1

combo: 

leftClick*3+middleClick*2+rightClick*1    

rightClick*100+leftClick*1
        
...etc...

	$("#love").bind("middleClick*2",function(e){
	   
	});
	
	function luci(){
	
	}
	$(".love").bind("middleClick*2+rightClick*1",luci);
	$(".love").unbind("middleClick*2+rightClick*1",luci);
	
	document.getElementById("love").addEventListener("middleClick*2+rightClick*1+middleClick*3",luci);
	document.getElementById("love").removeEventListener("middleClick*2+rightClick*1+middleClick*3",luci);


	
