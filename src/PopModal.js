import React, { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const PopModal = () => {
    const [open, setOpen] = useState(true);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };
    // https://iili.io/HNYDSjf.png
    return (
        <>
            <div className={styles}>

                <Modal open={open} onClose={onCloseModal} center>
                    <div className='text-center'>
                        <h4 >Admission Open 2024-2025</h4>
                    </div>
                    // <img src="https://res.cloudinary.com/dvmqfke8w/image/upload/v1714667641/req_zkblcu.png" className="img-class" alt="" />  
        </Modal>
            </div>

        </>
    )
}

export default PopModal

//    size="lg"
    //    aria-labelledby="contained-modal-title-vcenter"
    //    centered
