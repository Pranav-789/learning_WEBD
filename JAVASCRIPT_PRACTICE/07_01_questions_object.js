let obj = {
    sport1: "football",
    sport2: "cricket",
    sport3: "basketball",
    sport4: "baseball"
}

const objectLength = (object)=>{
    let count = 0
    for(let i in object){
        count++;
    }
    return count;
}

console.log(objectLength(obj));
//or
console.log(Object.keys(obj).length); // as Object.keys return array

const user = [
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "user"},
    {name: "Charlie", role: "admin"},
]

const userArr = user.filter(usager => usager.role === "admin");
let resultArr = userArr.map(item=> {return item.name})
console.log(resultArr);

const comments = [
    {postId: 1, text: "Great Post!"},
    {postId: 2, text: "Thanks!"},
    {postId: 1, text: "Very Helpful!"},
]

function groupByPostId(comments){
    let groupedComments = {};
    comments.forEach(element => {
        if(groupedComments.hasOwnProperty(element.postId)){
            groupedComments[element.postId].push(element.text)
        }
        else{
            groupedComments[element.postId] = [element.text]
        }
    });
    return groupedComments;
}

console.log(groupByPostId(comments))

let params = {
    search: "alpha",
    page: 2,
    sort: 'asc',
}

function createUrl(params){
    
}