//import from node_modules
import { Fragment } from 'react'

//import from folder src
import {Navbar} from '../components'

export default function Hoc(props){
    return(
        <Fragment>
            <Navbar/>
            {props.children}
        </Fragment>
    )
}

