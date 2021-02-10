import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: ''}
    }
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
    handleClick = () => {
        if(this.state.value.length>1){
            this.props.onClick(this.state.value)
            this.setState({value: ''});
        }        
    }
    handleKeydown = (e) => {
        if(e.key == 'Enter') {
            return this.handleClick();
        }
    }
    render(){
        return (
        <div className='header'>
            <input value={this.state.value} className='task-input'
             placeholder='new task' onChange={this.handleChange}
             onKeyDown={this.handleKeydown}/>
            <button className='task-submit' onClick={this.handleClick}>Submit</button>
        </div>
        )
    }
}

export default Header;