import React, {Component} from 'react'
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
    // always child component first render then parent component render !
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

   shouldComponentUpdate(prevProps, prevState){
       console.log('shouldComponentUpdate lifecycleA ')
         return true  // make sure to return true
   }

   getSnapshotBeforeUpdate(){
         console.log('getSnapshotBeforeUpdate lifecycleA ')
       return null // make sure to return null or something
   }

   componentDidUpdate(){
         console.log('componentDidUpdate lifecycleA ')
   }

    changeState = () => {
    this.setState({
        name:'kemalettin'
    })
    }

   render(){
       console.log('render lifecycleA ')
       return(
            <div>
               <div>LifecycleA</div>
                <button onClick={this.changeState}>Change state</button>
                { /* normalde => constructor > getDerivedStateFromProps > componentDidMount > render >
                 child component mount edilmişse =>  constructor > getDerivedStateFromProps > render sonra child componetinde aynı işlemler > en son parent  componentin componentDidMount çalışır
.                bu sayfadaki componentDidMount child component render olduktan sonra çalışacaktır  */}
               <LifecycleB/>
          </div>
       )

   }
}

export default LifecycleA
