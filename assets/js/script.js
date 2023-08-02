var data = [];
var show = "";

function status(varable){
    data.push(varable);
    show = '';
    data.forEach(myFunction);
    if (varable == '='){
        document.write('sdsds');
    }else {
        refreshe();
    }
}
function del() {
    data.pop();
    show = show.substring(0, show.length - 1);
    refreshe();
}
function refreshe(){
    document.getElementById("data").innerHTML = show;
}
function myFunction(item) {
    show = show + item;
}