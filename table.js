let table = document.querySelector("#users-table tbody");


const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
];

function createTable(usersList) {
    for(let i = 0; i < usersList.length; i++) {
        let userEmail = usersList[i].email;
        if (userEmail.endsWith("@academlo.com")){
            let newRow = document.createElement("tr");
            table.appendChild(newRow);
            let userName = document.createElement("td");
            userName.innerText = usersList[i].name;
            let userEmail = document.createElement("td");
            userEmail.innerText = usersList[i].email;
            let userAge = document.createElement("td");
            userAge.innerText = usersList[i].age;
            let userGender = document.createElement("td");
            userGender.innerText = usersList[i].gender;
            let socialContainer = document.createElement("div");

            for (let j = 0; j < usersList[i].social.length; j++) {
                let userSocial = document.createElement("td");
                userSocial.innerText = usersList[i].social[j].url;
                socialContainer.appendChild(userSocial);
            }

            newRow.appendChild(userName);
            newRow.appendChild(userEmail);
            newRow.appendChild(userAge);
            newRow.appendChild(userGender);
            newRow.appendChild(socialContainer);
        }
    }
    
            //table.innerHTML += `<tr>
            //                  <td>${usersList[i].name}</td>
            //                 <td>${usersList[i].age}</td>
            //                <td>${usersList[i].email}</td>
            //                <td>${usersList[i].social}</td>
            //                </tr>`
      

}

createTable(users);