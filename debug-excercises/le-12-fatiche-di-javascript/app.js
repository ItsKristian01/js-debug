const input = document.querySelector('input');
const array = [];  // Null sotituito con []

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return; //aggiunto valore 0

    array.push(input.value); // sosituito add con psuh

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;  //cambiato .text con .innerHTMl
    document.querySelector('ul').append(li);  //push sostituito con append

    let counter = 0; //aggiunto valore 0
    let item    = array[0];
    let max   = 1;  // cambiato const con let
    const elems = [];

    for (let i = 0; i < array.length; i++) { //aggiunto array.length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) { // sostituito i++ con j++
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){   // aggiunto {} costrutto if
                    max  = counter;
                    item = array[i];
                } 
                
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('alert');  // aggiunto queryselectro al posto di getElementsByClassName

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);  // "" sostituito con backtick
});