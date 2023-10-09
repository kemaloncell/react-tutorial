import React, {createContext} from "react";
import ComponentA from "./ComponentA";

export const UserContext = createContext()
export const ChannelContext = createContext()

function Parent(){
        return(
           <div>
               <UserContext.Provider value={'Kemal'}>
                   <ChannelContext.Provider value={'Youtube'}>
                       <ComponentA />
                   </ChannelContext.Provider>
               </UserContext.Provider>
           </div>
        )
}

export default Parent
