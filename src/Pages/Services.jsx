import React, { useRef } from "react"
import Navbar from "../Components/Navbar"
import HeaderBox from "../Components/HeaderBox"
import BreadcrumbImg from "../Images/aboutus-image1.jpg"
import "./Services.css"
import ContactForm from "../Components/ContactForm"
function Services() {
  var sectionStyle = {
    background: `url(${BreadcrumbImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  const inputRef = useRef()
  // let myDiv = document.getElementById(`myDiv`)

  var myScrollFunc = function () {
    var y = window?.scrollY
    if (y === undefined) {
      return
    } else {
      if (y >= 200) {
        if (inputRef.current) {
          inputRef.current.className = inputRef.current.className
            ? "myDiv show"
            : ""
        }
      } else {
        if (inputRef.current) {
          inputRef.current.className = inputRef.current.className
            ? "myDiv hide"
            : ""
        }
      }
    }
  }

  window.addEventListener("scroll", myScrollFunc)
  return (
    <div className="service-page-outer-container">
      <Navbar />
      <HeaderBox sectionStyle={sectionStyle}>Services</HeaderBox>
      <div className="service-page-container">
        <div className="serice-page-content">
          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">Accounting & BookKeeping</h2>
              <p>
                We offer individuals and businesses a variety of accounting
                services tailored to their special needs. We take pride in
                providing one of the most focused and quality accounts
                outsourcing services in the U.A.E. to small and medium
                enterprises. Our accounting team consists of young hand picked
                accounting professionals who are qualified, skilled and
                proactive. We are flexible in our approach, and can work either
                on-site or off-site to cater to the client’s requirement at a
                fraction of the cost when compared to a full-time employee
              </p>
            </div>
          </div>

          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">VAT Advisory</h2>
              <p>
                We provide support for VAT registration
                <br />
                Understand the business transaction & establish the
                applicability of VAT
                <br />
                Compute the final VAT liability and assist in filling VAT
                returns on a timely manner
                <br />
                Organize VAT related training and customized workshops <br />
                Flab the potential impact of VAT compliance on business <br />
                Support any changes as and when required due to changes in the
                legislation.
              </p>
            </div>
          </div>
          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">Business Proposal</h2>
              <p>
                A well-written business proposal can often mean the difference
                between winning or losing a prospective client. And in today’s
                tough times, with contracts dwindling, it’s more important than
                ever to have a standout proposal. But, what are business
                proposals? How do you make them? What do you include in a
                business proposal? How long should a business proposal be? We
                answer all of these questions and more by helping in creating
                business proposals that will help you close more deals, make
                more sales and crush your business goals.
              </p>
            </div>
          </div>
          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">Budget Preparation</h2>
              <p>
                A vast majority of people avoid having a budget because it’s
                “extra work”. Often time people believe that budgeting also
                dictates that you are no longer allowed to have fun and enjoy
                things. Let me tell you from over a decade of budgeting this is
                completely false, honestly, it does the exact opposite. What
                budgeting truly accomplishes is it clearly shows you how to
                allocate your money. It provides you with a detailed
                understanding of what you can afford to spend your money on and
                knowing your financial limitations. Budgeting will save you the
                grief of overspending and possibly cause you to climb into more
                debt, something many of us struggle with. New and emerging
                businesses need to present a convincing business plan when
                raising capital. Because these businesses may have little or no
                history, the managers and owners must demonstrate convincingly
                that the company has a clear strategy and a realistic plan to
                make profit. A coherent, realistic budget forecast is an
                essential component of a business plan.. We help in preparing
                budgets that best suites your organization depending upon your
                Strengths, Weakness, Opportunities and possible threats.
              </p>
            </div>
          </div>
          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">
                Internal Auditing & Risk Management
              </h2>
              <p>
                Our approach is to deliver an internal audit that is risk-based,
                industry specific, and customized to your company’s operational
                size and structure. We focus on first understanding the business
                and risks involved and concentrate our efforts to where they
                matter the most.
              </p>
            </div>
          </div>
          <div className="aboutus-section">
            <div className="aboutus-content">
              {/* <h4></h4> */}
              <h2 className="aboutus-title">Management Consultancy</h2>
              <p>
                Running a business takes time and effort, a lot of blood, sweat
                and tears. Add to that the challenges of keeping up with
                changing technology, evolving customer requirements, new
                regulations and competition, employee issues; well, it’s almost
                an endless list on the road to get the results and success you
                strive for
              </p>
              <p>
                As the owner or manager of your business, you likely can’t see
                the forest for the trees. You’re immersed in the daily
                operations of the business, so it’s difficult for you to focus
                on the cause of an issue to reach a resolution. A business
                consultant can look at your situation objectively, without
                prejudice or getting caught up in the personal or political
                aspects of it. They can analyze the facts and offer solutions
                without getting sidetracked. The business consultant has
                probably helped other companies work through similar situations,
                so they can draw from that experience to benefit your business.
              </p>
              <p>
                Instead of trying to do it all yourself, or hire employees who
                you hope will be able to do it for you, why not hire a
                consultant who has the expertise and experience to get your
                business on track?
              </p>
            </div>
          </div>
        </div>
        <div className="myDiv hide" id="myDiv" ref={inputRef} height="100px">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Services
