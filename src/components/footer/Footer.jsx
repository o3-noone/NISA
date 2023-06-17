import React from 'react'
import "./footer.css"
export default function Footer() {
  return (
    <div className='Footer'>
      <div className="container">
        <ul className="FooterUl">
          <li className="FooterItemLeft">
            <h3>Build a beautiful product with align</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus euismod fusce pulvinar amet. Sollicitudin nullam mauris tellus accumsan, phasellus. Ut ac consequat arcu non aliquam. </p>
            <div className="FooterLink">
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#"><i class="fa-brands fa-google-plus-g"></i></a>
              <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
          </li>
          <li className="FooterItemRight">
            <ul className="FooterRightList">
              <li className="FooterRightItem">
                <h4>Overview</h4><br />
                <a href="#">Home</a><br /><br />
                <a href="#">About </a><br /><br />
                <a href="#">Blog </a><br /><br />
                <a href="#">Blog post</a><br /><br />
                <a href="#">Team Mamber</a>
              </li>
              <li className="FooterRightItem">
                <h4>Pages</h4><br />
                <a href="#">Contact </a><br /><br />
                <a href="#">Customer Story </a><br /><br />
                <a href="#">Login</a><br /><br />
                <a href="#">Register</a><br /><br />
                <a href="#">Style Guide</a><br /><br />
                <a href="#">Changelog</a><br /><br />
                <a href="#">Licance</a><br /><br />
                <a href="#">404</a><br /><br />
                <a href="#">Password</a>
              </li>
              <li className="FooterRightItem">
                <h4>Connect:</h4><br />
                <a href="#">+001 234 567 89</a><br /><br />
                <a href="#">hellow@nesa.com</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="FooterBottomUl">
          <li className="FooterBottomItem1">
            <img src="/public/images/LogoBottom.svg" alt="logo" />
            <p>@ template by </p><span> <p>Flowbass</p></span>- <p>Powered by</p><span>ui8</span>
          </li>
          <li className="FooterBottomItem2">
            <p>Term of services privacy policy</p>
          </li>
          <li className="FooterBottomItem">
            <a href="#">Overview</a>
            <a href="#">Pages</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
