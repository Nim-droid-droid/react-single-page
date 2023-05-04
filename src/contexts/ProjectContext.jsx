import React, {createContext, useState} from "react";


export const MyContext = React.createContext();

// Logic
// When user clicks on a tab it would output some string that can be sent to the Context State (with useReducer to change the state). With that updated state you can use conditions with the useEffect Hook, to make a fetch request for those specific images stored at some cloud storage. (Cloudinary maybe)

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
