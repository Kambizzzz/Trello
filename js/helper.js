//JS dock
/**
 * @returns {HTMLElement}
 * @param {String} tagname 
 * @param {Object} attribute 
 * @param {HTMLElement / Array / String} content 
 * @returns 
 */


function createElement(tagname, attribute, content){
    var el = document.createElement(tagname)

    for (var key in attribute){
        el.setAttribute(key, attribute[key]);
    }

    if (typeof content !== 'undefined') {
        if (content instanceof HTMLElement) {
            el.appendChild(content);
        } else{
            el.innerText = content;
        }
    }

    return el;
}


