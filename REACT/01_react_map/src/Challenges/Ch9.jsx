import React, { useEffect, useState } from 'react'

const Ch9 = () => {
    const [array, setArray] = useState([1, 2, 3, 4, 5])

    useEffect(()=>{
        console.log(array);
    }, [array]);

  return (
    <div>
        <label>Enter number of rotations</label>
      <input type="number" 
      onChange={(e)=>{
        let k = parseInt(e.target.value);
        if(isNaN(k)) return;

        const result = [...array];
        for (let index = 0; index < k; index++) {
            const element = result.pop();
            result.unshift(element);
        }
        setArray(result)
      }}
      />
      <p>{array.join(",  ")}</p>
    </div>
  )
}

export default Ch9
