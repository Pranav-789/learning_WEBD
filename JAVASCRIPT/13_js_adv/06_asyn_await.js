function fetchUserData(){
    return new Promise((resolve, reject) => {
        // setTimeout(()=>{
        //     reject({name: "Pranav", url: "pranav.com"});
        // }, 3000)
        setTimeout(() => {
          resolve({ name: "Pranav", url: "pranav.com" });
        }, 3000);
    })
}

// fetchUserData
// .then
// .catch

async function getUserData() {
    try {
        console.log('Fetchin user data....');
        const userData = await fetchUserData();
        console.log("User data: ", userData);
    } catch (error) {
        console.log("Error fetching data ", error);
    }
}

getUserData();