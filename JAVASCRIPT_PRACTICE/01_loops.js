for(let i = 0; i < 3; i++){
    console.log("Hello Pranav!")
}

const systemInfo = {
  username: "pranav",
  isLoggedIn: true,
  roles: {
    admin: true,
    editor: false,
    viewer: true
  },
  lastLogin: "2025-07-18"
};

// ✅ Task:
// 1. Use Object.entries() to loop.
// 2. If the value is an object, print only the keys where value is true.
//    Format: `roles => admin, viewer`
// 3. If not object, print like: `username => pranav`


for(const [key, value] of Object.entries(systemInfo)){
    if(typeof(value) === "object" && value != null){
        let vals = "";
        for(const [key, storedval] of Object.entries(value)){
            // shadowing concept here
            if(storedval){
                vals = vals +  key.toString() + ", ";
            }
        }
        vals = vals.slice(0, -2);
        console.log(`${key} => ${vals}`);
    }
    else{
        console.log(`${key} => ${value}`);
    }
}


const settings = {
  theme: {
    primary: "blue",
    secondary: "white"
  },
  fontSize: 16,
  notifications: {
    email: true,
    sms: false
  }
};

// ✅ Task:
// Create a new object like:
// {
//   theme_primary: "blue",
//   theme_secondary: "white",
//   fontSize: 16,
//   notifications_email: true,
//   notifications_sms: false
// }

const modSettings = {};

for(const [key, value] of Object.entries(settings)){
    if(typeof(value) === "object" && value != null){
        for(const [subkey, subval] of Object.entries(value)){
            const newName = key.toString() + "_" + subkey.toString();
            modSettings[newName] = subval;
        }
    }
    else{
        modSettings[key] = value;
    }
}

console.log(modSettings);

