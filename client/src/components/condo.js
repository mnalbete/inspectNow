import '../App.css';



function Condo() {
  return (
    
    <div>
    <main>
      <nav>
        <div className="nav-header">
          <figure>
            <img src="/images/logo.png" alt="" />
          </figure>
        </div>
        <ul>
        <li><a href="#section-1">Property INFO</a></li>
        <li><a href="#section-2">Overview</a></li>
        <li><a href="#section-3">Frontdoor</a></li>
        <li><a href="#section-4">HVAC</a></li>
        <li><a href="#section-5">Ceiling</a></li>
        <li><a href="#section-6">Kitchen</a></li>
        <li><a href="#section-7">Bathroom</a></li>
        <li><a href="#section-8">Bedroom</a></li>
        <li><a href="#section-9">Living Dining</a></li>
        </ul>
      </nav>
    </main>
    <header>Header Centered</header>
    <div className="container">
          <section id="section-1">
            <h1>Property INFO&nbsp;&nbsp;</h1>
        <input type="email" class="form-control" id="info" aria-describedby="emailHelp" placeholder="Type Adress Here"></input>
        <br/>
       
        <br/>
        <div htmlFor="info" id="info">
        This confidential report is prepared exclusively for:
        </div>
        <input type="text" id="info" className="form-control" />
        <br />
        <br />
        <div htmlFor="info" id="info">
        Prepared By:
        </div>
        <input type="text" id="info" className="form-control" />
        <br />
        <br />
        <div htmlFor="info" id="info">
        Report Number:
        </div>
        <input type="text" id="info" className="form-control" />
        <br />
        <br />
        <div htmlFor="info" id="info">
      <button onclick="{this.save}">
        Save
      </button>
        </div>
            </section>
          <section id="section-2">
            <h1>Overview&nbsp;&nbsp;</h1>
            </section>
          <section id="section-3">
            <h1>Frontdoor&nbsp;&nbsp;</h1>
            <input type="checkbox" name="test" ripple defaultChecked/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>test&nbsp;&nbsp;
            </section>
          <section id="section-4">
            <h1>HVAC&nbsp;&nbsp;</h1>
            </section>
          <section id="section-5">
            <h1>Ceiling&nbsp;&nbsp;</h1>
            </section>
          <section id="section-6">
            <h1>Kitchen&nbsp;&nbsp;</h1>
            </section>
          <section id="section-7">
            <h1>Bathroom&nbsp;&nbsp;</h1>
            </section>
          <section id="section-8">
            <h1>Bedroom&nbsp;&nbsp;</h1>
            </section>
            <section id="section-9">
            <h1>Living Dining&nbsp;&nbsp;</h1>
            </section>
    </div>
  </div>
    );
  }

export default Condo;