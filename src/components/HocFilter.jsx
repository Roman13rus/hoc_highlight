import React from 'react'
import New from './New'
import Popular from './Popular'

export default function HocFilter(Component) {
    return function (props) {
        const { views } = props
        if (views < 100) {
            return (
            <New>
                <Component {...props}/>
            </New>
            )} else if (views >= 1000) {
            return (
            <Popular>
                <Component {...props}/>
            </Popular>
                )
            }
        }
    }

