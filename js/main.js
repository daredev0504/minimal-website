const inputkey = document.getElementById('inputkey');
const emailkey = document.getElementById('emailkey');
const subjectkey = document.getElementById('subjectkey');
const message = document.getElementById('message');
const submit = document.getElementById('submit');



const addToLocalStorage = () =>{
    const ikey = inputkey.value;
    const ekey = emailkey.value;
    const skey = subjectkey.value;
    const msg = message.value;

    localStorage.setItem('name',`${ikey}`);
    localStorage.setItem('email',`${ekey}`);
    localStorage.setItem('subject',`${skey}`);
    localStorage.setItem('message',`${msg}`);
    

}

submit.addEventListener('click',addToLocalStorage);
