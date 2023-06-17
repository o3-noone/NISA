import React from 'react'
export default function Section1() {
  return (
    <div className='section1'>
        <div className="container">
            <ul className='sec1Ul'>
                <li className='sec1ItemLeft'>
                    <h2>
                    Nisa boosts team product excellence
                    </h2>
                    <p>Nisa is constantly improving to move forward through dashboard, statistics, data and verify and superior human resources.</p>
                    <button>Get Started<i class="fa-solid fa-arrow-right"></i></button>
                </li>
                <li className='sec1ItemRight'>
                    <div className="sec1DivImg">
                        <img src="/public/images/sec1img.png" alt="images" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
