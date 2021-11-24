import './App.css';

import Find from './components/Find';
import Info from './components/Info';
import Map from './components/Map';
import FindButton from './components/FindButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="app">
      <Container>
          <Row className="mt-3 justify-content-md-center">
            <Col md="auto">
              <FindButton />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <Col md="auto">
              <Find />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <Col md="auto">
              <Map />
            </Col>
          </Row>
          <Row className="mt-3 justify-content-md-center">
            <Col md="auto">
              <Info />
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
