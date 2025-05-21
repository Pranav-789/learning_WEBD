function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched successfully");
            }
            else{
                reject("Error fetching data")
            }
        }, 3000)
    })
}

fetchData()
.then((data)=>{
    console.log(data);
    // return `Pranav`;
    return data.toLowerCase();
})//success
.catch((error)=>{
    console.error(error);
});