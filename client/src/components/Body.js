function Body() {
    return (
      <div id = "back" styles={{ backgroundImage: "./images/background.png" }}> 
<div class="row">
  <div class="col-sm-2">
    <div class="card text-center">
    <img src="/images/logo.png" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <a href="#" class="btn btn-outline-success">View Reports</a>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card text-center">
    <img src="/images/logo.png" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <a href="#" class="btn btn-outline-success">Inspect Property</a>
      </div>
    </div>
  </div>
</div>

</div>
      
    );
  }
  
  export default Body;