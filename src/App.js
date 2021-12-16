import './App.css';

import Map from './components/Map';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="app">
      <Container>
          <Row className="mt-3 justify-content-md-center">
            <Col md="auto">
              <Map />
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
