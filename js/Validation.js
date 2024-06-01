const formRegistration = document.getElementById("form-registration");
const formLogin = document.getElementById("form-login");
const formRecover = document.getElementById("form-recover");
const formNewPassword = document.getElementById("form-newpassword");
const recoverBtn = document.getElementById("recover-password");
const changePasswordBtn = document.getElementById("change-password");
const inputErrors = {
    incorrectEmail: 'Incorrect email!',
    simplePassword: 'Too simple password!',
    emptyEmail: 'Input email, please.',
    emptyPassword: 'Input password, please.',
    differentPasswords: 'Different passwords!',
    shortPassword: 'Too short password'
};

// Event listeners
if (loginBtn)
{
    loginBtn.addEventListener("click", validateLoginPage, false);
}
if (registrationBtn)
{
    registrationBtn.addEventListener("click", validateRegistrationPage, false);
}
if (recoverBtn)
{
    recoverBtn.addEventListener("click", validateRecoverPage, false);
}
if (changePasswordBtn)
{
    changePasswordBtn.addEventListener("click", validateNewPasswordPage, false);
}

window.addEventListener("load", clearInputErrors, false);

function validateNewPasswordPage(e)
{
     // Cancel submit
     e.preventDefault();

    const inputPasswordElem1 = document.getElementById("input-password-1");
    const inputPasswordElem2 = document.getElementById("input-password-2");
    var validatedPassword1 = false;
    var validatedPassword2 = false;

    // Validation
    validatedPassword1 = validatePassword(inputPasswordElem1);
    validatedPassword2 = validatePassword(inputPasswordElem2);

    if (validatedPassword1 == true && validatedPassword2 == true)
    {
        if (inputPasswordElem1.value === inputPasswordElem2.value)
        {
            if (formNewPassword)
            {
                // Set action
                formNewPassword.action = 'php/newpassword.php';
                // Submit
                formNewPassword.submit();
            }
        } 
        else 
        {
            inputPasswordElem1.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = inputErrors['differentPasswords'];
            inputPasswordElem2.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = inputErrors['differentPasswords'];
        }
    }
    else 
    {
        if (validatedPassword1 != true)
        {
            inputPasswordElem1.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = validatedPassword1;
        }
        else {
            inputPasswordElem1.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = '';
        }
        if (validatedPassword2 != true)
        {
            inputPasswordElem2.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = validatedPassword2;
        }
        else {
            inputPasswordElem2.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = '';
        }
    }
}

function validateRecoverPage(e)
{
    // Cancel submit
    e.preventDefault();

    const inputLoginElem = document.getElementById("input-login");
    var validatedLogin = false;

    // Validate input login
    validatedLogin = validateLogin(inputLoginElem);

    // Submit
    if (validatedLogin == true)
    {
        if (formRecover)
        {
            formRecover.action = 'php/send.php';
            formRecover.submit();
        }
    }
    else {
        inputLoginElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = validatedLogin;
    }
}

function validateLoginPage(e)
{
    // Cancel submit
    e.preventDefault();

    const inputLoginElem = document.getElementById("input-login");
    const inputPasswordElem = document.getElementById("input-password");

    // Validate input login
    if (inputLoginElem.value.trim() == '')
    {
        inputLoginElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = inputErrors['emptyEmail'];
    }
    else {
        inputLoginElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = '';
    }
    // Validate input password
    if (inputPasswordElem.value.trim() == '')
    {
        inputPasswordElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = inputErrors['emptyPassword'];
    }
    else {
        inputPasswordElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = '';
    }
    // Submit
    if (inputLoginElem.value.trim() != '' && inputPasswordElem.value.trim() != '')
    {
        if (formLogin)
        {
            formLogin.action = 'php/login.php';
            formLogin.submit();
        }
    }
}

function validateRegistrationPage(e)
{
    // Cancel submit
    e.preventDefault();

    const inputLoginElem = document.getElementById("input-login");
    const inputPasswordElem = document.getElementById("input-password");
    var validatedLogin = false;
    var validatedPassword = false;

    // Validation
    validatedLogin = validateLogin(inputLoginElem);
    validatedPassword = validatePassword(inputPasswordElem);

    // Result
    if (validatedLogin == true && validatedPassword == true)
    {
        if (formRegistration)
        {
            formRegistration.action = 'php/registration.php';
            formRegistration.submit();
        }
    }
    else 
    {
        if (validatedLogin != true)
        {
            inputLoginElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = validatedLogin;
        }
        if (validatedPassword != true)
        {
            inputPasswordElem.closest('.form__input-wrapper').querySelector('.input-error').innerHTML = validatedPassword;
        }
    }
}

