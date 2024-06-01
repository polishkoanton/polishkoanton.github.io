var zoomPlusBtn = document.getElementById("zoomplus");
var zoomMinusBtn = document.getElementById("zoomminus");
var currentZoom = 100;
var zoomNumberElem = document.getElementById("zoomnumber");
var mainScrollBlock = document.getElementsByClassName("ofc__content-items")[0];

if (zoomPlusBtn)
{
    zoomPlusBtn.addEventListener("click", zoom, false);
}
if (zoomMinusBtn)
{
    zoomMinusBtn.addEventListener("click", zoom, false);
}

function zoom(e)
{
    if (e.target.closest('#zoomplus') && currentZoom < 200)
    {
        currentZoom += 20;
    } 
    else if (e.target.closest('#zoomminus') && currentZoom > 20)
    {
        currentZoom -= 20;
    } 
    mainScrollBlock.style.zoom = currentZoom + '%';
    zoomNumberElem.innerHTML = currentZoom + '%';
}