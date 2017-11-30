var checkFn = function(event){
    if(checkEnter.getAttribute('aria-checked') == "true"){
        return event.keyCode == 13 && !event.shiftKey && ! event.ctrlKey;
    } else{
        return event.keyCode == 13 && (event.shiftKey || event.ctrlKey);
    }
}

var cf = function(value){
    var val_rs = validation(value);
    var cf_str = "";
    if(val_rs.status){
        cf_str = "Sure for submitting?";
    }else{
        cf_str = val_rs.log + "Sure for submitting?";
    }
    if(confirm(cf_str)){
        return true;
    } else{
        return false;
    }
}

var validation = function(value){
    var bracket_stack = [];
    var rs = {};
    var not_match_flag = false;
    Array.prototype.forEach.call(value, function(c) {
        if(c == '[') bracket_stack.push(c);
        if(c == ']') {
            if(bracket_stack.length > 0){
                bracket_stack.pop();
            }else{
                not_match_flag = true;
                return false;
            }
        }
    });
    if (bracket_stack.length > 0 || not_match_flag){
        return {status: false, log: "Bracket not match. "};
    }else{
        return {status: true, log: ""};
    }
}

var init = function(){
    inputElem.addEventListener('keydown', function(event){
        if(checkFn(event)){
            if(cf(inputElem.value)){
                event.preventDefault();
            }
        }
    });
}
var inputElem = document.getElementById("_chatText");
var checkEnter = document.getElementById("_sendEnterAction");
if(inputElem && checkEnter){
    init();
}
