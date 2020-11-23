import React from "react"
import Toast from 'react-bootstrap/Toast';


function ToastNotification( {show, setShow, style}) {
    return(



    <div
        style={style}
    >
        <Toast show={show} onClose={() => setShow(false)} delay={2000} autohide style={{ minWidth: "300px" }}>
            <Toast.Header style={{ backgroundColor: "lightGreen" }}>

                <strong className="mr-auto">You have added a Plant!</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>See saved Plants in Your Projects Page!.</Toast.Body>
        </Toast>
    </div>
    )


};

export default ToastNotification;






