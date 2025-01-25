import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import Toastify CSS

const PrizePopup = ({ message }) => {
    useEffect(() => {
        if (message) {
            toast(message, {
                position: "top-right",
                autoClose: 3000,  // duration (milliseconds)
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }, [message]);

    return <ToastContainer />;
};

export default PrizePopup;