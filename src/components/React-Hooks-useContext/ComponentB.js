import React, {useContext} from 'react' // step 1 call useContext
import {UserContext, ChannelContext} from './Parent' // step 2  define and get the context where is in the parent

function ComponentB(){
    const user = useContext(UserContext) // step 3 call the UserContext into the useContext
    const channel = useContext(ChannelContext)  // step 3 define the useContenxt and get the data from the ChannelContext

    // step 4 use it
    return <div> {user} -- {channel}</div>
}

export default ComponentB
