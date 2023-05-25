import React from 'react'
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import './ThirdStep.css'

export default function ThirdStep() {
  return (
    <div>
      <Container className='p-5 text-center'>
        <Row>
        <Col lg="10">
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment"
                onChange={(e) => console.log(e.target.value)}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <div className="send-form">
          <p className="result p-3" onClick={() => console.log('click')}>
            View result 🙌
          </p>
        </div>
      </Container>

    </div>
  )
}
