import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="July 2017 - July 2021" 
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>ABES Institute of Technology, Uttar Pradesh, India</h3>
          <p>Bachelor's of Technology in Information Technology</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="June 2020 - July 2020" 
        iconStyle={{background: "#77DD77", color: "#fff"}}
        icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Minerva Solutions, New Delhi, India</h3>
          <p>Software Engineer Intern</p>
      </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="July 2020 - November 2020" 
        iconStyle={{background: "#77DD77", color: "#fff"}}
        icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>HCL Tech, New Delhi, India</h3>
          <p>Research Intern</p>
      </VerticalTimelineElement>
      </VerticalTimeline>


      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="May 2021 - June 2022" 
        iconStyle={{background: "#77DD77", color: "#fff"}}
        icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Qualitest, Uttar Pradesh, India</h3>
          <p>Software Test Engineer</p>
      </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="September 2022 - January 2024" 
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Stevens Institute of Technology, New Jersey, United States of America</h3>
          <p>Master's of Science in Software Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element--education' 
        date="May 2023 - July 2023" 
        iconStyle={{background: "#77DD77", color: "#fff"}}
        icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>Infogen Labs Inc, California, USA</h3>
          <p>Software Developer Intern</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
  )
}

export default Experience;
