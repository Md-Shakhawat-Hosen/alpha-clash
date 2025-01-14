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

function setKeyboardColor(idField) {
  const keyid = getElementId(idField);
  keyid.classList.add("bg-sky-500");
}

function removeKeyboardColor(idField){
    const key = getElementId(idField);
    key.classList.remove('bg-sky-500');
}