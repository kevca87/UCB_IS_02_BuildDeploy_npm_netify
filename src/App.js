const nombre = document.querySelector("#nombre-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");


function isAnIndex(index,lenght){
    var ans = false;
    if (index<lenght && index>0){
        ans = true;
    }
    return ans;
}


/*function valueIntervalFinder(value,array,iLim = Math.floor(array.length/2))
{
  var sLim = iLim + 1;
  var interval;
  console.log("["+iLim+","+sLim+"]")
  if(value < array[0])
  {
    interval=0;
  }
  else if(value>array[array.length-1])
  {
    interval=array.length;
  }
  else if (array[iLim]<=value && value<=array[sLim])
  {
    interval = iLim+1;
  }
  else if (array[iLim]<=value)
  {
    iLim = iLim + 1;
    interval = valueIntervalFinder(value,array,iLim);
  }
  else if (value<=array[sLim])
  {
    iLim = iLim - 1;
    interval = valueIntervalFinder(value,array,iLim);
  }
  alert(iLim + " " + sLim)
  return interval;
}*/

/*function selectorWithBoundaries(value,options, inferiorBoundaries){
    var i = Math.floor(inferiorBoundaries/2);
    
        if(options[i]<value)
        {
            if(isAnIndex(i+1) && value<options[i+1])
            {
                optionWasSelected = true;
            }else{
                
            }
        }else {
            i++;
        }

    return ;
}*/
function valueIntervalFinder(value,limits)
{
    var interval;
    if (value<limits[0])
    {
        interval = 0
    }
    else if (value >limits[limits.length-1])
    {
        interval = limits.length
    }
    else
    {
        for(var i=0;i<limits.length;i=i+1)
        {
            if (limits[i]<=value && value<=limits[i+1])
            {
                interval = i + 1;
            }
        }
    }
    return interval;
}
function greetingSelector(name,age,gender){
    var greetings = {
        0:"Que tal",
        1:"Hola",
        2:"Como esta",
    }
    var limits = [10,25]
    group = valueIntervalFinder(age,limits);
    return greetings[group] + " " + name
}

form.addEventListener("submit",event=>{
    greeting = greetingSelector(nombre.value,edad.value,"masculino")
    alert(greeting);
})