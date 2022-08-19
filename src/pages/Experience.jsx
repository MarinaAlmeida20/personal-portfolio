import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#FFCAD4">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#b5d6d6", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Web Developer - CodeYourFuture
          </h3>
          <h4 className="vertical-timeline-element-subtitle">London</h4>
          <p>
            Over the course of my studies I learnt many technologies used
            nowadays in most companies, I also learnt other skills such as face
            to face, and online, teamwork, communication, time management,
            problem solving, self led learning and self-motivation.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#ff7477", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Business Administrative Course - Gateway Qualifications Level 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hertfordshire Adult & Family Learning Service (HAFLS)
          </h4>
          <p>
            I learnt how to communicate in a work environment, exploring
            entrepreneurship, making and receiving calls.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#ff7477", color: "#fff" }}
          icon={<VolunteerActivismIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Volunteer Trustee, MSSC (Marine Society & Sea Cadets)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Cheshunt</h4>
          <p>
            Managed the organization's finances and assets, most of the time
            online. Working remotely and dealing with deadlines.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#b5d6d6", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            AAT - Foundation Certificate in Accounting, London
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Level 2</h4>

          <p>
            {" "}
            I learnt how to manage double entry bookkeeping, basic costing
            principles, and accounting software.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011"
          iconStyle={{ background: "#ff7477", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Service, Carrefour
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Brazil</h4>
          <p>
            I learned how to understand user problems, resolve those problems,
            and communicate those solutions effectively.
          </p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My Random High School, Random Place, Random State
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
