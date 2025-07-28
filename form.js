const scriptURL = 'https://script.google.com/macros/s/AKfycbz4aNzbBD7JVd0PxpslIiMlX3ppi5_yfq1ZFYoP5SQ2IfuXRCkvtXIFk8zjE8AXc9LXoA/exec'

const form = document.forms['registration-form'];

form.addEventListener('submit', function(event){
    event.preventDefault();

    const data = fetch(scriptURL,{
        method : 'POST',
        body : new FormData(form),
        mode : 'cors',
        cache : 'no-cache'
    })

    window.location.reload();
})