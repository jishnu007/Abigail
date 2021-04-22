import React from "react"
import Person from "./Person"
import image1 from "../Images/01-1.png"
import image2 from "../Images/03-1.png"

function Team() {
  const desc1 = (
    <p>
      A CA Finalist having 15+ years of overall experience in which 9 years UAE
      experience.
      <br />
      <br /> Having a great exposure to different kinds of business
      organizations.
      <br /> <br />
      Taking all the hurdles in life as a stepping stone and moving forward with
      more energy. Worked as Auditor , Management Accountant and Accounts
      manager in the recent past in UAE in well reputed organization.
    </p>
  )
  const desc2 = (
    <p>
      Having 18+ years of overall experience in various organization.
      <br /> <br />
      Very vigilant and active in all the accounting areas.
      <br />
      <br /> Worked as Finance manager and single handedly handled all the
      operations in the last organization.
    </p>
  )
  return (
    <div className="team-section-inner">
      <Person
        id="1"
        name="Lejesh Nair"
        role="Managing Partner"
        image={image1}
        desc={desc1}
      />
      <Person
        id="2"
        name="Riyaz Moosa"
        role="Managing Partner"
        image={image2}
        desc={desc2}
      />
    </div>
  )
}

export default Team
