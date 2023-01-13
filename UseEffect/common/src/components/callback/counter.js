
import React from 'react'

function Counter({text , count}) {
  console.log("Rendering" , text)
  return (
    <div>
      {text} : {count}
    </div>
  )
}


export default React.memo(Counter)
/*
function Counter(props) {
console.log("Rendering counter" ,text)
   
    return (
<>
            <div>
                counter<br />
                {props.text} :{props.count}
        </div>
           
</>            
    );
}

*/