const input = document.getElementById("input")

function reveseString (str){
    return str.split("").reverse().join("")
}
function check() {
    const value = input.value;
    const reverse = reveseString(value)
    if (value == reverse) {
        alert("It is palindrome") 
    }
    else {
        alert("Not a Palindrome")
    }

    input.value = ""
}