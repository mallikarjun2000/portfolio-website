import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { MdWorkOutline } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function WorkComponent() {
  return (
    <Box h={"90vh"}>
      <Text fontSize='2rem' fontFamily='sans-serif' letterSpacing='4px' m='2'>
        Work and Education
      </Text>
      <Box>
        <VerticalTimeline
          animate={true}
          layout='1-column-left'
          lineColor='lightblue'
        >
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date='2022 - present'
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3
              className='vertical-timeline-element-title'
              style={{ fontSize: "1.5rem" }}
            >
              Software Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Hyderabad, India
            </h4>
            <p>
              Developed console interface for a machine learning platform,
              enabling users to seamlessly interact, mange and monitor AWS
              resources, LLMS and builds for top the global news, finance, legal
              and information services company.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2021 - 2012'
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className='vertical-timeline-element-title'>
              Junior Software Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Hyderabad, India
            </h4>
            <p>
              Migration of Angular Application, Streamlined application
              development established new modules, routing, and components while
              following clean code practices which results in increasing
              development efficiency.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--work'
            date='2020 - 2021'
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdWorkOutline />}
          >
            <h3 className='vertical-timeline-element-title'>
              Associate Software Engineer
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Hyderabad, India
            </h4>
            <p>
              Created a Dashboard for Business Analysis Team that gives
              meaningful insights to data that will be loaded into grids. Data
              can be sliced, filtered and edited based on various parameters.
              User Experience, Web developement, SQL, ETL, Power BI, Azure
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='July 2017 - July 2021'
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              CMR College of Engineering and technologies
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Bachelors of Technology
            </h4>
            <p>Computer Science and Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className='vertical-timeline-element--education'
            date='November 2012'
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className='vertical-timeline-element-title'>
              Sri Chaitanya Junior College
            </h3>
            <h4 className='vertical-timeline-element-subtitle'>
              Maths, Physics and Chemistry
            </h4>
            <p>EAMCET Rank - 9869</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<FaRegStar />}
          />
        </VerticalTimeline>
      </Box>
    </Box>
  );
}
