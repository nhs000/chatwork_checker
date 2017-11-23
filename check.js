var inputElem = document.getElementById("_chatText");
var checkEnter = document.getElementById("_sendEnterAction");
var checkFn = function(event){
    if(checkEnter.getAttribute('aria-checked') == "true"){
        return event.keyCode == 13 && !event.shiftKey;
    } else{
        return event.keyCode == 13 && event.shiftKey;
    }
}
inputElem.addEventListener('keydown', function(event){
    if(checkFn(event)){
        if(!confirm("Sure for submit?")){
            event.preventDefault();
        }
    }
});
