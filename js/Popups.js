// var currentElem;
// var menuLine = document.getElementById("menuline");

const popupBtns = document.getElementsByClassName("popup__btn");
const recoverPasswordBtn = document.getElementById("recoverpassword");
const questionBigElements = document.getElementsByClassName("question-big");
const questionSmallElements = document.getElementsByClassName("question-small");
const questionMiddleElements = document.getElementsByClassName("question-middle");
const closePopupBtn = document.getElementsByClassName("popup-menu__close");
const openPopupBtns = document.getElementsByClassName("ofc__content-dots");
const addTaskBtn = document.getElementById("add-task");
const cancelPopupMenu2 = document.getElementById("cancel-popup-menu-2");
var currentPopupNumber = 0;
var pageReloadedCounter = localStorage.getItem('pageReloadedCounter');
var prevPageHref = String(localStorage.getItem('prevPageHref'));

// Count how many times page reload
window.addEventListener("load", function() {
     if (localStorage.getItem('pageReloadedCounter') == null)
     {
         localStorage.setItem('pageReloadedCounter', 0);
     } 
     else 
     {
         localStorage.setItem('pageReloadedCounter', Number(localStorage.getItem('pageReloadedCounter')) + 1);
         pageReloadedCounter = localStorage.getItem('pageReloadedCounter');
     }
}, false);

if (recoverPasswordBtn)
{
    recoverPasswordBtn.addEventListener("click", showSuccessPopup, false);
}

// Add event listeners
for (var i = 0; i < popupBtns.length; i++)
{
    popupBtns[i].addEventListener("click", hidePopup, false);
}

// Add event listeners
for (var i = 0; i < questionBigElements.length; i++)
{
    questionBigElements[i].addEventListener("click", showPopup, false);
}

for (var i = 0; i < questionSmallElements.length; i++)
{
    questionSmallElements[i].addEventListener("click", showPopup, false);
}

if (questionMiddleElements) 
{
    for (var i = 0; i < questionMiddleElements.length; i++)
    {
        questionMiddleElements[i].addEventListener("click", showPopup, false);
    }
}

if (closePopupBtn)
{
    for (var i = 0; i < closePopupBtn.length; i++)
    {
        closePopupBtn[i].addEventListener("click", closePopupMenu, false);
    }
}

if (openPopupBtns)
{
    for (var i = 0; i < openPopupBtns.length; i++)
    {
        openPopupBtns[i].addEventListener("click", showPopupMenu, false);
    }
}

if (addTaskBtn)
{
    addTaskBtn.addEventListener("click", showPopupMenuAddTask, false);
}

if (cancelPopupMenu2)
{
    cancelPopupMenu2.addEventListener("click", closePopupMenu, false);
    cancelPopupMenu2.addEventListener("click", clearForm, false);
}

// Check if we reload page or previous page was login
if (Number(pageReloadedCounter) == 0 || prevPageHref == 'http://qwick/index.php' || prevPageHref == 'http://qwick/') 
{
    localStorage.setItem('isLearnedQuestion1', false);
    localStorage.setItem('isLearnedQuestion2', false);
    localStorage.setItem('isLearnedQuestion3', false);
    localStorage.setItem('isLearnedQuestion4', false);
    localStorage.setItem('isLearnedQuestion5', false);
    localStorage.setItem('isLearnedQuestion6', false);
    localStorage.setItem('isLearnedQuestion7', false);
    localStorage.setItem('isLearnedQuestion8', false);
    localStorage.setItem('isLearnedQuestion9', false);
    localStorage.setItem('isLearnedQuestion10', false);
    localStorage.setItem('isLearnedQuestion11', false);
    localStorage.setItem('isLearnedQuestion12', false);
    localStorage.setItem('isLearnedQuestion13', false);
    localStorage.setItem('isLearnedQuestion14', false);
    localStorage.setItem('isLearnedQuestion15', false);
    localStorage.setItem('isLearnedQuestion16', false);
    localStorage.setItem('isLearnedQuestion17', false);
    localStorage.setItem('isLearnedQuestion18', false);
}

// Save link of current page in localStorage
localStorage.setItem('prevPageHref', window.location.href);

function showPopup(e)
{
    const questionBigElem = e.target.closest('.question-big');
    const questionSmallElem = e.target.closest('.question-small');
    const questionMiddleElem = e.target.closest('.question-middle');

    if (questionBigElem)
    {
        currentPopupNumber = questionBigElem.id.slice(questionBigElem.id.indexOf('-')+1, questionBigElem.id.length);
        document.getElementById(`popup-${currentPopupNumber}`).style.display = 'block';
    }
    else if (questionSmallElem)
    {
        currentPopupNumber = questionSmallElem.id.slice(questionSmallElem.id.indexOf('-')+1, questionSmallElem.id.length);
        document.getElementById(`popup-${currentPopupNumber}`).style.display = 'block';
    }
    else if (questionMiddleElem)
    {
        currentPopupNumber = questionMiddleElem.id.slice(questionMiddleElem.id.indexOf('-')+1, questionMiddleElem.id.length);
        document.getElementById(`popup-${currentPopupNumber}`).style.display = 'block';
    }
}

