var fun = document.getElementById("cal")

function five (input){
    fun.value = "" 
}


function seven (input){
    fun.value += input
}


function five2 (input){
    fun.value = fun.value.slice(0,-1)
}


function toequal(input){
fun.value = eval(fun.value)
}