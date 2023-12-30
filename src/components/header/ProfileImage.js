import {useState} from "react";
import Modal from "./Modal";
import AuthForm from "./AuthForm";

export function ProfileImage() {
    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    return (
        <div className="App">
            <button className="button" type="button" onClick={handleModalOpen}>
                Log in
            </button>
            <div>
                {isModalActive && (
                    <Modal title="" onClose={handleModalClose}>
                        <AuthForm></AuthForm>
                    </Modal>
                )}
            </div>
        </div>
    );
}
