import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return <div onClick={props.onCloseWatches} className='fixed z-20 w-full  h-full '/>
}

const ModalOverlay = props => {
    return <div className='flex justify-center'>
        <div className="fixed px-4 z-30 w-4/5 h-full bg-blue-50 border border-blue-200 rounded-lg top-20">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalCategories(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onCloseWatches= {props.onCloseWatches}/> , portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , portalElement)}
    </Fragment>
}

export default ModalCategories
