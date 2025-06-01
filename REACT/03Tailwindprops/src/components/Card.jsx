import rocket from "../assets/ChatGPT Image May 28, 2025, 08_10_21 PM.png";

function Card ({username = 'xyz'}){
    // console.log(props)
    return (
      <div className="bg-blue-950 flex">
        <img src={rocket} className="h-[200px] border-amber-50 border-2" />
        <div>
          <h1 className="text-2xl text-amber-500 rounded">card for photos</h1>
          <h3>{username}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            temporibus alias esse vitae error voluptatibus!
          </p>
        </div>
      </div>
    );
}

export default Card