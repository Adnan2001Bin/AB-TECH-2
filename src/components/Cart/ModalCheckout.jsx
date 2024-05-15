import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import './ModalCheckout.css'

const Backdrop = props => {
    return <div onClick={props.onCloseCheckOut} className='fixed z-20 w-full  h-full bg-slate-900 opacity-40' />
}

const ModalOverlay = props => {
    return <div className='flex justify-center'>
        <div className="red fixed flex items-center justify-between px-4 z-30 w-2/5 h-3/4 bg-gray-100 top-36 rounded-3xl">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalCheckout(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onCloseCheckOut={props.onCloseCheckOut} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalCheckout
