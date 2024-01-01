//setting data in local storage
localStorage.setItem('firstname','Confidence');
localStorage.setItem('lastname','Irechukwu')

//Retrieve from local storage
const getFirstname = localStorage.getItem('firstname')
const getLastname = localStorage.getItem('lastname')

const info = document.getElementById('info');
info.innerHTML += getFirstname + " " + getLastname


//OBJECT
const people = [
    {
        "id": 1,
        "firstname":"Emmanuel",
        "lastname":"Nkgaba"
    },
    {
        "id": 2,
        "firstname":"John",
        "lastname":"Kebe"
    }
];

//initialize it
let ourPeople = JSON.parse(localStorage.getItem('people')) || [];
ourPeople.push(people)
localStorage.setItem('people',JSON.stringify(ourPeople))