function hidePopup()
{
    if (currentPopupNumber == 1)
    {
        localStorage.setItem('isLearnedQuestion1', true);
    }
    else if (currentPopupNumber == 2)
    {
        localStorage.setItem('isLearnedQuestion2', true);
    }
    else if (currentPopupNumber == 3)
    {
        localStorage.setItem('isLearnedQuestion3', true);
    }
    else if (currentPopupNumber == 4)
    {
        localStorage.setItem('isLearnedQuestion4', true);
    }
    else if (currentPopupNumber == 5)
    {
        localStorage.setItem('isLearnedQuestion5', true);
    }
    else if (currentPopupNumber == 6)
    {
        localStorage.setItem('isLearnedQuestion6', true);
    }
    else if (currentPopupNumber == 7)
    {
        localStorage.setItem('isLearnedQuestion7', true);
    }
    else if (currentPopupNumber == 8)
    {
        localStorage.setItem('isLearnedQuestion8', true);
    }
    else if (currentPopupNumber == 9)
    {
        localStorage.setItem('isLearnedQuestion9', true);
    }
    else if (currentPopupNumber == 10)
    {
        localStorage.setItem('isLearnedQuestion10', true);
    }
    else if (currentPopupNumber == 11)
    {
        localStorage.setItem('isLearnedQuestion11', true);
    }
    else if (currentPopupNumber == 12)
    {
        localStorage.setItem('isLearnedQuestion12', true);
    }
    else if (currentPopupNumber == 13)
    {
        localStorage.setItem('isLearnedQuestion13', true);
    }
    else if (currentPopupNumber == 14)
    {
        localStorage.setItem('isLearnedQuestion14', true);
    }
    else if (currentPopupNumber == 15)
    {
        localStorage.setItem('isLearnedQuestion15', true);
    }
    else if (currentPopupNumber == 16)
    {
        localStorage.setItem('isLearnedQuestion16', true);
    }
    else if (currentPopupNumber == 17)
    {
        localStorage.setItem('isLearnedQuestion17', true);
    }
    else if (currentPopupNumber == 18)
    {
        localStorage.setItem('isLearnedQuestion18', true);
    }

    document.getElementById(`popup-${currentPopupNumber}`).style.display = 'none';
    document.getElementById(`question-${currentPopupNumber}`).style.display = 'none';
}

function showSuccessPopup()
{
    var popup = document.getElementById("recoverpasswordpopup");
    popup.style.display = 'block';
}

function closePopupMenu(e)
{
    var currentPopupMenuNum = e.target.closest('.popup-menu').id.slice(e.target.closest('.popup-menu').id.length-1, e.target.closest('.popup-menu').id.length);
    document.getElementById(`popup-menu-${currentPopupMenuNum}`).querySelector('.popup-menu__wrapper').classList.remove('show-popup-menu');
    document.getElementById(`popup-menu-${currentPopupMenuNum}`).querySelector('.popup-menu__wrapper').classList.add('hide-popup-menu');
    setTimeout(function() {
        document.getElementById(e.target.closest('.popup-menu').id).style.display = 'none';
    }, 300);
}

function showPopupMenu(e)
{
    var currentPopupMenuNum = Number(e.target.closest('.dots').id.slice(e.target.closest('.dots').id.indexOf('-')+1, e.target.closest('.dots').id.length));
    document.getElementById(`popup-menu-${currentPopupMenuNum}`).style.display = 'block';
    document.getElementById(`popup-menu-${currentPopupMenuNum}`).querySelector('.popup-menu__wrapper').classList.remove('hide-popup-menu');
    document.getElementById(`popup-menu-${currentPopupMenuNum}`).querySelector('.popup-menu__wrapper').classList.add('show-popup-menu');
}

function showPopupMenuAddTask()
{
    document.getElementById('popup-menu-2').querySelector('.popup-menu__wrapper').classList.remove('hide-popup-menu');
    document.getElementById('popup-menu-2').querySelector('.popup-menu__wrapper').classList.add('show-popup-menu');
    document.getElementById('popup-menu-2').style.display = 'block';

    if (localStorage.getItem('isLearnedQuestion11') === 'false')
    {
        document.getElementById('question-12').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion12') === 'false')
    {
        document.getElementById('question-13').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion13') === 'false')
    {
        document.getElementById('question-14').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion14') === 'false')
    {
        document.getElementById('question-15').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion15') === 'false')
    {
        document.getElementById('question-16').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion16') === 'false')
    {
        document.getElementById('question-16').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion17') === 'false')
    {
        document.getElementById('question-17').style.display = 'flex';
    }
    if (localStorage.getItem('isLearnedQuestion18') === 'false')
    {
        document.getElementById('question-18').style.display = 'flex';
    }
}

function clearForm(e)
{
    if (e.target.closest('.popup-menu'))
    {
        // Get all input elements
        const inputs = e.target.closest('.popup-menu').querySelectorAll("input[type='text']");
        const textareas = e.target.closest('.popup-menu').getElementsByTagName('textarea');
        const checkboxes = e.target.closest('.popup-menu').querySelectorAll("[type='checkbox']");
        const radios = e.target.closest('.popup-menu').querySelectorAll("[type='radio']");

        // Clear all input elements
        for (var i = 0; i < inputs.length; i++)
        {
            inputs[i].value = "";
        }

        for (var i = 0; i < textareas.length; i++)
        {
            textareas[i].value = "";
        }

        for (var i = 0; i < checkboxes.length; i++)
        {
            checkboxes[i].checked = false;
        }

        for (var i = 0; i < radios.length; i++)
        {
            radios[i].checked = false;
        }
    }
}