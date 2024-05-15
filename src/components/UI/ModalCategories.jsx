import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.onCategoriesClose} className='fixed z-20 w-full  h-full ' />
}

const ModalOverlay = props => {
    return <div className='flex justify-center'>
        <div className="fixed flex items-center justify-between px-4 z-30 w-3/4 h-56 bg-white border border-gray-300 top-32 rounded-xl">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalCategories(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onCategoriesClose={props.onCategoriesClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalCategories
