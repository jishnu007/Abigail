import React from "react"
import Slider from "react-slick"
import "./ServicesSlider.css"
import ServiceSlide from "./ServiceSlide"
import ServiceSliderAccImg from "../Images/accounting-and-bookkeeping-services.jpg"
import VatAdvisoryImg from "../Images/vat-calc-img.jpg"
import BusinessPropImg from "../Images/accounting-bookkeeping.jpg"
import InternalAuditImg from "../Images/Internal-Audit-Communication-Tips-Main.jpg"
import BudgetPreparationImg from "../Images/budget-allocation.jpg"
import MangConsImg from "../Images/management-consultancy-1521692967-3738392.jpeg"

function ServiceSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  const content_accounting_and_bookkeeping = (
    <p>
      We offer individuals and businesses a variety of accounting services
      tailored to their special needs.
    </p>
  )
  const content_vat_advisory = (
    <p>
      We provide support for VAT registration. We Understand the business
      transaction & establish the applicability of VAT
    </p>
  )
  const content_business_proposal = (
    <p>
      We helping in creating business proposals that will help you close more
      deals, make more sales and crush your business goals.
    </p>
  )
  const content_budget_prep = (
    <p>
      We help in preparing budgets that best suites your organization depending
      upon your Strengths, Weakness, Opportunities and possible threats.
    </p>
  )
  const content_internal_audit = (
    <p>
      Our approach is to deliver an internal audit that is risk-based, industry
      specific, and customized to your company’s operational size and structure.
    </p>
  )
  const content_management_consultancy = (
    <p>
      We are a team of experts with in-depth knowledge of business functions. We
      aim to provide solutions that can be customised and aligned with our
      client demands.
    </p>
  )
  return (
    <div className="outer-container">
      <Slider {...settings}>
        <ServiceSlide
          title="Accounting & Book keeping"
          content={content_accounting_and_bookkeeping}
          icon="acc-book"
          imageurl={ServiceSliderAccImg}
        />
        <ServiceSlide
          title="VAT Advisory"
          content={content_vat_advisory}
          icon="vat-icon"
          imageurl={VatAdvisoryImg}
        />
        <ServiceSlide
          title="Business Proposal"
          content={content_business_proposal}
          icon="business-prop2"
          imageurl={BusinessPropImg}
        />
        <ServiceSlide
          title="Budget Preparation"
          content={content_budget_prep}
          icon="budget"
          imageurl={BudgetPreparationImg}
        />
        <ServiceSlide
          title="Internal Auditing"
          content={content_internal_audit}
          icon="audit2"
          imageurl={InternalAuditImg}
        />
        <ServiceSlide
          title="Management Consultancy"
          content={content_management_consultancy}
          icon="consultancy1"
          imageurl={MangConsImg}
        />
      </Slider>
    </div>
  )
}

export default ServiceSlider
