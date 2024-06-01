const lineFromCreator = document.getElementById('linefromcreator');
const lineFromGeneralDirector1 = document.getElementById("linefromdirector-1");
const lineFromGeneralDirector2 = document.getElementById("linefromdirector-2");
const linesFromDepartmentDirectors = document.getElementsByClassName("ofc__main-department");
const itemCreator = document.getElementsByClassName('ofc__main-creator')[0];
const itemDirector = document.getElementsByClassName('ofc__item-director')[0];
const itemsDepartmentDirectors = document.getElementsByClassName("ofc__item-department");
var itemCreatorHeight = itemCreator.offsetHeight;
var itemDirectorHeight = itemDirector.offsetHeight;
var itemsDepartmentLength = itemsDepartmentDirectors.length;

lineFromCreator.style.top = itemCreatorHeight + 'px';

lineFromGeneralDirector1.style.top = (itemDirectorHeight + 12) + 'px';
lineFromGeneralDirector1.style.width = itemsDepartmentLength * 258 + 40;
lineFromGeneralDirector2.style.top = itemDirectorHeight + 'px';

for (var i = 0; i < itemsDepartmentDirectors.length; i++)
{
    var heightItem = itemsDepartmentDirectors[i].offsetHeight;
    var currentItemNumber = Number(itemsDepartmentDirectors[i].id.slice(itemsDepartmentDirectors[i].id.indexOf('-')+1, itemsDepartmentDirectors[i].id.length));
    var currentLine = document.getElementById(`linefromdepartment-${currentItemNumber}`);
    var itemsWorkers = document.getElementsByClassName('ofc__item-subordinate');
    var numberOfCurrentWorkers = 0;

    for (var j = 0; j < itemsWorkers.length; j++)
    {
        if (Number(itemsWorkers[j].getAttribute('data-item')) == currentItemNumber) 
        {
            numberOfCurrentWorkers += 1;
        }
    }

    currentLine.style.top = heightItem-1 + 'px';
    currentLine.style.borderLeft = '1px solid #979DBB';
    currentLine.style.left = 8 + 'px';
    currentLine.style.height = (numberOfCurrentWorkers * 142 + 57) + 'px';
}