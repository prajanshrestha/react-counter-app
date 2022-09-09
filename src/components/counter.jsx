import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value,
    };

    formatCount() {
        const {value} = this.state;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    renderTags() {
        if(this.state.tags === 0) {
            return <p>There are no tags.</p>;
        } else {
            return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
        }
    }

    increaseNumber = () => {
        this.setState({value: this.state.value + 1});
    }

    render() { 
        return (
            <React.Fragment>   
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm' onClick={this.increaseNumber}>Increment</button>
                <button className='btn btn-danger btn-sm m-2' onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                <br />
                {/* <ul>{this.renderTags()}</ul> */}
            </React.Fragment>
        );
    }  
}
 
export default Counter;