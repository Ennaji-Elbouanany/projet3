


const promise = new Promise((resolve, reject) => {


    setTimeout(() => {

        resolve("cest pas possible")
    }, 7000)
})


promise.then((message) => {
    console.log(message)
})



function hide() {


    setTimeout(() => {

        document.getElementById("para").style.visibility = "hidden"
    }, 7000)


}


function show() {

    document.getElementById("para").style.visibility = "visible"

}