import {useState} from "react";
import Modal from "./Modal";
import AuthForm from "./AuthForm";
import authStore from "../../store/store";
import {Link} from "react-router-dom";

export function ProfileImage() {
    const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };

    if (authStore.isAuth) {
        return (
            <div>
                <Link to="/profile">
                    <img src={"img/Group.png"} alt={"Logo"}/>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="App">
                <button className="button" onClick={handleModalOpen}>
                    Log in
                </button>
                <div>
                    {isModalActive && (
                        <Modal title="" onClose={handleModalClose}>
                            <AuthForm />
                        </Modal>
                    )}
                </div>
            </div>
        );
    }
}
