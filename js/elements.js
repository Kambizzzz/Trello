// column


function createListColumn(title) {
    var column = createElement('column', {
        class: 'column'
    })
    column.appendChild(createList(title))
    return column

}

//primary

function createList(title) {
    var list = createElement('list', {
        class: 'list'
    })
    list.appendChild(createListHeader(title))
    list.appendChild(createCardList())
    list.appendChild(createAddCardButton())

    return list;
    
    



}
function createListHeader(title) {
    return createElement('list-header',{
        class: 'list-header-target'}, title);

    



    // var titleElement = document.createElement('list-header');
    // titleElement.classList.add('list-header-target');
    // titleElement.innerText = title;




}

console.log(createListColumn('todo'));

function createCardList() {
    var cardList = createElement('card'
    ,{
    class: 'list-cards'})
    cardList.appendChild(createCardUl())

    return cardList

}

// console.log(createCardList())

function createCardUl() {
    var unorderedListElement = createElement('ul',
    {id: 'ul'})
    // unorderedListElement.classList.add('ul')
    return unorderedListElement
    

}

console.log(createCardUl());



//---------------------------------li maker

function createCardLi(text) {
    return createElement('li',null,text);

}


//---------------------------------

function createAddCardButton() {
    var addCard = createElement('add-card',{
        class: 'add-card'
    })
    var addbtn = createElement('button',
    { 
        class: 'show'
    })
    var i = createElement('i', {
        class: 'icon-plus'
    }, 'Add card')
    var input = createElement("input", {
        class: "hide",
        type: 'text',
        placeholder: 'Card name...'
    })

    addCard.appendChild(addbtn);
    addbtn.appendChild(i)
    addCard.appendChild(input)


    addbtn.addEventListener('click' , function(){
        addbtn.classList.remove('show')
        addbtn.classList.add('hide')

        input.classList.remove('hide')
        input.classList.add('show')
        input.focus()


    });


    input.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            var newcard = createCardLi(input.value);
            // console.log(newcard);

            var ul = input.parentElement.parentElement.querySelector("ul").closest("#ul");
            // ul = document.querySelector('ul');
            // console.log(childrenCount);

            
            
            console.log(ul);
            ul.appendChild(newcard);
    


            input.classList.remove('show');
            input.classList.add('hide');
            input.value = ''

            addbtn.classList.remove('hide');
            addbtn.classList.add('show');

        }

    })


    return addCard


}
// console.log(createAddCardButton())
//caed








//Add list
function createAddListCTA() {
    var containerElement = document.createElement('div');
    containerElement.setAttribute('id', 'add-list');

    var ctaButtonElement = document.createElement('button');
    ctaButtonElement.setAttribute('class','add-list-btn show');
    ctaButtonElement.innerText = 'Add a list...';

    var inputElement = document.createElement('input');
    inputElement.setAttribute('class','add-list-input hide');
    inputElement.setAttribute('placeholder', 'Enter list title...');
    inputElement.setAttribute('type', 'text');

    containerElement.appendChild(ctaButtonElement);
    containerElement.appendChild(inputElement);


    ctaButtonElement.addEventListener('click' , function(){
        ctaButtonElement.classList.remove('show')
        ctaButtonElement.classList.add('hide')

        inputElement.classList.remove('hide')
        inputElement.classList.add('show')
        inputElement.focus()


    });


    inputElement.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            var newlist = createListColumn(inputElement.value);
            var insertionPosition = document.getElementById('add-list');
            insertionPosition.before(newlist);


            inputElement.classList.remove('show');
            inputElement.classList.add('hide');
            inputElement.value = ''

            ctaButtonElement.classList.remove('hide');
            ctaButtonElement.classList.add('show');

        }

    })


    return containerElement;




}
console.log(createAddListCTA());