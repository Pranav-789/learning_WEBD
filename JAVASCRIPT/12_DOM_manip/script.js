console.log("connected");

//ex-7
document.getElementById("teaList").addEventListener('click', function(event){
    console.log(event.target);
    if(event.target && event.target.matches('.teaItem')){
        alert("You selected " + event.target.textContent);
    }
})

//ex-8
