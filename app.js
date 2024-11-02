var fun = document.getElementById("cal")

function five (input){
    fun.value = "" 
}


function seven (input){
    fun.value += input
}

function toequal(input){
fun.value = eval(fun.value)
}