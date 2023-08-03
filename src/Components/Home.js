import React from 'react';
function Home(props){
    return(
        <>      
<div id={props.id1} class="carousel slide" data-bs-ride="carousel" >
<div class="carousel-indicators" >
  <button type="button" data-bs-target={props.id} data-bs-slide-to="0" ></button>
  <button type="button" data-bs-target={props.id} data-bs-slide-to="1" class="active"></button>
  <button type="button" data-bs-target={props.id} data-bs-slide-to="2"></button>
</div>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={props.img1} alt="Los Angeles" class="d-block" style={{width:"100%",height:"500px"}}/>
    <div class="carousel-caption">
    <h1  class="bg-dark">{props.caption}</h1>
    </div>
  </div>
  <div class="carousel-item">
    <img src={props.img2} alt="Chicago" class="d-block" style={{width:"100%",height:"500px"}}/>
    <div class="carousel-caption">
    <h1  class="bg-dark">{props.caption}</h1>
    </div> 
  </div>
  <div class="carousel-item">
    <img src={props.img3} alt="New York" class="d-block" style={{width:"100%",height:"500px"}}/>
    <div class="carousel-caption">
    <h1  class="bg-dark">{props.caption}</h1>
    </div>  
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target={props.id2} data-bs-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target={props.id2} data-bs-slide="next">
  <span class="carousel-control-next-icon"></span>
</button>
</div>
        </>
    )
}
export default Home;
