import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    background-color: white;
    border: 1px solid gray;
    font-size: 14px;
    margin: 4px 1px;
    cursor: pointer;
`;

const ClearButton = styled.button``;

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.item !== "") {
            this.props.addItem(this.state.item);
            this.setState({
                item: ""
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                />
                <Button type="submit">Add Todo</Button>
                <Button onClick={this.props.clearCompleted}>Clear Completed</Button>
            </form>
        );
    }
}

export default TodoForm;