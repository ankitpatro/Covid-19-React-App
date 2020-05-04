import React from "react";
import Toast from "react-bootstrap/Toast";
import { Card } from "react-bootstrap";

const FeedComponent = (data) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="container-fluid">
    <Card>
      <Card.Body className=" bg-light text-primary">
        <Toast className=" bg-dark text-light">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">WHO </strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>
            <li>
              {JSON.stringify(
                data[0] === undefined ? "Not data Available" : data[0].text
                //data[0].text
              )}
            </li>
          </Toast.Body>
        </Toast>
        <Toast className=" bg-dark text-light">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Mr.X </strong>
            <small>2 seconds ago</small>
          </Toast.Header>
          <Toast.Body>Tweet 2</Toast.Body>
        </Toast>
      </Card.Body>
    </Card>
  </div>
);
export default FeedComponent;
