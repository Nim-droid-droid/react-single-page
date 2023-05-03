import React, {createContext, useState} from "react";


export const MyContext = React.createContext();


export function MyTabContext(props) {
  const [tabIndex, setTabIndex] = useState(0);
  const pictures = [
          {
            imgSrc:'../assets/whellies01.png'
            },
    
            {
            imgSrc:'../assets/newspaper02.png'
            },
    
            {
            imgSrc:'../assets/makerek.png'
            },
    
            {
            imgSrc:'../assets/newspaper.png'
            },
    
            {
            imgSrc:'../assets/rider01.png'
            }
          ]
  

  // call setState inside of fetch 


  return (
    <MyContext.Provider value={{ tabIndex, pictures, setTabIndex }}>
      {props.children}
    </MyContext.Provider>
  );
}
