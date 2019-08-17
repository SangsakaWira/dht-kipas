import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Nav, Container, Alert, Button } from "react-bootstrap";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lampu: 0
    };
  }

  componentDidMount() {
    axios
      .get("https://www.trafficnet.id/sensor/getById/5d3158dfe57bce652711d4cc")
      .then(response => {
        console.log(response.data);
        this.setState({
          lampu: response.data.status
        });
      });
  }

  componentDidUpdate() {
    axios
      .get("https://www.trafficnet.id/sensor/getById/5d3158dfe57bce652711d4cc")
      .then(response => {
        console.log(response.data);
        this.setState({
          lampu: response.data.status
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Kontrol Kipas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Monitoring Kipas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Mode Otomatis</Nav.Link>
          </Nav.Item>
        </Nav>
        <Container style={{ marginTop: "20px" }}>
          <Alert variant="success">
            <Alert.Heading>Suhu: 20</Alert.Heading>
            <Alert.Heading>Kondisi Kipas: {this.state.lampu}</Alert.Heading>
            <p>Masih ingin menghidupkan Kipas?</p>
            <hr />
            <Button variant="success">Yes</Button>
            <Button style={{ marginLeft: "20px" }} variant="danger">
              No
            </Button>
          </Alert>
        </Container>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