function validateLogin(inputElem)
{
    const inputValue = String(inputElem.value);

    if (validateEmpty())
    {
        if (validateEmail()) 
        {
            if (validateDot())
            {
                if (validateUnderscore())
                {
                    if (validateSpecialSymbols())
                    {
                        if (validateNumbers())
                        {
                            if (validateSymbols())
                            {
                                return true;
                            }
                            else {
                                return inputErrors['incorrectEmail'];
                            }
                        }
                        else {
                            return inputErrors['incorrectEmail'];
                        }
                    }
                    else {
                        return inputErrors['incorrectEmail'];
                    }
                }
                else {
                    return inputErrors['incorrectEmail'];
                }
            }
            else {
                return inputErrors['incorrectEmail'];
            }
        }
        else {
            return inputErrors['incorrectEmail'];
        }
    }
    else {
        return inputErrors['emptyEmail'];
    }

    function validateEmail()
    {
        // 1. Check @
        var counterEmails = 0;
        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] === '@') counterEmails++;
        }
        if (counterEmails == 0 || counterEmails > 1) return false;

        // 2. Check start with @ and end with @
        if (inputValue[0] === '@' || inputValue[inputValue.length - 1] === '@') return false;

        return true;
    }

    function validateDot()
    {
        var pos1, pos2;
        var counterDots = 0;
        pos1 = undefined;
        pos2 = undefined;

        // Count dot => save position
        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] === '.')
            {
                counterDots++;

                if (!pos1) 
                {
                    pos1 = i;
                    continue;
                }
                
                if (!pos2)
                {
                    pos2 = i;
                    continue;
                } 
            }
        }

        // 1. Check .
        if (counterDots == 0 || counterDots > 2) return false;

        // 2. Check start with . and end with .
        if (inputValue[0] === '.' || inputValue[inputValue.length - 1] === '.') return false;

        // 3. Check two .
        if (pos1 && pos2)
        {
            if (pos1+1 == pos2 || pos1-1 == pos2) return false;
        }

        // 4. Check before @ and after @
        if (inputValue[pos1-1] === '@' || inputValue[pos1+1] === '@') return false;
        if (pos1 && pos2)
        {
            if (inputValue[pos2-1] === '@' || inputValue[pos2+1] === '@') return false;
        }

        return true;
    }

    function validateUnderscore()
    {
        var counterUnderscores, pos;
        pos = undefined;

        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] === '_')
            {
                counterUnderscores++;

                if (!pos) pos = i;
            }
        }

        // 1. Check number of underscores
        if (counterUnderscores > 1) return false;

        // 2. Check start with _ and end with _
        if (inputValue[0] === '_' || inputValue[inputValue.length - 1] === '_') return false;

        // 3. Check before @ and after @
        if (inputValue[pos-1] === '@' || inputValue[pos+1] === '@') return false;

        return true;
    }

    function validateSpecialSymbols()
    {
        const symbols = ['~', '`', '!', '#', '$', '%', '^', '&', '*', 
                        '(', ')', '-', '+', '/', "'\'", '|'];

        // Check character input in symbols
        for (var i = 0; i < inputValue.length; i++)
        {
            if (symbols.indexOf(inputValue[i]) != -1) return false;
        }
        
        return true;
    }

    function validateNumbers()
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] === '@')
            {
                for (var j = i+1; j < inputValue.length; j++)
                {
                    if (!isNaN(Number(inputValue[i]))) return false;
                }
            }
        }

        return true;
    }

    function validateSymbols()
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (inputValue[i] === '@')
            {
                var counterChar = 0;
                for (var j = 0; j < i; j++)
                {
                    counterChar++;
                }
                if (counterChar < 3) return false;
            }
        }
        return true;
    }

    function validateEmpty()
    {
        if (inputValue.trim() == '') return false;
        return true;
    }
}

function validatePassword(inputElem)
{
    const inputValue = String(inputElem.value);

    if (validateEmpty())
    {
        if (validateSameNumbers())
        {
            if (validateSameSymbols())
            {
                if (validateNumbersSubsequences())
                {
                    if (validateLowerUpperLetters())
                    {
                        if (validateLength())
                        {
                            return true;
                        }
                        else {
                            return inputErrors['shortPassword'];
                        }
                    }
                    else {
                        return inputErrors['simplePassword'];
                    }
                }
                else {
                    return inputErrors['simplePassword'];
                }
            }
            else {
                return inputErrors['simplePassword'];
            }
        }
        else {
            return inputErrors['simplePassword'];
        }
    }
    else {
        return inputErrors['emptyPassword'];
    }

    function validateSameNumbers()
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (!isNaN(Number(inputValue[i])))
            {
                if (Number(inputValue[i]) === Number(inputValue[i+1]) && Number(inputValue[i]) === Number(inputValue[i+2])) return false;
            }
        }
        return true;
    }

    function validateSameSymbols()
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (isNaN(Number(inputValue[i])))
            {
                if (inputValue[i] === inputValue[i+1] && inputValue[i] === inputValue[i+2]) return false;
            }
        }
        return true;
    }

    function validateNumbersSubsequences()
    {
        for (var i = 0; i < inputValue.length; i++)
        {
            if (!isNaN(Number(inputValue[i])))
            {
                if (Number(inputValue[i])+1 === Number(inputValue[i+1]) && Number(inputValue[i])+2 === Number(inputValue[i+2])) return false;
            }
        }
        return true;
    }

    function validateLowerUpperLetters()
    {
        var letters = [];

        // Add letters to array
        for (var i = 0; i < inputValue.length; i++)
        {
            if (isNaN(Number(inputValue[i])))
            {
                letters.push(inputValue[i]);
            }
        }

        // Check min one upperCase and one lowerCase
        var counterUpperCase = 0;
        var counterLowerCase = 0;
        for (var i = 0; i < letters.length; i++)
        {
            if (letters[i].toLowerCase() == letters[i])
            {
                counterUpperCase++;
            } 
            else 
            {
                counterLowerCase++;
            }
        }
        if (counterUpperCase < 1 && counterLowerCase < 1) return false;

        return true;
    }

    function validateLength()
    {
        if (inputValue.length < 4) return false;
        return true;
    }

    function validateEmpty()
    {
        if (inputValue.trim() == '') return false;
        return true;
    }
}

function clearInputErrors()
{
    const inputErrorElements = document.getElementsByClassName('input-error');

    for (var i = 0; i < inputErrorElements.length; i++)
    {
        inputErrorElements[i].innerHTML = '';
    }
}