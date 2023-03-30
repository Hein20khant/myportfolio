var display = document.querySelector('#display')

function clickAc() {
    display.value = ""
}

function clickDe() {
    const lesttest = display.value.toString().slice(0, -1);
    display.value = lesttest
}

function clickplus() {
    display.value += '+'
}

function clickMin() {
    display.value += '-'
}

function clickdot() {
    display.value += '.'
}

function clickMuti() {
    display.value += '*'
}

function clickdivi() {
    display.value += '/'
}

function clickOne() {
    display.value += '1'
}

function clickTwo() {
    display.value += '2'
}

function clickThree() {
    display.value += '3'
}

function clickFour() {
    display.value += '4'
}

function clickFive() {
    display.value += '5'
}

function clickSix() {
    display.value += '6'
}

function clickSeve() {
    display.value += '7'
}

function clickEigh() {
    display.value += '8'
}

function clickNine() {
    display.value += '9'
}

function clickTwoOO() {
    display.value += '00'
}

function clickOneO() {
    display.value += '0'
}

function clickEqu() {
    const anser = eval(display.value);
    display.value = anser

}