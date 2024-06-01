var ofcElements = document.getElementsByClassName("ofc__content-item");
var numOfcElements = 0;

window.addEventListener("load", function() {
    const pageHeight = document.documentElement.clientHeight;
    const pageWidth = document.documentElement.clientWidth;

    var scrollElem = document.getElementsByClassName("ofc__canvas")[0];
    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 172) + 'px';
        scrollElem.style.width = (pageWidth - 350) + 'px';
    }

    scrollElem = document.getElementsByClassName("reglaments__content")[0];
    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 258) + 'px';
    }

    scrollElem = document.getElementsByClassName("report__table-body")[0];
    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 302) + 'px';
    }

    var scrollCols = document.getElementsByClassName("communications__content-col");

    for (var i = 0; i < scrollCols.length; i++)
    {
        scrollElem = scrollCols[i];

        if (scrollElem)
        {
            scrollElem.style.height = (pageHeight - 186) + 'px';
        }
    }

    scrollElem = document.getElementsByClassName("employees__content")[0];
    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 220) + 'px';
    }

    scrollElem = document.getElementsByClassName("pay__content")[0];

    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 205) + 'px';
    }

    scrollElem = document.getElementsByClassName("settings__content")[0];
    if (scrollElem)
    {
        scrollElem.style.height = (pageHeight - 190) + 'px';
    }
}, false);

for (var i = 0; i < ofcElements.length; i++)
{
    numOfcElements++;
}

// if (mainScrollBlock) 
// {
//     mainScrollBlock.style.width = numOfcElements/3 * 320 + 'px';
// }
