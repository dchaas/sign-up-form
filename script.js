const pass = document.querySelector('[name="pass"]');
const conf = document.querySelector('[name="confirm"]');
const match = document.querySelector('#nomatch');

function checkPass(e) {
    if (pass.value!==conf.value) {
        pass.classList.add('error');
        conf.classList.add('error');
        pass.classList.remove('good');
        conf.classList.remove('good');
        match.style.visibility = 'visible';

    } else {
        pass.classList.remove('error');
        conf.classList.remove('error');
        pass.classList.add('good');
        conf.classList.add('good');
        match.style.visibility = 'hidden';
    }
    console.log(e);
}


pass.addEventListener('input',checkPass);
conf.addEventListener('input',checkPass);
