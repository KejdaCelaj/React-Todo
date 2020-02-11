import React from "react";
import styled from "styled-components";

const Goal = styled.p`
    font-size: 18px;
`;

const Todo = props => {

    const handleClick = () => {
        props.toggleItem(props.item.id)
    };

    return (
        <div
        onClick={handleClick}>
            <Goal style={props.item.completed ? null : { textDecoration: 'line-through' }}>{props.item.name}</Goal>
        </div>
    )
}

export default Todo;