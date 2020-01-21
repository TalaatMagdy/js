/*
* To complete the app, we need you to:

1- Add a line below the // number 1 comment that adds the current value entered into the search input to the start of the array.
* This can be retrieved using searchInput.value.
2- Add a line below the // number 2 comment that removes the value currently at the end of the array.
* */

const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== '') {
        myHistory.push(searchInput.value);

        // empty the list so that we don't display duplicate entries
        // the display is regenerated every time a search term is entered.
        list.innerHTML = '';

        // loop through the array, and display all the search terms in the list
        for (let i = 0; i < myHistory.length; i++) {
            itemText = myHistory[i];
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }

        // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= 5) {
            // number 2
            myHistory.pop();
        }

        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = '';
        searchInput.focus();
    }
}
