var boards = document.querySelector('.boards');

boards.appendChild(createAddListCTA())

var movie = document.getElementById('movie');
console.log(movie)
movie.addEventListener('click' , function(){
    var newlist = createListColumn('Movies to watch!');
    var insertionPosition = document.getElementById('add-list');
    insertionPosition.before(newlist);
    
    

});


var book = document.getElementById('book');
console.log(book)
book.addEventListener('click' , function(){
    var newlist = createListColumn('Books to read!');
    var insertionPosition = document.getElementById('add-list');
    insertionPosition.before(newlist);
    
    

});