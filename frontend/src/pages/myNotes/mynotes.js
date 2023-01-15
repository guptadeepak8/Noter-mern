import React, { useState } from "react";
import MainScreen from "../../components/mainscreen/Mainscreen";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import notes from "../../data/notes";
import Accordion from "react-bootstrap/Accordion";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const MyNotes = () => {
  const deleteHandler = (id) => {
    console.log(id);
  };
  return (
    <MainScreen title={"welcome back i"} children={"i am children"}>
      <Link to="#">
        <Button size="lg" style={{ marginLeft: 10, marginBottom: 6 }}>
          CREATE NEW NOTE
        </Button>
      </Link>

      {notes.map((note) => {
        return (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Card className="my-1">
                <Card.Header
                  style={{ color: "black", display: "flex", cursor: "pointer" }}
                  key={note._id}
                >
                  <span style={{ flex: 1,border:'none' }}>
                    <AccordionHeader style={{border:'none' }}> {note.title}</AccordionHeader>
                  </span>

                  <div>
                    <Button href={`/note/${note._id}`}>EDIT</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      DELETE
                    </Button>
                  </div>
                </Card.Header>
                <AccordionBody eventKey="0">
                  <h4 className="my-2 mx-2">
                    <Badge bg="success">Category - {note.category}</Badge>
                  </h4>

                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created on 21/03/2003
                      </footer>
                    </blockquote>
                  </Card.Body>
                </AccordionBody>
              </Card>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </MainScreen>
  );
};

export default MyNotes;
