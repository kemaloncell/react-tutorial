import React from 'react'

import {UserContext, ChannelContext} from "./Parent";

/*
!!! eğer birden fazla component veri göndermen gerekiyorsa bu yönetimi kullanman uygun değil. sadece 1 tane component ile işin varsa
 bu stili kullanabilirsin bu durumlarda nasıl bir yapı kullanabiliriz. ComponentB 'de buna bakalım
 */
function ComponentC(){
    return(
        <div>
             <UserContext.Consumer>
                     {
                         user => {
                 return(
                     <ChannelContext.Consumer>
                               {
                                   channel => {
                                       return <div> hello {user} your channel is {channel}</div>
                                   }
                               }
                           </ChannelContext.Consumer>
                     )}
                 }
             </UserContext.Consumer>
            </div>
    )

}

export default ComponentC
