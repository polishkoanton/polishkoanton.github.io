const contentForPrint = document.getElementsByClassName("ofc__canvas")[0];
const printBtn = document.getElementById("print");

if (printBtn) 
{
    printBtn.addEventListener("click", print, false);
}

function print()
{
   contentForPrint.print();
}