// import $ from "jquery";

// $('.user').html('User is working');

let popupBg = document.querySelector('.popup_bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open_popup');
let closePopupButton = document.querySelector('.close_popup')
function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click', () => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
})

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const form_popup = document.getElementById('form_popup');

    form.addEventListener('submit', formSend);
    form_popup.addEventListener('submit', formSend);
    console.log('DOMContentLoaded')//чекаем что это выполняется после загрузки дома

    async function formSend(e) {
        e.preventDefault();
        console.log('formSend') // чекаем что это функция запускается когда срабатывает addEventListener('submit'
        let currentForm;

        if(document.getElementById('form_popup').classList.contains('active')){
            console.log('form_popup')//чекаем что выбрана нужная форма
            currentForm = form_popup;
        }else {
            console.log('form')
            currentForm = form;
        }
        let error = formValidate(currentForm);

        let formData = new FormData(currentForm);
        // formData.append('image', formimage.files[0])

        if (error === 0) {
            let response = await fetch('https://krovsar.ru/send_test.php', {
                method: 'POST',
                body: formData
            });
            if (response) {
                let result = await response.text(); //https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch вот тут описание что ещё есть кроме text() и json()
                // alert(result.message)

                if(result === 'ok'){
                    form.reset()
                }else{
                    console.log('ошибка', result)
                }



            } else {
                alert('Ошибка')
            }
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        console.log(form) //чекаем какая форма приходит
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
    }
});