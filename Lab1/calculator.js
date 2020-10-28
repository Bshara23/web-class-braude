var myNum = 0
var lastOperator = ''
$(document).ready(function () {
    // numbers
    $('.numCls').click(function (event) {
        console.log(this.id);
        $('.inputField').text($('.inputField').text() + this.id)
    });

    // +
    $('#plus').click(function (event) {
        operatorPressed('+')

    });

    // -
    $('#minus').click(function (event) {
        operatorPressed('-')


    });

    // *
    $('#multiply').click(function (event) {
        operatorPressed('*')


    });


    // /
    $('#divide').click(function (event) {
        operatorPressed('/')


    });


    // ←
    $('#back').click(function (event) {
        var str = $('.inputField').text()
        str = str.substring(0, str.length - 1);
        $('.inputField').text(str)

    });

    // =
    $('#equal').click(function (event) {
        $('.inputField').text(myNum)
    });


    // clear
    $('#clear').click(function (event) {

        myNum = 0
        lastOperator = ''
        $('.inputField').text('')
    });


    $('.inputField').text('')



});


function operatorPressed(name) {
    var curr = $('.inputField').text()
    if (lastOperator === '') {
        myNum = parseFloat(curr)
    } else {
        switch (lastOperator) {
            case '+':
                myNum += parseFloat(curr)
                break;
            case '-':
                myNum -= parseFloat(curr)
                break;
            case '*':
                myNum *= parseFloat(curr)
                break;
            case '/':
                myNum /= parseFloat(curr)
                break;

            default:
                break;
        }
        lastOperator = name


    }
    lastOperator = name
    console.log(myNum);


    $('.inputField').text('')

}

