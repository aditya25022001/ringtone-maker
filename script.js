//setting keys
var keys=[];
var ident='@';
var elementKey;
function set(){
    for(var i=1; i<=30;++i){
        ident+=i;
        elementKey = document.getElementById(ident);
        if(elementKey.value==""){
            console.log("enter all keys");
            document.getElementById('warning').innerHTML='Please enter all keys';
            keys=[];
            ident="@";
            break;
        }
        else{
            if(elementKey.value!="")
                keys.push(elementKey.value);
            ident="@";
        }
    }
}