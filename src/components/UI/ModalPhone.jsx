import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './ModalPhone.css'

const Backdrop = props => {
    return <div onClick={props.onClosePhone} className='fixed z-20 w-full  h-full ' />
}

const ModalOverlay = props => {
    return <div className='flex justify-center'>
        <div className="fixed bg-white flex justify-between px-4 z-30 w-48 phoneCatagories  border border-gray-500 top-32 rounded-xl">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalPhone(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClosePhone={props.onClosePhone} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalPhone
