// console.log("Client side javascript file is loaded.")

// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })
// fetch("http://localhost:3000/weather?address=!").then((response)=>{
//     response.json().then((data)=>{
//     if(data.error){
//         console.log(data.error)
//     }else{
//         console.log(data.forecast)
//         console.log(data.location)
//     }
//     })
// })

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

messageOne.textContent = ""

weatherForm.addEventListener("submit",(event)=>{
    event.preventDefault()//browser hemen sayfayı yenilemesin diye
    const location = search.value

    messageOne.textContent = "Loading..."

    fetch("/weather?address="+location).then((response)=>{
        response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        })
    })
}) //araştır bunu