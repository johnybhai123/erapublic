import React from 'react'
import { Img } from '../Strongfoundation/Strongfoundation.element'
import { Main } from './Md.element'
function Md() {
    return (
      <Main>
        <h1 style={{ color: "green" }}>Managing Director</h1>
        <h5 style={{ color: "blue" }}>
          "Develop a passion for learning. If you do, you will never cease to
          grow”
        </h5>
        <hr />
        <Img
          src="https://icecube-eu-400.icedrive.io/thumbnail?p=eOQAdyfefd_mcp8kBzXTaKM.gc_A4rw2hUh2NIzP3feXag16AhnsEFqShmN.K3W_.WDtrpjgvtRb6a_1gE06YmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped"
          alt=""
        />
        <p style={{ padding: "40px 0 0 0" }}>
          {" "}
          The New Era Public School is a proud mission driven community
          providing a world class education, celebrating the fact that each
          student is different, as a person and as a learner. We believe that
          powerful learning and teaching occurs under a shared spirit of respect
          which creates a passionate schooling experience recognized for its
          warmth, energy and excellence. Here people are valued and can fulfil
          their potential both as teachers and learners. I strongly believe that
          education is a collaborative effort that involves professional
          administrators, committed teachers and motivated students. We dedicate
          ourselves as professional administrators in creating a dynamic
          education programme empowering the students in a global perspective.
          We are a group of diverse experiences and outlooks, committed to
          excellence in preparing learners for enriched opportunities worldwide.
          In short, learning at TNEPS is a wholesome package of attitude,
          challenge and opportunity
        </p>
      </Main>
    );
}

export default Md
