import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerwidth flexCenter c-container">
        
        {/* Left Section: Contact Options */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">We are always ready to help by providing the best service.
          
          </span>

          <div className="flexColStart contactModes">
            {/* First row */}
            <div className="flexStart row">
              {/* Call */}
              <div className='flexColCenter mode'>
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Call Now</div>
              </div>

              {/* Chat */}
              <div className='flexColCenter mode'>
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Chat Now</div>
              </div>
            </div>

            {/* Second row */}
            <div className="flexStart row">
              {/* Video Call */}
              <div className='flexColCenter mode'>
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Video Call Now</div>
              </div>

              {/* Message */}
              <div className='flexColCenter mode'>
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart details">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexColCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
