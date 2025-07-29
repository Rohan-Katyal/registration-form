document.addEventListener('DOMContentLoaded', function(){
    const scriptURL = "https://script.google.com/macros/s/AKfycbzodtwm9AuH1SZCnjRMEu1ssKE0NMinHzeaTVAGTwrRdGDu8LMIty60wMHCt0lfJbah7Q/exec"

const logo = document.querySelector('.img-logo');

logo.src = 'https://shikshami.in/wp-content/uploads/2025/06/20250618_061724-scaled.jpg';

const form = document.forms['registration-form'];

form.addEventListener('submit', function(event){
    event.preventDefault();

    const data = fetch(scriptURL,{
        method : 'POST',
        body : new FormData(form),
        mode : 'cors',
        cache : 'no-cache'
    });

    window.alert('Form Submitted Succesfully !!');
    window.location.reload();
})
})