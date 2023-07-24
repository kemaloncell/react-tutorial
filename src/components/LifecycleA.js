import React, {Component} from 'react'
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
   constructor(props){
       super(props)
       this.state = {
           name:'kemal',
       }
       console.log('constructor lifecycleA ')
   }
   static getDerivedStateFromProps(props, state){
       console.log('getDerivedStateFromProps lifecycleA ')
       return null
   }
   componentDidMount(){
       console.log('componentDidMount lifecycleA ')
   }
   render(){
       console.log('render lifecycleA ')
       return(
            <div>
               <div>LifecycleA</div>
                // normalde => constructor > getDerivedStateFromProps > componentDidMount > render >
                // child component mount edilmişse =>  constructor > getDerivedStateFromProps > render sonra child componetinde aynı işlemler > en son parent  componentin componentDidMount çalışır
.                // bu sayfadaki componentDidMount child component render olduktan sonra çalışacaktır
               <LifecycleB/>
          </div>
       )

   }
}

export default LifecycleA
