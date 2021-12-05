import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import etharium from "../../images/ethareum";
import marketCap from "../../images/market-cap.png";
import totalLocked from "../../images/total-locked.png";
import './MainPolls.css';

export default function MainPolls() {
  return (
    <div style={{width:'100%'}}>
       <Container>
       <Row>
          <Col className="mb-5" xxl={8}>
            <div className="ms-3">
              <img style={{width:'100%'}} src={etharium} alt="" />
            </div>
          </Col>
          <Col className="text-white" xxl={4}>
            <div className="card-res">
                {/* Market cap card */}
                <Card
                  
                  className="mb-3 card-width"
                  style={{ background: "#15213D" }}
                >
                  <div className="d-flex justify-content-around pt-3 ">
                    <div>
                      <Card.Title>Market Cap</Card.Title>
                      <Card.Text>
                        <div>
                          <span className='text-secondary'>SCT Price</span>
                          <br />
                          <p>$750.00</p>
                        </div>
                        <div>
                          <span className='text-secondary'>SCT holdings</span>
                          <br />
                          <p>$750.00</p>
                        </div>
                      </Card.Text>
                    </div>
                    <div>
                      <img
                        style={{ width: "12rem" }}
                        src={marketCap}
                        alt=""
                      />
                    </div>
                  </div>
                </Card>

                {/* Total Locked card */}
                <Card className="ps-2 card-width" style={{ background: "#15213D" }}>
                  <div className="d-flex justify-content-around pt-3">
                    <div>
                      <Card.Title>Total Locked</Card.Title>
                      <Card.Text>
                        <div className="mb-1">
                          <span className='text-secondary'>Circulating Supply</span>
                          <div>$750.00</div>
                        </div>
                        <div className="mb-1">
                          <span className='text-secondary'>Total Reflection</span>
                          <div>$750.00</div>
                        </div>
                        <div className="mb-2">
                          <span className='text-secondary'>Total Value Locked</span>
                          <div>$2,573.663</div>
                        </div>
                      </Card.Text>
                    </div>
                    <div>
                      <img
                        style={{ width: "12rem" }}
                        src={totalLocked}
                        alt=""
                      />
                    </div>
        
                  </div>
                </Card>
            </div>
          </Col>
        </Row>
       </Container>
    </div>
  );
}
