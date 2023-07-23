import React from 'react'
import './myStyles.css'
// if you want to use the css module property from different component, you have to import the css file in the relevant component
import styles from "./appStyle.module.css";

/* for inline style */
 const heading = {
        fontSize: '72px',
        color: 'blue'
 }

const StyleSheet = ({primary}) => {
   /*
     const className = primary ? 'primary' : 'secondary' this is a way to use the condition in the className
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
    */
    /* inline style */
    return (
        <div>
            <h1 style={heading}>StyleSheet</h1>
            <h1 className={styles.success}>inline component using the css module property from different component</h1>
            <h1 className='error'>inline component using the global css property from different component</h1>
        </div>
    )
}
export default StyleSheet
