const mainForm = document.forms.mainForm;

const target = document.getElementById('target');

mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = mainForm.name.value;
    const surnameValue = mainForm.surname.value;
    const ageValue = mainForm.age.value;
    let obj = {nameValue, surnameValue, ageValue};
    console.log(obj);
    // target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
    target.innerHTML = `Name: ${nameValue}<br>Surname: ${surnameValue}<br>Age: ${ageValue}`;
});





