import React, { state, useState, useEffect } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';
// import Modal from "./components/Modal";

export default function ClassPage() {
    const USER_DATA = 'https://6406aea577c1a905a0e079b5.mockapi.io/V1/knitting'

    const [idea, setIdea] = useState(''); //input value hooks
    const [teach, setTeach] = useState(''); //input value hooks
    const [name, setName] = useState(''); //input value hooks
    const [ideas, setIdeas] = useState([]); //storing object from above
    const [ideaId, setIdeaId] = useState(null); 

    const [showModal, setShowModal] = useState(false);

    // const uniqueKey = uuidV4()

    function handleIdea(e) {
        setIdea(
            e.target.value,
        )
    }

    function handleName(e) {
        setName(
            e.target.value,
        )
    }

    function handleTeach(e) {
        setTeach(
            e.target.value,
        )
    }

    const handleChange = (data) => {
        console.log(data)
        const newIdea = { teach, idea, name, ideaId }
        fetch(USER_DATA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIdea),
        })
            .then((res) => res.json())
            .then((newIdea) => setIdeas([...ideas, newIdea]))
    }

    useEffect(() => {
        getIdeas()
    }, [])

    function getIdeas() {
        fetch(USER_DATA).then((result) => {
            result.json().then((resp) => {
            // debugger
            setIdeas(resp)
            // setIdea(resp[0].idea) //look into this
            // setName(resp[0].name)
            // setTeach(resp[0].teach)
            // setIdeaId(resp[0].id)

        })
    })
    }

    function onDelete(id) {
        fetch(`https://6406aea577c1a905a0e079b5.mockapi.io/V1/knitting/${id}`, {
            method: 'DELETE'
        }).then((res) => {
            res.json().then((resp) => {
                console.warn(resp)
                getIdeas()
            })
        })
    }

    function onEdit(id) 
    {
        setShowModal(true)
        console.warn("function", ideas[id-1])
        let item=ideas[id-1];
        setIdea(item.idea)
        setName(item.name)
        setTeach(item.teach)
        setIdeaId(item.id)
    }

    function updateIdea()
    {
        let item={idea, name, teach}
        
        console.warn("item", item)
        fetch(`https://6406aea577c1a905a0e079b5.mockapi.io/V1/knitting/${ideaId}`, {
            method: 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((res) => {
            res.json().then((resp) => {
                console.warn(resp)
                getIdeas()
            })
        })
    }
    

    return (
        <div>

            <h4 className='m-4'>Ideas for Future Classes:</h4>
            <input type="text" className="m-3 form-control" onChange={handleIdea}></input>
            <h5 className='ms-4'>Name:</h5>
            <input type="text" className="mb-3 me-3" onChange={handleName}></input>
            <label >Would you like to teach?</label>
            <select onClick={handleTeach} className="ms-2 form-control-sm">
                <option>Yes</option>
                <option>No</option>
            </select>
            <br></br>
            <Button variant="success mb-5 mt-2" onClick={handleChange}>Submit</Button>
            <Table>
                <thead>
                    <tr>
                        <th>Class Idea</th>
                        <th>Name</th>
                        <th>Teach?</th>
                    </tr>
                </thead>
                {ideas.map((table) =>

                    <tbody key={table.id}>
                        <tr>
                            <td>{table.idea}</td>
                            <td>{table.name}</td>
                            <td>{table.teach}</td>
                            <td><Button
                                variant="btn btn-outline-danger"
                                onClick={() => onDelete(table.id)}>Delete</Button></td>
                            <td><Button
                                variant="btn btn-outline-danger"
                                onClick={() => onEdit(table.id)}>Edit</Button></td>
                        </tr>
                    </tbody>

                )}
            </Table>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title>Edit Idea</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Enter changes:</p>
                        <input type='text' defaultValue={idea} onChange={(e) => {setIdea(e.target.value)}}/> <br></br>
                        <input type='text' defaultValue={name} onChange={(e) => {setName(e.target.value)}}/> <br></br>
                        <input type='text' defaultValue={teach} onChange={(e) => {setTeach(e.target.value)}}/> <br></br>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="success" onClick={updateIdea}>Save changes</Button>
                        <Button variant="warning" onClick={() => setShowModal(false)}>Close</Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </div>

    )
}


