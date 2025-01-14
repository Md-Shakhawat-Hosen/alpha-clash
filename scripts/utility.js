function getElementId(fieldId){
    const element = document.getElementById(fieldId);

    return element;
}

function showElementById(idField){
    const element = document.getElementById(idField);

    element.classList.remove('hidden');
}

function hideElementById(idField){
   
    const element = document.getElementById(idField);
 
    element.classList.add('hidden')
}