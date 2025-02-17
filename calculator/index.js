let inputVal = document.querySelector("#inputVal");
const buttons = document.querySelectorAll(".button");
let output = 0;

buttons.forEach((value) => {
  value.addEventListener("click", function (e) {
    inputVal.classList.remove('error');
    
    switch (e.target.value) {
      case "=":
        try {
            
            let result=eval(inputVal.value);
            if (!isFinite(result)) {
                throw new Error("Invalid MAth Expression !!!");
            }
            inputVal.value=result;
        } catch (error) {
            inputVal.classList.add('error');
            inputVal.value=`Invalid MAth Expression !!!`        
        }            
        break;
      case "+":
        inputVal.value+="+"
        break;
      case "-":
        inputVal.value+="-"
        break;
      case "/":
        inputVal.value+="/"
        break;
      case "X":
        inputVal.value+="*"
        
        break;
        case "%":
        inputVal.value+="%"
            break;
            case "delete":
                inputVal.value=inputVal.value.substring(0,inputVal.value.length-1);
                
        // inputVal.value+="%"
            break;
        case "AC":
            inputVal.value=0
            break;
      default:  
        inputVal.value+=e.target.value;
        output=inputVal.value;
        break;
    }
    
  });
});
