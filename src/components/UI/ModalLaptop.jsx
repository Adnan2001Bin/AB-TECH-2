import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.onCloseLaptop} className='fixed z-20 w-full  h-full ' />
}

const ModalOverlay = props => {
    return <div className='flex justify-center'>
        <div className="fixed bg-white flex items-center justify-between px-4 z-30 w-2/4 h-72  border border-gray-300 top-32 rounded-xl">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalLaptop(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onCloseLaptop={props.onCloseLaptop} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalLaptop
