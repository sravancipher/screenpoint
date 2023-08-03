import React from 'react'
import img1 from './20.png';
import img2 from './21.png';
import img3 from './22.png';
import img4 from './23.png';
function Footer(){
    return(
        <>
          <p class="text-center">
          <span class="text-center m-2" style={{"color":"white"}}>Follow Me:</span>
          <a href="https://www.instagram.com/s_r_r_r_a_1/" target="_blank" class="m-1"><img style={{"width":"20px","height":"20px"}} src={img1}/></a>
          <a href="https://www.linkedin.com/in/sravan-potnuru-a431a0215" target="_blank" class="m-1"><img style={{"width":"20px","height":"20px"}} src={img2}/></a>
          <a href="https://github.com/sravancipher" target="_blank" class="m-1"><img style={{"width":"20px","height":"20px"}} src={img3}/></a>
          <a href="#" class="m-1" target="_blank" ><img style={{"width":"20px","height":"20px"}} src={img4}/></a>
          </p>
          <p class="text-center" style={{"color":"gray"}}>Copyright @ 2023 screepoint. All rights reserved</p> 
        </>
    )
}
export default Footer;