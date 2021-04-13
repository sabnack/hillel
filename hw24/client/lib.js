function sendAjax({ method, url, success, error, body = {} }) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            success(xhr.responseText);
        } else {
            error(xhr.status, xhr.responseText);
        }

    };

    xhr.onerror = function () {
        console.log('error');
    };

    xhr.open(method, url);

    method.toLowerCase() === 'post' ? xhr.send(body) : xhr.send();
}



function serialzeModule() {
    const checkAllowElementForm = (item) => {
        return item.tagName.toLowerCase() != 'button' && item.type != 'button';
    }

    function serializeForm(form) {
        const payload = {};

        for (let i = 0; i < form.length; i++) {
            const item = form[i];

            if (checkAllowElementForm(item)) {
                item.id && (payload[item.id] = item.value);
            }
        }

        return JSON.stringify(payload);
    }


    return {
        serializeForm
    }
}


const { serializeForm } = serialzeModule();