let button = document.querySelector("button");
let para = document.querySelector(".jokes-box");
async function jokes (){
    para.innerText = "Updating..."
    button.innerText = "LOADING..."
    let api = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1" , { headers : {'X-Api-Key': 'mjX8uJCAOJfGszgxXTlORmp5CZkhY2Zt7ZnyeH3J'}})
    let data = await api.json();
    para.innerText = data[0].joke;
    button.innerText = "TELL ME A JOKE "
    
}
let generate = () => {

    // para.innerText = "Updating..."
    // let api = fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1" , { headers : {'X-Api-Key': 'mjX8uJCAOJfGszgxXTlORmp5CZkhY2Zt7ZnyeH3J'}})

    // api.then((response) => {
    // return response.json();
    // }).then((response) => {
    // // let jokes = response[0];
    // console.log(response[0]);
    // para.innerText = response[0].joke;
    // }).catch((error) => {
    // console.log(error);
    // });
   

    jokes();
    
}
button.addEventListener('click' , generate)