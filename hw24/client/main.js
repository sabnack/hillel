window.onload = function () {
    const form = document.querySelector('.form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const payload = serializeForm(form);

        console.log(payload, 'payload');

        sendAjax({
            method: 'POST',
            //url: 'http://sabnock.synology.me:8080/login',
            url: 'http://192.168.1.50:8080/login',
            success: function (response) {
                window.location.href=`goods.html?userId=${response}`;
            },
            error: function (status, message) {                
                if (status == 401) {
                    let errorSpan = document.querySelector('#error');
                    errorSpan.classList.remove('hidden');
                }
            },
            body: payload
        })
    });



};