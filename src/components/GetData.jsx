import React from 'react'
export default function 
(props) {
  return(
    <>
<div class="card d-inline-block my-2 " style={{width:" 18rem"}}>
<div className='container text-center '>
<img src="..." class="card-img-top" alt="..."/>
  <div class="row ">
    <div class="col">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{props.title}</p>
    <p class="card-text">{props.price}</p>
    <a href="/#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
  
    </div>
</div>
</div>
</>
  )
}
