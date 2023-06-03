import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




const Navigation = ({ setSearch, setStars, addMovie }) => {

  const [newmovie, setNewmovie] = useState(
    {
      name: " ",
      posterurl: "",
      description: "",
      rating: 0,
    });

  const handleSubmit = () => {
    addMovie({ name: newmovie.name, description: newmovie.description, posterurl: newmovie.posterurl, rating: parseInt(newmovie.rating) });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ justifyContent: "space-around", position: 'sticky', top: '0', zIndex: "999" }}>
        <Container style={{ width: "40%" }}>
          <Navbar.Brand href="/"><img style={{ marginLeft: "100px", width: "110px" }} src="./logo.png" alt='logo' /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
            <Nav.Link href="#">Latest</Nav.Link>
          </Nav>
        </Container>

        <Container style={{ justifyContent: "flex-end", width: "60%", gap: "20px" }}>
          <Button style={{ width: "150px" }} variant="danger" onClick={handleShow}>Add Movie</Button>
          <InputGroup style={{ width: "300px" }}>
            <Form.Control
              placeholder="Tape Movie Name"
              onChange={(e) => (setSearch(e.target.value))}
            />
          </InputGroup>
          <Form.Select aria-label="Default select example" style={{ width: "170px" }} onChange={(e) => (setStars(e.target.value))}>
            <option value="0">Filter By Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Container>
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Movie Name" required onChange={(e) => (setNewmovie({ ...newmovie, name: e.target.value }))} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Movie Description" required onChange={(e) => (setNewmovie({ ...newmovie, description: e.target.value }))} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Poster</Form.Label>
                <Form.Control type="text" placeholder="Movie Poster" required onChange={(e) => (setNewmovie({ ...newmovie, posterurl: e.target.value }))} />
              </Form.Group>

              <Form.Label>Rating</Form.Label>
              <Form.Select aria-label="Default select example" required onChange={(e) => (setNewmovie({ ...newmovie, rating: e.target.value }))}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">5</option>
                <option value="5">5</option>
              </Form.Select>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary"
              onClick={() => { handleSubmit(); handleClose(); }}>
              Add Movie
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    </>
  )
}

export default Navigation