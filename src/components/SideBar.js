import React from 'react'
function SideBar() {
  return(
<>



<div class="deznav">
<div class="deznav-scroll">
    <ul class="metismenu" id="menu">
        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i class="flaticon-381-networking"></i>
                <span class="nav-text">Dashboard</span>
            </a>
            
        </li>
      
    </ul>
    <div class="drum-box">
        <img src="images/drump.png" alt/>
        <p class="fs-18 font-w500 mb-4">Start Plan Your Workout</p>
        <a class href="javascript:;">Check schedule
        <svg class="ml-3" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12L6 6L0 0" fill="#BCD7FF"/>
        </svg>
        </a>
    </div>
    <div class="copyright">
        <p><strong>Steve Fitness Admin Dashboard</strong> ©All Rights Reserved</p>
        <p>by Steve</p>
    </div>
</div>
</div>
</>
  )
}


export default SideBar
