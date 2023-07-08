import React from 'react';
import AOS from 'aos';
function List(props){
  AOS.init();
    return(
        <>
        <div id={props.id} data-aos="zoom-in" data-aos-duration="1000">
        <div class="card" style={{with:"400px"}}>
         <img class="card-img-top" src={props.img4} alt="Card image" style={{widh:"100%",height:"200px"}}/>
         <div class="card-body">
          <div class="d-grid">
          <button type="button" class="btn btn-danger btn-block m-2">Watch Now</button>
         </div>
      <div class="d-grid">
      <button type="button" class="btn btn-danger btn-block">Add To Watch Later</button>
      </div>
        </div>
      </div>
      </div>
        </>
    )
}
export default List;