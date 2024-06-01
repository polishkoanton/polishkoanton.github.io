const tabElements = document.getElementsByClassName('tab');
const tabPopupElements = document.getElementsByClassName('popup-tab');
const tabPopupTabElements = document.getElementsByClassName('popup-tab-tab');

// Add event listeners to tabs
for (var i = 0; i < tabElements.length; i++)
{
    tabElements[i].addEventListener("click", changeContent, false);
}

for (var i = 0; i < tabPopupElements.length; i++)
{
    tabPopupElements[i].addEventListener("click", changeContent, false);
}

for (var i = 0; i < tabPopupTabElements.length; i++)
{
    tabPopupTabElements[i].addEventListener("click", changeContent, false);
}

function changeContent(e)
{
    var currentTabNum = Number(e.target.id.slice(e.target.id.length-1, e.target.id.length));
    
    if (e.target.id.indexOf('popup-tab') != -1)
    {
        // Remove previous active tab and content
        hidePrevContent(tabPopupElements, 'active-tab', 'popup-content-');

        // Add class to current active tab and change content
        showCurrentContent('active-tab', 'popup-content-', currentTabNum, e);

        if (currentTabNum == 2 && localStorage.getItem('isLearnedQuestion9') === 'false')
        {
            document.getElementById("question-9").style.display = 'flex';
        }
        else if (currentTabNum == 3 && localStorage.getItem('isLearnedQuestion10') === 'false')
        {
            document.getElementById("question-10").style.display = 'flex';
        }
    }
    else if (e.target.id.indexOf('popup-second-tab') != -1)
    {
        // Remove previous active tab and content
        hidePrevContent(tabPopupTabElements, 'active-tab', 'popup-second-content-');

        // Add class to current active tab and change content
        showCurrentContent('active-tab', 'popup-second-content-', currentTabNum, e);
    }
    else 
    {
        // Remove previous active tab and content
        hidePrevContent(tabElements, 'active-tab', 'content-');

        // Add class to current active tab and change content
        showCurrentContent('active-tab', 'content-', currentTabNum, e);
    }
}

function hidePrevContent(tabElements, className, contentId)
{
    for (var i = 0; i < tabElements.length; i++)
    {
        if (tabElements[i].className.indexOf(className) != -1)
        {
            var prevTabNum = Number(tabElements[i].id.slice(tabElements[i].id.length-1, tabElements[i].id.length));
    
            tabElements[i].classList.remove(className);
            document.getElementById(`${contentId}${i+1}`).style.display = 'none';
            
            if (prevTabNum == 2)
            {
                document.getElementById("question-9").style.display = 'none';
            }
            else if (prevTabNum == 3)
            {
                document.getElementById("question-10").style.display = 'none';
            }
        }
    }
}

function showCurrentContent(className, contentId, currentTabNumber, e)
{
    e.target.classList.add(className);
    document.getElementById(`${contentId}${currentTabNumber}`).style.display = 'block';
}