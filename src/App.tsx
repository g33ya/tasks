/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./App.css";
import catpic from "./images/cat.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Giovanna Scozzaro, UD CISC275 with React Hooks and TypeScript
            </header>
            <h3>Time to pass these tests!</h3>
            <p>Hello World</p>
            <img src={catpic} alt="A COOL cat" width="30%" height="30%" />
            <p>To-do List:</p>
            <ul>
                <li>Buy a cool pair of sunglasses</li>
                <li>Ponder... for a while..</li>
                <li>Eliminate all ants</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div className="Rectangles">
                            <p>Oh my God!! I'm in a rectangle!!!</p>
                        </div>
                        <p>
                            let me in.. it's lonely out here in the left column
                        </p>
                    </Col>
                    <Col>
                        <div className="Rectangles">
                            <p>Yoooo me too! Ugly color fr.</p>
                        </div>
                        <p>
                            sucks 4 u leftie. right column ON TOP! (but below
                            the rectangle?? k.)
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
