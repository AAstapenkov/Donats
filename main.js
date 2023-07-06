const amountEl = document.querySelector("[name='amount']");
const errorAmountEl = document.querySelector("[name='amount'] + .error");
const formContainerEl = document.querySelector('.form-container');

const usernameEl = document.querySelector("[name='username']");
const errorUsernameEl = document.querySelector("[name='username'] + .error");

const commentEl = document.querySelector("[name='comment']");
const errorCommentEl = document.querySelector("[name='comment'] + .error"); 

formContainerEl.addEventListener("submit", (event) => {
    let submitForm = true;
    
    if (!amountEl.validity.valid) {
        showAmountError();
        amountEl.classList.add('error');
        submitForm = false;
    } else {
        amountEl.classList.remove('error');
    }

    if (!usernameEl.validity.valid) {
        showUsernameError();
        usernameEl.classList.add('error');
        submitForm = false;
    } else {
        usernameEl.classList.remove('error');
    }

    if (!commentEl.validity.valid) {
        showCommentError();
        commentEl.classList.add('error');
        submitForm = false;
    } else {
        commentEl.classList.remove('error');
    }

    if (!submitForm) {
        event.preventDefault();
    } else {
        alert('форма успішно відправлена!')
    }
});

amountEl.addEventListener("input", (event) => {
    if (amountEl.validity.valid) {
        errorAmountEl.textContent = "";
    } else {
      showAmountError();
    }
});

usernameEl.addEventListener("input", (event) => {
    if (usernameEl.validity.valid) {
        errorUsernameEl.textContent = "";
    } else {
        showUsernameError();
    }
});


commentEl.addEventListener("input", (event) => {
    if (commentEl.validity.valid) {
        errorCommentEl.textContent = "";
    } else {
      showCommentError();
    }
});

function showAmountError() {
    if (parseInt(amountEl.value, 10) < 5) 
    {
        errorAmountEl.textContent = 'Сумма повинна бути не менше 5 грн. '   
    }
}

function showUsernameError() {
    if (usernameEl.validity.valueMissing) {
        errorUsernameEl.textContent = "Введіть будь-ласка ваше ім`я";
    } 
}

function showCommentError() {
    if (commentEl.validity.valueMissing) {
        errorCommentEl.textContent = "Коментар не може бути пустим.";
    }
    else if (commentEl.validity.tooShort) {
        errorCommentEl.textContent = "Коментар не може бути меншим 5 символів.";
    }
}

// =======

const counters = document.querySelectorAll('[data-counter]');

if (counters) {
    counters.forEach(counter => {
        counter.addEventListener('click', e => {
            const target = e.target;

            if (target.closest('.counter_button')) {
                let value = parseInt(target.closest('.counter').querySelector('input').value);

                if (target.classList.contains('counter_button_plus')) {
                    value += 5;
                } else {
                    value -= 5;
                }

                if (value <= 10) {
                    value = 10;
                }

                target.closest('.counter').querySelector('input').value = value + '₴';
            }
        })
    })
}

document.querySelectorAll(".tabs-item").forEach(function(currentBtn) {
    currentBtn.addEventListener('click', function () {
        document.querySelector('input[name=amount]').value = event.target.getAttribute('value');
    });
});


/*function validation(form) {
    let result = true;

    return result
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()
    if (validation(this) == true) {
        alert('Форма проверена успешно')
    }
}) */