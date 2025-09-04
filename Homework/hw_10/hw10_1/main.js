let button = document.getElementById('checkButton');

button.onclick = function () {
    let age = document.getElementById('ageInput').value;
    if(age < 18) {
        document.write('You are not old enough to vote');
    } else {
        document.write('You are old enough to vote');
    }
};

