let url = "https://official-joke-api.appspot.com/random_joke"           //this fetches random joke api
fun=()=>{
let response = fetch(url)
response.then((value1) => {
    if (value1.ok) {
        console.log("status and ok?:", value1.status, value1.ok)
        // console.log("all good")
        return value1.json();
    }
}).then((value2) => {
    console.log(value2, "and ", value2['id'])
    let x = document.getElementsByClassName("box");                     // used to write on web page
    x[0].innerHTML = "<b>Joke    <b>  :  "+value2['setup']+'<br>'+"\n<b>Punchline <b>:"+value2['punchline'];
    console.log("this is :", value2['type']);
})
}
fun()

//color changing function
theme=()=>{
    var btn=document.body;
    btn.classList.toggle("dark-mode");
}