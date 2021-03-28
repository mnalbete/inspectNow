import './condo.css';
import { NavLink } from 'react-router-dom'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import api from '../utils/api';

const printDocument = () => {
  const input = document.getElementById('divToPrint');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

function Condo() {
  const history = useHistory();
const pathname = history.location.pathname;
const pathnameArray = pathname.split("/");
const propertyId = pathnameArray[3];
const [form, setForm] = useState([]);
const [prevForm, setPrevForm] = useState([]);
// useEffect(() => {
//   loadForm(propertyId)
// }, [])

 const loadForm = (propertyId) => {

  let p = api.getOneProperty(propertyId).then(res => {return res.data[0]});
  // console.log(p);
  
  p.then(function(result) {
    // console.log(result.address) // "Some User token"
    setPrevForm(result.address)
  })
  
  // console.log(prevForm);

  };

  loadForm(propertyId)





    // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.


function saveForm(event) {
  event.preventDefault();
  // console.log(propertyId + " " + form.address);
  api.saveProperty(propertyId, {address: form.address})
    .then(
      // console.log(res)
      loadForm(propertyId)
      )
    .catch(err => console.log(err));
}

function handleInputChange(event) {
  const { name,value } = event.target;
  setForm({...form, [name]: value})
};
  return (
    
    <div>
    <main>
      <nav>
        <div className="nav-header">
          <figure id="logo">
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
    <div>
      <header>
     <NavLink style={{color: "rgb(0, 212, 0)"}} to="/"> Home </NavLink>
      <a href="#" class="btn btn-outline-success" onClick={printDocument}>Export to PDF</a>
      <button className="btn btn-primary" onClick={saveForm}>Save </button>
      </header>
      
    </div>
    
    <div className="container" id="divToPrint">
          <section id="section-1">
            <h1>Property INFO&nbsp;&nbsp;</h1>
            <mainpic>
            <img src="/images/insertimage.png" alt="" />
          </mainpic>
          <h5>Note: only this Address field is funtioning</h5>
        <input onChange= {handleInputChange} name="address" type="email" class="form-control" id="info" aria-describedby="emailHelp" placeholder={prevForm? prevForm:"Type address here"}></input>
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
        Save Property INFO
      </button>
        </div>
            </section>
          <section id="section-2">
            <h1>Overview&nbsp;&nbsp;</h1>
            <h3>THE SCOPE OF THE INSPECTION</h3>
            <h5>
            Please note that this is a visual inspection. All components designated for inspection in the Standards of Practice are inspected,
except as may be noted in the “Limitations of Inspection” sections within this report. It is the goal of the inspection to put a home buyer in a better position to make a buying decision. Not all improvements will be identified during this inspection. Unexpected repairs should still be anticipated. The inspection should not be considered a guarantee or warranty of any kind. Please refer to the pre-inspection contract for a full explanation of the scope of the inspection.
            </h5>
            
            </section>            
          <section id="section-3">
            <h1>Frontdoor&nbsp;&nbsp;</h1>
        <div> 
        <input type="checkbox" name="test"/>peephole with knocker&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Swing&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Latching&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>handle&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Scratches&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Door stop&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Self-closing Hinges&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Lights above front door&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Wall around front door&nbsp;&nbsp; 
            <br></br><br></br>Note
        </div> 
        <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 

            
            </section>
          <section id="section-4">
            <h1>HVAC&nbsp;&nbsp;</h1>
            <input type="checkbox" name="test"/>Replace Filter&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Thermostat Setting&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>heating&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>cooling&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>register alignment&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
          <section id="section-5">
            <h1>Ceiling&nbsp;&nbsp;</h1>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Molding&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Diffuser alignment&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Sprinklers&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Smoke detectors&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
          <section id="section-6">
            <h1>Kitchen&nbsp;&nbsp;</h1>
            <h3>Lights / Outlets&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Ceiling lights&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Under Cabinet lights&nbsp;&nbsp;
            <input type="checkbox" name="test"/>GFCI&nbsp;&nbsp;
            <h3>Dishwasher&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Air Gap&nbsp;&nbsp;
            <input type="checkbox" name="test"/>operational&nbsp;&nbsp;
            <input type="checkbox" name="test"/>DHigh loop&nbsp;&nbsp;
            <h3>Microwave&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>clean&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Heating&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Time set&nbsp;&nbsp;
            <input type="checkbox" name="test"/>filter&nbsp;&nbsp;
            <input type="checkbox" name="test"/>lighting&nbsp;&nbsp;
            <h3>Fridge&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Ice Maker&nbsp;&nbsp;
            <input type="checkbox" name="test"/>water&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Dents&nbsp;&nbsp;
            <h3>Ranges&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Anti-Tip&nbsp;&nbsp;
            <input type="checkbox" name="test"/>operational&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Drawer&nbsp;&nbsp;
            <input type="checkbox" name="test"/>oven light&nbsp;&nbsp;
            <input type="checkbox" name="test"/>time set&nbsp;&nbsp;
            <h3>Sink&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Faucet&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Sprayer&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Hot and Cold&nbsp;&nbsp;
            <input type="checkbox" name="test"/>leaks&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Garbage Disposal&nbsp;&nbsp;
            <h3>Counter&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>secured&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Check Edges&nbsp;&nbsp;
            <input type="checkbox" name="test"/>damages&nbsp;&nbsp;
            <h3>Cabinet&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Doors loose aligned damages&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>shelves loose hardware&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Paint Touch up&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Lazy Susan - Stable on Tracks&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Garbage Disposal&nbsp;&nbsp;
            <h3>Wall/Ceiling/Floor&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <input type="checkbox" name="test"/>damages&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Stain&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
          <section id="section-7">
            <h1>Bathroom&nbsp;&nbsp;</h1>
            <h3>Bathroom Door&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <input type="checkbox" name="test"/>door stop&nbsp;&nbsp;
            <input type="checkbox" name="test"/>handle&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Latching&nbsp;&nbsp;
            <input type="checkbox" name="test"/>strike plate&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Scratches&nbsp;&nbsp;
            <h3>Lights / Outlets&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>lights&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Exhaust Fan&nbsp;&nbsp;
            <input type="checkbox" name="test"/>heat lamp&nbsp;&nbsp;
            <h3>Microwave&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>clean&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Heating&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Time set&nbsp;&nbsp;
            <input type="checkbox" name="test"/>filter&nbsp;&nbsp;
            <input type="checkbox" name="test"/>lighting&nbsp;&nbsp;
            <h3>Fridge&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Ice Maker&nbsp;&nbsp;
            <input type="checkbox" name="test"/>water&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Dents&nbsp;&nbsp;
            <h3>Ranges&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Anti-Tip&nbsp;&nbsp;
            <input type="checkbox" name="test"/>operational&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Drawer&nbsp;&nbsp;
            <input type="checkbox" name="test"/>oven light&nbsp;&nbsp;
            <input type="checkbox" name="test"/>time set&nbsp;&nbsp;
            <h3>Sink&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Faucet&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Sprayer&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Hot and Cold&nbsp;&nbsp;
            <input type="checkbox" name="test"/>leaks&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Garbage Disposal&nbsp;&nbsp;
            <h3>Counter&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>secured&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Check Edges&nbsp;&nbsp;
            <input type="checkbox" name="test"/>damages&nbsp;&nbsp;
            <h3>Cabinet&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Doors loose aligned damages&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>shelves loose hardware&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Paint Touch up&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Lazy Susan - Stable on Tracks&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Garbage Disposal&nbsp;&nbsp;
            <h3>Wall/Ceiling/Floor&nbsp;&nbsp;</h3>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <input type="checkbox" name="test"/>damages&nbsp;&nbsp;
            <input type="checkbox" name="test"/>Stain&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
          <section id="section-8">
          <h1>Bedroom&nbsp;&nbsp;</h1>
            <input type="checkbox" name="test"/>door: handle, Latching, Scratches, Door stop, Strike plate&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Windows: Screen, sill, Blinds&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Switches&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>lights&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Outlet&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Wall and ceiling&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>flooring&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Stain&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
            <section id="section-9">
            <h1>Living Dining&nbsp;&nbsp;</h1>
            <input type="checkbox" name="test"/>Switches&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>lights&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Outlet&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Molding&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Trim&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Wall and ceiling&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Paint&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>flooring&nbsp;&nbsp;
            <br></br>
            <input type="checkbox" name="test"/>Stain&nbsp;&nbsp;
            <br></br><br></br>Note
            <textarea style={{width: '100%', maxWidth: '100%'}} defaultValue={""} />
        <div> 
        <div className="side-by-side"> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
        <div> 
        <img src="/images/uploadimage.png" alt="" /> 
        </div> 
      </div>
        </div> 
            </section>
    </div>
  </div>
    );
  }

export default Condo;
