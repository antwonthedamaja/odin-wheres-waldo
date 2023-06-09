/* eslint-disable react/prop-types */
import React from 'react';
import collage from '../assets/collage.jpg';

export default function Game(props) {

    function handleClick(e) {
        if (props.round === 1) {
            if (e.nativeEvent.offsetX >= 685 && e.nativeEvent.offsetX <= 732 &&
                e.nativeEvent.offsetY >= 682 && e.nativeEvent.offsetY <= 746) {
                    props.nextState();
                }
        } else if (props.round === 2) {
            if (e.nativeEvent.offsetX >= 155 && e.nativeEvent.offsetX <= 211 &&
                e.nativeEvent.offsetY >= 669 && e.nativeEvent.offsetY <= 726) {
                    props.nextState();
                }
        } else {
            if (e.nativeEvent.offsetX >= 22 && e.nativeEvent.offsetX <= 134 &&
                e.nativeEvent.offsetY >= 310 && e.nativeEvent.offsetY <= 461) {
                    props.nextState();
                }
        }
    }

    return <div id="game">
        <img src={collage} onClick={handleClick} />
    </div>;
}