const { createApp } = Vue


createApp({






    data() {
        return {

            input: '',
            inputlist: [],
        }
    },

    methods: {
        addItem() {
            if (this.input != '') {
                this.inputlist.push(this.input);
                this.input = ''
            }



        }
    },
}).mount('#app')
















// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addList() {
//     const inputItem = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = inputItem;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';


// }

// buttonEl.addEventListener('click', addList)