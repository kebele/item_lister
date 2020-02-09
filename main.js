let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);




//ADD ITEM

function addItem(e){
    e.preventDefault();
    //console.log(1);   
//get input value
    let newItem = document.getElementById('item').value;
//create new li element
    let li = document.createElement('li');
//add class
    li.className = 'list-group-item';
//console.log(li)
//add text node with input value
    li.appendChild(document.createTextNode(newItem));
//create delete button element

    let deleteBtn = document.createElement('button');
//add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//append text node
    deleteBtn.appendChild(document.createTextNode('X'));
//append button to li

    li.appendChild(deleteBtn);
//append li to list
    itemList.appendChild(li);
}

//REMOVE ITEM

function removeItem(e){
    if(e.target.classList.contains('delete')){
        //console.log(1);
        if(confirm('emin misin ?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//FILTER ITEMS
function filterItems(e){
    //conver text to lowercase
    let text = e.target.value.toLowerCase();
    //console.log(text);
    //get list
    let items = itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}