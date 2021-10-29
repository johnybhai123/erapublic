import React from 'react'
import { Img } from '../Strongfoundation/Strongfoundation.element'
import { Main } from './Teachingmethodology.element'
function Teachingmethodlogy() {
    return (
      <Main>
        <h1 style={{ color: "green" }}>Teaching Methodlogy</h1>
        <hr />
        <Img
          src="https://drive.google.com/file/d/1pfum9C6Je5v9bre9Z2FNesIC9cv2j-wI/view?usp=sharing"
          alt=""
        />
        <p style={{ padding: "40px 0 0 0" }}>
          We strongly believe that for a child to achieve best in life there
          should be a complete coordination and cooperation of Teachers,
          Students and Parents of teachers, amongst each other. We impart
          education by integrating proven, world-class teaching methods with
          modern infrastructure and technology Our curriculum emphasizes on
          activity-based learning for which we create a suitable environment and
          focus on learning needs of each child rather than a predetermined set
          of pattern. We add further value by inculcating a strong sense of
          discipline and hard work in our kids; thus nurturing them to be future
          ready to face global challenges. The school lays strong emphasis on
          constructivist approach where the child is encouraged to be the
          architect of her/his own knowledge and Mentor act as guides rather
          than instructors.
        </p>
      </Main>
    );
}

export default Teachingmethodlogy
