const inputs = document.getElementsByTagName("input");
const inputsText = document.getElementsByClassName("form__content-text");
const inputLoginEmail = document.getElementById("input-login");
const inputLoginPassword = document.getElementById("input-password");
const showPasswordBtn = document.getElementById("showpassword");
const loginBtn = document.getElementById("login");
const registrationBtn = document.getElementById("registration");
const showInputText = document.getElementsByClassName("settings__bottom-info");

var inputValue = "";
var isShowedPassword = false;

// Add event listeners
for (var i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener("click", focusInput, false);
}

for (var i = 0; i < showInputText.length; i++)
{
    showInputText[i].addEventListener("click", showInput, false);
}

// window.addEventListener("click", unfocusInput, false);
window.addEventListener("click", hideInput, false);

if (showPasswordBtn)
{
    showPasswordBtn.addEventListener("click", togglePassword, false);
}

function focusInput(e)
{
    // Find input wrapper
    if (e.target.closest('.form__input-wrapper'))
    {
        // Remove styles from other inputs
        for (var i = 0; i < inputs.length; i++)
        {
            inputs[i].style.border = '1px solid #A9ABBA';
            inputsText[i].style.color = "#A9ABBA";
        }
    
        // Add styles to active input
        e.target.closest(".form__content-wrapper").querySelector(".form__content-text").style.color = '#4F8BE4';
        e.target.style.border = '1px solid #4F8BE4';
        inputValue = e.target.value;
    }
    else if (e.target.closest('#notchosen'))
    {
        // Show input
        e.target.closest('#notchosen').style.display = 'none';
        e.target.closest(".settings__bottom").querySelector('#notchosen').style.display = 'block';
    }
}

// function unfocusInput(e)
// {
//     if (!e.target.closest(".form__input-wrapper") && e.target.id != 'login' && e.target.id != 'recoverpassword' && e.target.id != 'registration' && e.target.id != 'search' && e.target.closest("."))
//     {
//         for (var i = 0; i < inputs.length; i++)
//         {
//             inputs[i].style.border = '1px solid #A9ABBA';
//             inputsText[i].style.color = "#A9ABBA";
//         }
//     }
// }

function togglePassword(e)
{
    var input = e.target.closest(".form__input-wrapper").querySelector("input");

    // Toggle input type
    if (input.type == 'text') 
    {
        input.type = 'password';
        isShowedPassword = false;
    }
    else {
        input.type = 'text';
        isShowedPassword = true;
    }
}

function showInput(e)
{
    this.style.display = 'none';
    e.target.closest(".settings__bottom").querySelector('.settings__bottom-input').style.display = 'block';
}

function hideInput(e)
{
    // Check click on input
    if (!e.target.closest('.settings__bottom-input') && !e.target.closest('#notchosen'))
    {
        // Get inputs and texts
        var inputsNumber = document.getElementsByClassName('settings__bottom-input');
        var inputsText = document.querySelectorAll(".settings__bottom-info");

        // Show text and hide input
        for (var i = 0; i < inputsNumber.length; i++)
        {
            if (inputsNumber[i].value == '')
            {
                inputsText[i].style.display = 'block';
                inputsNumber[i].style.display = 'none';
            }
        }
    }
}