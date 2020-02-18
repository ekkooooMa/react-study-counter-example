import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //   value: this.props.counter.value,
    // //   imageUrl: "https://picsum.photos/200",
    // //   tags:['tag1', 'tag2', 'tag3']

    // };

    style = {
        fontSize: '10px',
        fontWeight: 'bold'
    };

    // handleIncrement = ()=> {
    //     // this.state.count += 1;
    //     // this.state.count++;
    //     this.setState({value:this.state.value + 1});
    //     // this.state.count += 1;
    //     // console.log('clicked')
    // }
    

    
    render() { 
        // let classes = this.checkStatus();

        console.log('props', this.props);
        return (
            <div>
                {/* <span>{this.state.count}</span> */}
                <span style={this.style}className={this.checkStatus()}>{this.outputResult()}</span>
                {/* <h1 style={{fontSize:30}}>Hello World</h1> */}
                {/* <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button> */}
                {/* <img src={this.state.imageUrl} alt=""/> */}
                {/* <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul> */}
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                <button onClick={()=>this.props.onIncrement(this.props.counter)}className="btn btn-secondary btn-sm m-2">Increment</button>
            </div>
        );        
    }
    checkStatus() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    outputResult(){
        // let result = this.state.count;
        // if(result === 0){
        //     return 'ZERO';
        // }else{
        //     return result.toString();
        // }   
        const {value} = this.props.counter;
        // const x = <h1>Zero</h1>;//ok
        return value === 0? 'zero':value;
    }
}
 
export default Counter;