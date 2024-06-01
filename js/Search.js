// Elements' on page search

function search(inputId, itemsClassName, itemsId, elemId)
{
    // 1. Get input and items we will search through
    const input = document.getElementById(inputId);
    const items = document.getElementsByClassName(itemsClassName);

    // 2. Add eventListener onchange to input
    if (input)
    {
        input.addEventListener("input", searchInput, false);
    }

    function searchInput()
    {
        // 3. Check name of regulation with input
        for (var i = 0; i < items.length; i++)
        {
            if (items[i].id == itemsId)
            {
                // 4. Show item if matches or hide it
                if (items[i].querySelector(`#${elemId}`).innerHTML.toLowerCase().indexOf(input.value.toLowerCase()) != -1)
                {
                    items[i].style.display = 'block';
                }
                else 
                {
                    items[i].style.display = 'none';
                }
            }
        }
    }
}

var regulationForApprovalSearch = search('regulations-search', 'reglaments__content-item', 'regulationforapproval', 'regulation-title');
var regulationLearnedSearch = search('regulations-search', 'reglaments__content-item', 'regulationlearned', 'regulation-title');
var reportEmployeesSearch = search('reports-search', 'report__table-item', 'reportemployee', 'report-name');
var employeeSearch = search('employees-search', 'employees__content-item', 'employee', 'employees-name');