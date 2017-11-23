var inputElem = document.getElementById("_chatText");
var checkEnter = document.getElementById("_sendEnterAction");
var checkFn = function(event){
    if(checkEnter.getAttribute('aria-checked') == "true"){
        return event.keyCode == 13 && !event.shiftKey;
    } else{
        return event.keyCode == 13 && event.shiftKey;
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
    var open_bracket_stack = [];
    var close_bracket_stack = [];
    Array.prototype.forEach.call(value, function(c) {
        if(c == '[') open_bracket_stack.push(c);
        if(c == ']') close_bracket_stack.push(c);
    });
    if (open_bracket_stack.length != close_bracket_stack.length){
        return {status: false, log: "Bracket not match. "};
    }else{
        return {status: true, log: ""};
    }
}

inputElem.addEventListener('keydown', function(event){
    if(checkFn(event)){
        if(cf(inputElem.value)){
            event.preventDefault();
        }
    }
});
