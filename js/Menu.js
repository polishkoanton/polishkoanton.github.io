const menuItems = document.getElementsByClassName("main__menu-link");

window.addEventListener("load", focusMenuItem, false);

function focusMenuItem()
{
    // Remove all active menu items
    for (var i = 0; i < menuItems.length; i++)
    {
        if (menuItems[i].className.indexOf("active-link") != -1) 
        {
            menuItems[i].classList.remove("active-link");
            menuItems[i].closest(".active-fontawesome").classList.remove("active-fontawesome");
            menuItems[i].closest('.main__menu-item').querySelector(".main__menu-line").remove();
        }
    }

    // Add class to current active menu item
    if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/front-page.html')
    {
        addClasses(0);

        if (localStorage.getItem('isLearnedQuestion1') === 'false')
        {
            document.getElementById('question-1').style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/ofc-page.html')
    {
        addClasses(1);

        if (localStorage.getItem('isLearnedQuestion2') === 'false')
        {
            document.getElementById(`question-${2}`).style.display = 'flex';
        }
        if (localStorage.getItem('isLearnedQuestion8') === 'false')
        {
            document.getElementById(`question-${8}`).style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/regulations-page.html')
    {
        addClasses(2);

        if (localStorage.getItem('isLearnedQuestion3') === 'false')
        {
            document.getElementById(`question-${3}`).style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/responsibilities-page.html')
    {
        addClasses(3);

        if (localStorage.getItem('isLearnedQuestion4') === 'false')
        {
            document.getElementById(`question-${4}`).style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/reports-page.html')
    {
        addClasses(4);

        if (localStorage.getItem('isLearnedQuestion5') === 'false')
        {
            document.getElementById(`question-${5}`).style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/communications-page.html')
    {
        addClasses(5);

        if (localStorage.getItem('isLearnedQuestion6') === 'false')
        {
            document.getElementById(`question-${6}`).style.display = 'flex';
        }
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/employees-page.html')
    {
        addClasses(6);
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/payment-page.html')
    {
        addClasses(7);
    }
    else if (String(window.location.href) == 'file:///C:/Users/polis/Desktop/Lb7/settings-page.html')
    {
        addClasses(8);
    }
}

function addClasses(n)
{
    var menuLine = document.createElement("div");
    menuLine.className = "main__menu-line";

    menuItems[n].classList.add("active-link");
    menuItems[n].closest('.main__menu-item').querySelector(".main__menu-img").classList.add("active-fontawesome");
    menuItems[n].closest('.main__menu-item').append(menuLine);
}