import React, {Component} from 'react'

export default class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message:'EventBind Component'
        }


       // this.changeMessage = this.changeMessage.bind(this) // class'a bunu bind ettik
    }

    // approach 4 if you can use arrow function you can change the state directly and this is a best part
    changeMessage = () => {
        this.setState({
            message: 'hello'
        })
        console.log(this) }

    /*changeMessage(){
        this.setState({
            message: 'hello'
        })
        console.log(this)
    }*/

    render(){
        return(
            <div>
              <div>{this.state.message}</div>
                {/*
                Note normalde bir normal fonksiyon epxression ifadesinde bir obje olduğunu düşünelim ve sen onun altında
                 this kullanıp o obje içerisindeki bir özelliği çağırmak istersen o objeye ulaşırsın ama arraw'da en temepede class'a ulaşırsın
                approach 1 you can use bind to changing the name <button onClick={this.changeMessage.bind(this)}>Event Bind click</button>*/}
                {/* approach 2  arrow function // best part too
                 burada arrow kullanınca direkt fonksiyonu cagırdı çünkü arraow funtion'da eğer this kullanırsan
                  bu ilgili fonksiyon'nun kampsamı dışından çıkar ve en tepedeki root class'ı referans alır
                 <button onClick={() => this.changeMessage()}>Event Bind click</button> */}
                <button onClick={this.changeMessage}>Event Bind click</button>
            </div>
        )
    }
}
