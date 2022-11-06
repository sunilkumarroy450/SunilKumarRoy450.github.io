import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styled from "styled-components";

const CardHead = styled.h3`
  margin-bottom: 5px;
`;

const CardSubHead = styled.h4`
  margin-bottom: 10px;
  color: #131010;
  font-weight: 600;
`;

const CardDetailText = styled.li`
  color: #141313;
  margin: 5px;
`;

const Responsibilities = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  letter-spacing: 0.2ch;
`;

function ChronoTimeline({ currentTheme }) {
  const items = [
    {
      title: "March 2022 - Present",
      cardSubtitle: "Masai School",
      cardTitle: "Full Stack Web Development",
      cardDetailedText: ["A full stack web development course."],
    },
    {
      title: "June 2017 - November 2021",
      cardSubtitle: "A private Coaching and School ",
      cardTitle: "Teacher and Tutor",
      cardDetailedText: ["Tutor for a nobel cause and teaching as a profession."],
    },
    {
      title: "May 2013 - May 2017",
      cardSubtitle: "B. R. Ambedkar Bihar University,Muzaffarpur,Bihar",
      cardTitle: "B.Sc Physics Honours",
      cardDetailedText: [
        "The Courses offered by the University are approved from University Grants Commission (UGC). The university is a premier institution of teaching and learning in the city and offers various full-time and part-time courses ranging from undergraduate to postgraduate and research level. The university also acts as an affiliated link between several colleges and institutes located across the state in providing higher education.",
      ],
    },
    // {
    //   title: "June 2020- July 2020",
    //   cardTitle: "Web Development Intern",
    //   cardSubtitle: "CrackMbaInterview",
    //   cardDetailedText: [
    //     "Revamped the existing website.",
    //     "Updated WordPress and plugins.",
    //     "Integrated authentication and authorization.",
    //     "Integrated payment gateway.",
    //   ],
    //   internship: true,
    // },
    // {
    //   title: "January 2020- June 2020",
    //   cardTitle: "Digital Marketing and Web Development Intern",
    //   cardSubtitle: "Cubicode Digital Media LLP",
    //   cardDetailedText: [
    //     "Obtained requirements from clients.",
    //     "Built websites with WordPress.",
    //     "Maintained websites with WordPress and HTML/CSS.",
    //     "Keyword research for SEO.",
    //   ],
    //   internship: true,
    // },
    {
      title: "May 2011- June 2013",
      cardSubtitle: "M.S.M Samta College",
      cardTitle: "Pre-University College",
      cardDetailedText: [
        "An intermediate course of two years duration, conducted by boards of state education.",
      ],
    },
  ];

  return (
    <VerticalTimeline animate={false} position="left">
      {items?.map((history) => (
        <EducationTimelineCard
          key={history.school}
          currentTheme={currentTheme}
          {...history}
        />
      ))}
    </VerticalTimeline>
  );
}

function EducationTimelineCard({
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  internship,
  currentTheme,
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        textAlign: "left",
        background: "#ffffff",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
      date={title}
      iconStyle={{
        background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
        color: "#1a1111",
        transform: "scale(0.4)",
      }}
    >
      <CardHead
        style={{ color: "#000000" }}
        className="vertical-timeline-element-title"
      >
        {cardTitle}
      </CardHead>
      <CardSubHead
        style={{ color: "#393e46" }}
        className="vertical-timeline-element-subtitle"
      >
        {cardSubtitle}
      </CardSubHead>
      {internship && (
        <Responsibilities>
          <b>Responsibilities</b>
        </Responsibilities>
      )}

      <ul>
        {cardDetailedText.map((item) => (
          <CardDetailText key={item.title}>{item}</CardDetailText>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export { ChronoTimeline };
