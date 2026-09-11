function calculate(btnValue){
    var userInput = document.getElementById("input_user");
    var userResult = document.getElementById("result_input");
    var user_value = userInput.value;
    var user_result = userResult.value;

    if(btnValue == '='){
        var res = eval(user_value);
        userResult.value = res;
    }
    else if(btnValue == 'del'){
    var delet = userInput.value.slice(0, -1);
    userInput.value = delet;
    }
    else if(btnValue == 'clear'){
    var cel = '';
    var del = '';
    userResult.value = del;
    userInput.value = cel;
    }
    else{
        userInput.value += btnValue;
    }
}