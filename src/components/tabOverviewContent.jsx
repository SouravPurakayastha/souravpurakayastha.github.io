import React, { Component } from "react";
import { Card, Divider, Label, Column } from "@freenow/wave";
import { Row } from "@freenow/wave";
import { Box } from "@freenow/wave";
import SkillColumn from "./SkillColumn";
import SkillTypeColumn from "./SkillTypeColumn";
import WorkExpAccordion from "./WorkExpAccordion";
import EducationDegreeAccordion from "./EducationDegreeAccordion";

class TabOverviewContent extends Component {
  state = {
    languageSkills: [
      {
        skillType: "Language",
        skillName: "Kotlin",
        skillIcon: require("../images/skillIcons/kotlin.png"),
      },
      {
        skillType: "Language",
        skillName: "JavaEE",
        skillIcon: require("../images/skillIcons/java.png"),
      },
      {
        skillType: "Language",
        skillName: "Python",
        skillIcon: require("../images/skillIcons/python.png"),
      },
      {
        skillType: "Language",
        skillName: "Javascript",
        skillIcon: require("../images/skillIcons/javascript.png"),
      },
      {
        skillType: "Language",
        skillName: "ReactJS",
        skillIcon: require("../images/skillIcons/javascript.png"),
      },
    ],
    frameworkSkills: [
      {
        skillType: "Framework",
        skillName: "Spring Boot (Reactive)",
        skillIcon: require("../images/skillIcons/springboot.png"),
      },
      {
        skillType: "Framework",
        skillName: "Spring Framework",
        skillIcon: require("../images/skillIcons/spring.png"),
      },
      {
        skillType: "Framework",
        skillName: "Micronaut",
        skillIcon: require("../images/skillIcons/micronaut.png"),
      },
    ],
    middlewareSkills: [
      {
        skillType: "Middleware",
        skillName: "RestApi",
        skillIcon: require("../images/skillIcons/rest.png"),
      },
      {
        skillType: "Middleware",
        skillName: "SQS/SNS/Azure Event bus",
        skillIcon: require("../images/skillIcons/sqs.png"),
      },
      {
        skillType: "Middleware",
        skillName: "Apache Kafka",
        skillIcon: require("../images/skillIcons/kafka.png"),
      },
      {
        skillType: "Middleware",
        skillName: "Redis",
        skillIcon: require("../images/skillIcons/redis.png"),
      },
    ],
    dbSkills: [
      {
        skillType: "DBs & Storage",
        skillName: "PostgresSQL",
        skillIcon: require("../images/skillIcons/postgres.png"),
      },
      {
        skillType: "DBs & Storage",
        skillName: "Azure CosmosDB",
        skillIcon: require("../images/skillIcons/cosmosDb.png"),
      },
      {
        skillType: "DBs & Storage",
        skillName: "MongoDB",
        skillIcon: require("../images/skillIcons/mongo.png"),
      },
      {
        skillType: "DBs & Storage",
        skillName: "Cassandra",
        skillIcon: require("../images/skillIcons/cassandra.png"),
      },
    ],
    infraSkills: [
      {
        skillType: "Infrastructure",
        skillName: "Docker",
        skillIcon: require("../images/skillIcons/docker.png"),
      },
      {
        skillType: "Infrastructure",
        skillName: "Kubernetes",
        skillIcon: require("../images/skillIcons/kubernetes.png"),
      },
      {
        skillType: "Infrastructure",
        skillName: "Maven & Gradle",
        skillIcon: require("../images/skillIcons/maven.png"),
      },
      {
        skillType: "Infrastructure",
        skillName: "Grafana & Prometheus",
        skillIcon: require("../images/skillIcons/grafana.png"),
      },
    ],
    workExp: [
      {
        heading: "Uberall Gmbh, 100% remote",
        position: "Senior Developer",
        fromTo: "From: July, 2022 To: Dec, 2022",
        keyResponsibilities: [
          "1. Design and develop automated chatbots to automate chat responses for Facebook and Google retail clients",
          "2. Split legacy monolith service to AWS hosted containerized microservices",
        ],
        companyUrl: "https://uberall.com/en-gb",
        companyUrlTitle: "Link to Uberall",
      },
      {
        heading: "Taxdoo GmbH, 100% remote",
        position: "Senior Developer",
        fromTo: "From: Apr, 2022 To: July, 2022",
        keyResponsibilities: [
          "1. Scale up legacy backend application for real time VAT processing for Amazon retail sellers in EU",
          "2. Refactored backend services to run on dockerised containers in Kubernetes clusters",
          "3. Designed ReactJS components and states for frontend refactoring projects",
        ],
        companyUrl: "https://www.taxdoo.com/en",
        companyUrlTitle: "Link to Taxdoo",
      },
      {
        heading: "FREE NOW, Hamburg",
        position: "Senior Developer",
        fromTo: "From: May, 2018 To: Mar, 2022",
        keyResponsibilities: [
          "1. Design, develop and maintain Kotlin-SpringBoot and Python based microservices for the backend of FREE NOW ride-hailing services",
          "2. System design and development of backend architechture and infrastructures for in-house products of FREE NOW with strong focus on service availability, scalability and resilience",
          "3. Implemented multi-factor-authentication to enhance the security of user accounts",
          "4. Developed Frontend apps using ReactJS and TypeScript",
          "5. Active participation in cross team engagements and knowledge sharing",
          "6. Active participation in Scrum ceremonies, code reviews, pair programming and mentoring",
        ],
        companyUrl: "https://www.free-now.com/de",
        companyUrlTitle: "Link to FREE NOW",
      },
      {
        heading: "Tata Consultancy Services, Bangalore India",
        position: "Java Developer",
        fromTo: "From: 2016 To: 2018",
        keyResponsibilities: [
          "1. Designed and refactored large scale multi-tenant systems for making them GDPR compliant",
          "2. Systems design and development of database schemas for multi-tenant software products",
          "3. Developed and maintained CI/CD pipelines and backend integration tests",
          "4. Developed frontend pages using Angular JS",
        ],
        companyUrl: "https://www.tcs.com",
        companyUrlTitle: "Link to Tata Consultancy Services",
      },
      {
        heading: "Keylane, Utrecht Netherlands",
        position: "Java Developer",
        fromTo: "From: 2014 To: 2016",
        keyResponsibilities: [
          "1. Developed Rest API driven web services for white label insurance softwares",
          "2. Designed database schemas for multi-tenant backend systems",
          "3. Developed Java based ETL tool to onboard new insurance companies to migrate their customer databases",
        ],
        companyUrl: "https://keylane.com",
        companyUrlTitle: "Link to Keylane",
      },
      {
        heading: "Infosys Limited, Bangalore India",
        position: "Java Developer",
        fromTo: "From: 2012 To: 2014",
        keyResponsibilities: [
          "Developed Restful API web services for digital transformation of large scale systems to handle the retail transactions of Sears Holding Corporation, North America",
        ],
        companyUrl: "https://www.infosys.com/de",
        companyUrlTitle: "Link to Infosys Limited",
      },
    ],

    education: [
      {
        heading: "Post Graduate Training",
        degree: "Degree: Training in Software Engineering",
        fromTo: "From: 2011 To: 2012",
        instLink:
          "https://www.infosys.com/careers/graduates/global-education-center.html",
        instLinkTitle: "Link to Infosys, Global Education Center",
      },
      {
        heading: "Bachelor of Technology",
        degree:
          "Degree: Bachelor of Technology, Major in Electrical Engineering and Minor in Computer Science and Electronics",
        fromTo: "From: 2007 To: 2011",
        instLink:
          "https://drive.google.com/file/d/1GpsfsApbXvMq_qN4hRIMW25GIlVQ5SgW/view?usp=share_link",
        instLinkTitle: "Download Anabin Certificate",
      },
    ],
  };
  render() {
    const title =
      "Hi, I am Sourav and I am a Software Engineer, based in Hamburg Germany.";
    const title_2_1 = "Specialised in backend ";
    const title_2_2 = "engineering and infrastructure";

    const title_1_1 = "9+ years";
    const title_1_2 = " of experience";

    const title_3_1 = "Open source ";
    const title_3_2 = "contributor";
    return (
      <div>
        <Card level={200}>
          <div className="site-div-float-left">
            <img
              src={require("../images/sourav.png")}
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

        <Card id="site-overview-core-competencies" level={200}>
          <div className="site-tab-headline">Core Competencies</div>
          <Divider />
          <Row>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-competencies-icon-name-col-spacer">
                Event driven microservices
              </div>
            </Column>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-competencies-icon-name-col-spacer">
                AWS and Azure
              </div>
            </Column>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-competencies-icon-name-col-spacer">
                Managing highly scalable and mission critical backend systems
              </div>
            </Column>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-competencies-icon-name-col-spacer">
                Kubernetes
              </div>
            </Column>
            <Column>
              <div className="site-tab-sub-headline site-tab-overview-competencies-icon-name-col-spacer">
                Fosters high collaboration and continuous feedback
              </div>
            </Column>
          </Row>
        </Card>

        <Card id="site-overview-skills-matrix" level={200}>
          <div className="site-tab-headline">Software Skills</div>
          <Divider />
          <Row>
            <SkillTypeColumn skillType="Language" />
            {this.state.languageSkills.map((skill) => (
              <SkillColumn
                skillIcon={skill.skillIcon}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </Row>

          <br />

          <Row>
            <SkillTypeColumn skillType="Framework" />
            {this.state.frameworkSkills.map((skill) => (
              <SkillColumn
                skillIcon={skill.skillIcon}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </Row>

          <br />

          <Row>
            <SkillTypeColumn skillType="Middleware" />
            {this.state.middlewareSkills.map((skill) => (
              <SkillColumn
                skillIcon={skill.skillIcon}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </Row>

          <br />

          <Row>
            <SkillTypeColumn skillType="DBs & Storage" />
            {this.state.dbSkills.map((skill) => (
              <SkillColumn
                skillIcon={skill.skillIcon}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </Row>

          <br />

          <Row>
            <SkillTypeColumn skillType="Infrastructure" />
            {this.state.infraSkills.map((skill) => (
              <SkillColumn
                skillIcon={skill.skillIcon}
                skillName={skill.skillName}
                key={skill.skillName}
              />
            ))}
          </Row>
        </Card>

        <Card id="site-overview-work-experience" level={200}>
          <div className="site-tab-headline">Work Experiences</div>
          <Divider />
          <Box id="site-overview-work-experience-box">
            <div id="site-overview-work-experience-accordion-wrapper-div">
              {this.state.workExp.map((exp) => (
                <WorkExpAccordion
                  heading={exp.heading}
                  position={exp.position}
                  fromTo={exp.fromTo}
                  keyResponsibilities={exp.keyResponsibilities}
                  companyUrl={exp.companyUrl}
                  companyUrlTitle={exp.companyUrlTitle}
                  key={exp.heading}
                />
              ))}
            </div>
          </Box>
        </Card>

        <Card id="site-overview-education" level={200}>
          <div className="site-tab-headline">Education</div>
          <Divider />
          <Box id="site-overview-education-box">
            <div id="site-overview-education-accordion-wrapper-div">
              {this.state.education.map((degree) => (
                <EducationDegreeAccordion
                  heading={degree.heading}
                  degree={degree.degree}
                  fromTo={degree.fromTo}
                  instLink={degree.instLink}
                  instLinkTitle={degree.instLinkTitle}
                  key={degree.heading}
                />
              ))}
            </div>
          </Box>
        </Card>
      </div>
    );
  }
}

export default TabOverviewContent;
