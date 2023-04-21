import React, { state, useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

export default function ClassPage() {
    const USER_DATA = 'https://6406aea577c1a905a0e079b5.mockapi.io/V1/knitting'

    const [idea, setIdea] = useState(''); //input value hooks
    const [teach, setTeach] = useState(''); //input value hooks
    const [name, setName] = useState(''); //input value hooks
    const [ideas, setIdeas] = useState([]); //storing object from above


    function handleIdea(e) {
        setIdea(
            e.target.value,
        )
    }

    function handleTeach(e) {
        setTeach(
            e.target.value,
        )
    }

    function handleName(e) {
        setName(
            e.target.value,
        )
    }

    const handleChange = (data) => {
        console.log(data)
        const newIdea = { teach, idea, name, id: 0 }
        fetch(USER_DATA, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newIdea),
        })
            .then((res) => res.json())
            .then((newIdea) => setIdeas([...ideas, newIdea]))
    }

    useEffect(() => {
        fetch(USER_DATA)
            .then((data) => data.json())
            .then((data) => setIdeas(data))
    }, [])



    return (
        <div>
            <h4 className='m-4'>Ideas for Future Classes:</h4>
            <input type="text" className="m-3 form-control" onChange={handleIdea}></input>
            <h5 className='ms-4'>Name:</h5>
            <input type="text" className="mb-3 me-3" onChange={handleName}></input>
            <label onChange={handleTeach}>Would you like to teach?</label>
            <select className="ms-2 form-control-sm">
                <option>Yes</option>
                <option>No</option>
            </select>
            <br></br>
            <Button variant="success mb-5 mt-2" onClick={handleChange}>Submit</Button>
            {ideas.map((t, i) => <li key={i}>{t.idea}{t.name}{t.teach.option}</li>)}
        </div>

    )
}
