import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import ClassPage from './ClassPage';

export default function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <Button
                onClick={toggleModal}
                className="btn-modal">
                Open
            </Button>

            {modal && (
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Idea</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Enter changes:</p>
                        <input type='text' defaultValue={idea} onChange={(e) => { setIdea(e.target.value) }} /> <br></br>
                        <input type='text' defaultValue={name} onChange={(e) => { setName(e.target.value) }} /> <br></br>
                        <input type='text' defaultValue={teach} onChange={(e) => { setTeach(e.target.value) }} /> <br></br>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" onClick={updateIdea}>Save changes</Button>
                        <Button variant="info" onClick={toggleModal}>Close</Button>

                    </Modal.Footer>
                </Modal.Dialog>
            )};

        </>
    )
}
