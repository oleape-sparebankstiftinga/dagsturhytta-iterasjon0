import React from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

class Find extends React.Component {
    render() {
        return (
            <div className="find-container">
                <InputGroup className="mt-3">
                    <InputGroup.Text id="input-find">Finn</InputGroup.Text>
                    <Form.Control 
                        aria-label="Finn" 
                        aria-describedby="inputGroup-sizing-sm" 
                        placeholder="Finn din hytte..."
                    />
                </InputGroup>
            </div>
        );
    }
}

export default Find;
