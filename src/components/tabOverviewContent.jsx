import React, { Component } from "react";
import { Card, Divider, Accordion, Label } from "@freenow/wave";
import { Row } from "@freenow/wave";
import { Box } from "@freenow/wave";
import { Column } from "@freenow/wave";

class TabOverviewContent extends Component {
  render() {
    const title =
      "Hi, I am Sourav and I am a Software Engineer, based in Hamburg Germany.";
    const title_2_1 = "Specialised in Backend ";
    const title_2_2 = "Architecture and Engineering";

    const title_1_1 = "9+ years";
    const title_1_2 = " of experience";

    const title_3_1 = "Open Source ";
    const title_3_2 = "Contributor";

    return (
      <div>
        <Card level={200}>
          <div className="site-div-float-left">
            <img
              src={require("./sourav.png")}
              alt=""
              id="site-tab-overview-img"
              className="site-tab-overview-img-common"
            />
          </div>

          <div>
            <Card id="site-tab-overview-intro">
              <div
                className="site-flex-font site-tab-headline"
                id="site-overview-title"
              >
                {title}
              </div>
              <Label
                className="site-div-float-left"
                variant="success"
                filled
                mr={1}
              >
                Available for new job
              </Label>
            </Card>
          </div>

          <div>
            <div className="site-div-float-left">
              <Card id="site-tab-overview-intro-highlight-1">
                <div className="site-flex-font site-tab-sub-headline">
                  {title_1_1}
                  {title_1_2}
                </div>
              </Card>
            </div>
            <div className="site-div-float-left">
              <Card id="site-tab-overview-intro-highlight-2">
                <div className="site-flex-font site-tab-sub-headline">
                  {title_2_1} {title_2_2}
                </div>
              </Card>
            </div>
            <div className="site-div-float-left">
              <Card id="site-tab-overview-intro-highlight-3">
                <div className="site-flex-font site-tab-sub-headline">
                  {title_3_1} {title_3_2}
                </div>
              </Card>
            </div>
          </div>
        </Card>

        <Card id="site-overview-skills-matrix" level={200}>
          <div className="site-tab-headline">Software Skills</div>
          <Divider />
          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
                Language
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./kotlin.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Kotlin</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./java.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">JavaEE</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./python.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Python</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./javascript.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Javascript</div>
              </div>
            </Column>
          </Row>

          <br />

          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
                Framework
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./springboot.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Spring Boot</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./spring.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">
                  Spring Framework
                </div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./micronaut.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Micronaut</div>
              </div>
            </Column>
          </Row>

          <br />

          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
                Middleware
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./rest.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">RestApi</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./sqs.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">
                  AWS SQS & SNS
                </div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./kafka.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Apache Kafka</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./redis.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Redis</div>
              </div>
            </Column>
          </Row>

          <br />

          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
                DBs & Storage
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./postgres.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">PostgresSQL</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./mysql.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Mysql</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./mongo.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Mongo</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./cassandra.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Cassandra</div>
              </div>
            </Column>
          </Row>

          <br />

          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-software-skills-icon-name-col-spacer">
                Infrastructure
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./docker.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Docker</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./kubernetes.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">Kubernetes</div>
              </div>
            </Column>
            <Column>
              <div>
                <img
                  src={require("./maven.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">
                  Maven & Gradle
                </div>
              </div>
            </Column>

            <Column>
              <div>
                <img
                  src={require("./grafana.png")}
                  alt=""
                  className="site-tab-overview-img-common site-tab-overview-skill-img-common"
                />
                <div className="site-tab-overview-skill-item">
                  Grafana & Prometheus
                </div>
              </div>
            </Column>
          </Row>
        </Card>

        <Card id="site-overview-work-experience" level={200}>
          <div className="site-tab-headline">Work Experiences</div>
          <Divider />
          <Box id="site-overview-work-experience-box">
            <div id="site-overview-work-experience-accordion-wrapper-div">
              <Accordion heading="Uberall GmbH, 100% remote">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Senior Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: July, 2022 To: Dec, 2022
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    1. Design and develop chatbots to automate chat responses
                    for Facebook and Google retail clients
                  </div>
                  <div className="site-tab-sub-headline">
                    2. Split the legacy monolith service to Kotlin-Micronaut-AWS
                    Cloud microservice apps
                  </div>
                  <br />
                  <a
                    href="https://uberall.com/en-gb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to Uberall</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="Taxdoo GmbH, 100% remote">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Senior Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: Apr, 2022 To: July, 2022
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    1. Scale up legacy backend application for real time VAT
                    processing for Amazon retail sellers in EU
                  </div>
                  <div className="site-tab-sub-headline">
                    2. Refactor backend services to run on dockerised containers
                    in AWS EC2
                  </div>
                  <br />
                  <a
                    href="https://www.taxdoo.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to Taxdoo</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="FREENOW, Hamburg Germany">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Senior Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: May, 2018 To: Mar, 2022
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    1. Design, develop and maintain Kotlin-SpringBoot
                    microservices for the myTaxi (FREENOW before rebranding)
                    Match ride sharing feature
                  </div>
                  <div className="site-tab-sub-headline">
                    2. Design, develop and maintain Backend services and
                    infrastructures for enabling FREENOW's rapid expansion by
                    creating products and platforms for the Sales, Marketing &
                    Driver teams.
                  </div>
                  <div className="site-tab-sub-headline">
                    3. Design, develop and maintain Backend services for
                    enhancing the end-user Password Reset feature via the app.
                  </div>
                  <div className="site-tab-sub-headline">
                    4. Active participation in Backend System Designs with focus
                    towards resilience and scalability .
                  </div>
                  <div className="site-tab-sub-headline">
                    5. Active participation in Scrum ceremonies, code reviews,
                    pair programming and mentoring.
                  </div>
                  <br />
                  <a
                    href="https://www.free-now.com/de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to FREENOW</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="Tata Consultancy Services, Bangalore India">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Java Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: 2016 To: 2018
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    1. Designed and refactored large scale multi-tenant systems
                    for making them GDPR compliant.
                  </div>
                  <div className="site-tab-sub-headline">
                    2. Systems Design and development of database schemas for
                    multi-tenant software products
                  </div>
                  <div className="site-tab-sub-headline">
                    3. Developed and maintained CI/CD pipelines and backend
                    integration tests
                  </div>
                  <div className="site-tab-sub-headline">
                    4. Developed Frontend pages using Angular JS
                  </div>
                  <br />
                  <a
                    href="https://www.tcs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to TCS</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="Keylane, Utrecht Netherlands">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Java Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: 2014 To: 2016
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    1. Developed Rest API driven spring web services for white
                    label insurance softwares.
                  </div>
                  <div className="site-tab-sub-headline">
                    2. Designed database schemas for multi-tenant backend
                    systems
                  </div>
                  <div className="site-tab-sub-headline">
                    3. Developed Java based ETL tool to onboard new insurance
                    companies to migrate their customer databases
                  </div>
                  <br />
                  <a
                    href="https://keylane.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to Keylane</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="Infosys Limited, Bangalore India">
                <div>
                  <div className="site-tab-sub-headline">
                    Position: Java Developer
                  </div>
                  <div className="site-tab-sub-headline">
                    From: 2012 To: 2014
                  </div>
                  <br />
                  <div className="site-tab-sub-headline">
                    Key Responsibilities:
                  </div>
                  <div className="site-tab-sub-headline">
                    Developed Restful API web services for digital
                    transformation of large scale systems to handle the retail
                    transactions of Sears Holding Corporation, North America
                  </div>
                  <br />
                  <a
                    href="https://www.infosys.com/de"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to Infosys</div>
                  </a>
                </div>
              </Accordion>
            </div>
          </Box>
        </Card>

        <Card id="site-overview-education" level={200}>
          <div className="site-tab-headline">Education</div>
          <Divider />
          <Box id="site-overview-education-box">
            <div id="site-overview-education-accordion-wrapper-div">
              <Accordion heading="Post Graduate Training">
                <div>
                  <div className="site-tab-sub-headline">
                    Degree: Training in Software Engineering
                  </div>
                  <div className="site-tab-sub-headline">
                    From: 2011 To: 2012
                  </div>
                  <a
                    href="https://www.infosys.com/careers/graduates/global-education-center.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>Link to Global Education Center</div>
                  </a>
                </div>
              </Accordion>
              <Accordion heading="Bachelor of Technology">
                <div>
                  <div className="site-tab-sub-headline">
                    Degree: Bachelor of Technology, Electrical Engineering
                  </div>
                  <div className="site-tab-sub-headline">
                    From: 2007 To: 2011
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1GpsfsApbXvMq_qN4hRIMW25GIlVQ5SgW/view?usp=share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Anabin Certificate
                  </a>
                </div>
              </Accordion>
            </div>
          </Box>
        </Card>
      </div>
    );
  }
}

export default TabOverviewContent;
