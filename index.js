// Add your code here


// function submitData() {
//     fetch (`http://localhost:3000/dogs/`, configurationObject)
//         .then ((resp) => resp.json())
//         .then ((data) => {
//             console.log(data)
//         })
// }
//         const formData = {
//             dogName: "Byron",
//             dogBreed: "Poodle",
//         }
       
//         const configurationObject = { 
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json',
//                 'Accept': 'application/json',
//             },
//             body: JSON.stringify(formData)
//         };

// document.addEventListener('DOMContentLoaded', submitData)


    // fetch ("http://localhost:3000/dogs", {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         dogName: 'Byron',
    //         dogBreed: 'Poodle',
    //     })
    // })


function submitData(userName, userEmail) {

    let userData = {
        name: userName,
        email: userEmail,
    }

    let newObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData)
    };    

    return fetch ('http://localhost:3000/users', newObj)
    .then ((resp) => resp.json())
    .then ((data) => {
        console.log(data)
        let newElement = document.createElement('p')
        newElement.textContent = data.id
        document.querySelector('body').append(newElement);
    })
    .catch((error) => {
        console.log(error.message)
        let newElement2 = document.createElement('p')
        newElement2.textContent = error.message
        document.querySelector('body').append(newElement2)
    })
    
}  

