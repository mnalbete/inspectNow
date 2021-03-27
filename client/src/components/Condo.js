import "./condo.css";
import api from "../utils/api";


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import React, { useEffect, useState } from "react";
import {useHistory, NavLink} from 'react-router-dom'


function Condo() {
  const history = useHistory();
  const pathname = history.location.pathname;
  const pathnameArray = pathname.split("/");
  const propertyId = pathnameArray[3];
  const [form, setForm] = useState([]);

  useEffect(() => {
    loadForm()
  }, [])

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

  const [addressName, setAddress] = useState();
  const [ownerName, setOwnerName] = useState();
  const [preparsName, setPreparesName] = useState();
  const [reportNumber, setReportNumber] = useState();
  // front door
  const [frontDr_peep, setFrontDr_peep] = useState();
  const [frontDr_swing, setFrontDr_swing] = useState();
  const [frontDr_latch, setFrontDr_latch] = useState();
  const [frontdr_handle, setFrontDr_handle] = useState();
  const [frontDr_scratches, setFrontDr_scratches] = useState();
  const [frontDr_stop, setFrontDr_stop] = useState();
  const [frontDr_self, setFrontDr_self] = useState();
  const [frontDr_lights, setFrontDr_lights] = useState();
  const [frontDr_wall, setFrontDr_wall] = useState();
  const [frontDr_comments, setFrontDr_comments] = useState();
  // Hvac
  const [hVac_filter, sethVac_filter] = useState();
  const [hvac_setting, sethVac_setting] = useState();
  const [hvac_heating, sethVac_heating] = useState();
  const [hvac_cooling, sethVac_cooling] = useState();
  const [hvac_align, sethVac_align] = useState();
  const [hvac_comments, sethVac_comments] = useState();
  // Ceiling
  const [ceiling_Paint, setceiling_Paint] = useState();
  const [ceiling_Mold, setceiling_Mold] = useState();
  const [ceiling_Align, setceiling_Align] = useState();
  const [ceiling_Sprinklers, setceiling_Sprinklers] = useState();
  const [ceiling_Smoke, setceiling_Smoke] = useState();
  const [ceiling_Comments, setceiling_Comments] = useState();
  // kitchen
  const [kitchen_Lights, setkitchen_Lights] = useState();
  const [kitchen_Cabinet, setkitchen_Cabinet] = useState();
  const [kitchen_Gfci, setkitchen_Gfci] = useState();
  // dishwasher
  const [dish_Air, setdish_Air] = useState();
  const [dish_Operational, setdish_Operational] = useState();
  const [dish_Dhigh, setdish_Dhigh] = useState();
  // microwave
  const [micro_Clean, setmicro_Clean] = useState();
  const [micro_Heating, setmicro_Heating] = useState();
  const [micro_Time, setmicro_Time] = useState();
  const [micro_Filter, setmicro_Filter] = useState();
  const [micro_Light, setmicro_Light] = useState();
  // fridge
  const [fridge_Ice, setfridge_Ice] = useState();
  const [fridge_Water, setfridge_Water] = useState();
  const [fridge_Dent, setfridge_Dent] = useState();
  // ranges
  const [range_Tip, setrange_Tip] = useState();
  const [range_Operational, setrange_Operational] = useState();
  const [range_Drawer, setrange_Drawer] = useState();
  const [range_Oven, setrange_Oven] = useState();
  const [range_Time, setrange_Time] = useState();
  // sink
  const [sink_Faucet, setsink_Faucet] = useState();
  const [sink_Sprayer, setsink_Sprayer] = useState();
  const [sink_H_C, setsink_H_C] = useState();
  const [sink_Leak, setsink_Leak] = useState();
  const [sink_Disposal, setsink_Disposal] = useState();
  // counter
  const [counter_Secured, setcounter_Secured] = useState();
  const [counter_Edge, setcounter_Edge] = useState();
  const [counter_Damage, setcounter_Damage] = useState();
  // cabinets
  const [cab_Door, setcab_Door] = useState();
  const [cab_Shelf, setcab_Shelf] = useState();
  const [cab_Paint, setcab_Paint] = useState();
  const [cab_Lazy, setcab_Lazy] = useState();
  // bathroom
  const [bathroomDr_stop, setbathroomDr_stop] = useState();
  const [bathroomDr_handle, setbathroomDr_handle] = useState();
  const [bathroomDr_latch, setbathroomDr_latch] = useState();
  const [bathroomDr_stike, setbathroomDr_stike] = useState();
  const [bathroomDr_scratch, setbathroomDr_scratch] = useState();
  const [bathroomDr_light, setbathroomDr_light] = useState();
  // bedroom
  const [bedRoom_dr, setbedRoom_dr] = useState();
  const [bedRoom_wind, setbedRoom_wind] = useState();
  const [bedRoom_lights, setbedRoom_lights] = useState();
  const [bedRoom_wall, setbedRoom_wall] = useState();
  const [bedRoom_comment, setbedRoom_comment] = useState();
  // living room
  const [livingRoom_switch, setlivingRoom_switch] = useState();
  const [livingRoom_lights, setlivingRoom_lights] = useState();
  const [livingRoom_outlet, setlivingRoom_outlet] = useState();
  const [livingRoom_wall, setlivingRoom_wall] = useState();
  const [livingRoom_comment, setlivingRoom_comment] = useState();

  const handleFormSubmit = (e) => {
    // save to database
    e.preventDefault();
    console.log(addressName)
    console.log(ownerName)
    console.log(preparsName)
    console.log(reportNumber)
    console.log(frontDr_peep)
    console.log(frontDr_swing)


    // const [save, saveProperty] = useState([])
    api.saveProperty();
    console.log(handleFormSubmit);


  };

  function loadForm() {
    api.getOneProperty(propertyId)
      .then(
        // res => console.log(res.data)
        res =>
          setForm(res.data)
      )
      .catch(err => console.log(err));
  };

  function saveForm(propertyId) {
    console.log(propertyId + " " + form.address);
    api.saveProperty(propertyId, { address: form.address })
      .then(res =>
        // console.log(res)
        loadForm()
      )
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
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
          <NavLink style={{ color: "rgb(0, 212, 0)" }} to="/"> Home </NavLink>
          <a href="#" class="btn btn-outline-success" onClick={printDocument}>Export to PDF</a>
          <button className="btn btn-primary" onClick={saveForm(propertyId)}>Save </button>
        </header>

      </div>

      <div className="container" id="divToPrint">
        <section id="section-1">
          <h1>Property INFO&nbsp;&nbsp;</h1>
          <mainpic><img src="/images/insertimage.png" alt="" /></mainpic>
          <input onChange={handleInputChange} name="address" type="email" class="form-control" id="info" aria-describedby="emailHelp" placeholder="Type Adress Here"></input>
          <br /><br />
          <div htmlFor="info" id="info">This confidential report is prepared exclusively for:</div>
          <input type="text" id="info" className="form-control" />
          <br /><br />
          <div htmlFor="info" id="info">Prepared By:</div>
          <input type="text" id="info" className="form-control" />
          <br /><br />
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
      </div>

      <div className="container">
        <section id="section-1">
          <h1>Property INFO&nbsp;&nbsp;</h1>
          <form onSubmit={handleFormSubmit}>
            <mainpic>
              <img src="/images/insertimage.png" alt="" />
            </mainpic>

            <input
              type="address"
              class="form-control"
              id="info"
              aria-describedby="emailHelp"
              placeholder="Type Adress Here"
              onChange={e => setAddress(e.target.value)}
            ></input>
            <br />
            <br />
            <div htmlFor="info" id="info">
              This confidential report is prepared exclusively for:
            </div>
            <input type="text" id="info" className="form-control"
              onChange={e => setOwnerName(e.target.value)} />
            <br />
            <br />
            <div htmlFor="info" id="info">
              Prepared By:
            </div>
            <input type="text" id="info" className="form-control"
              onChange={e => setPreparesName(e.target.value)} />
            <br />
            <br />
            <div htmlFor="info" id="info">
              Report Number:
            </div>
            <input type="text" id="info" className="form-control"
              onChange={e => setReportNumber(e.target.value)} />
            <br />
            <br />
            <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">
                Submit
          </button>
            </div>
          </form>
        </section>

        <section id="section-2">
          <h1>Overview&nbsp;&nbsp;</h1>
          <h3>THE SCOPE OF THE INSPECTION</h3>
          <h5>
            Please note that this is a visual inspection. All components
            designated for inspection in the Standards of Practice are
            inspected, except as may be noted in the “Limitations of Inspection”
            sections within this report. It is the goal of the inspection to put
            a home buyer in a better position to make a buying decision. Not all
            improvements will be identified during this inspection. Unexpected
            repairs should still be anticipated. The inspection should not be
            considered a guarantee or warranty of any kind. Please refer to the
            pre-inspection contract for a full explanation of the scope of the
            inspection.
          </h5>
        </section>
        <section id="section-3">
          <h1>Frontdoor&nbsp;&nbsp;</h1>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input type="checkbox" name="frontdr_peep" onChange={e => setFrontDr_peep(e.target.value)} />
            peephole with knocker&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_swing" onChange={e => setFrontDr_swing(e.target.value)} />
            Swing&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_latching" onChange={e => setFrontDr_latch(e.target.value)} />
            Latching&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_handle" onChange={e => setFrontDr_handle(e.target.value)} />
            handle&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_scrathes" onChange={e => setFrontDr_scratches(e.target.value)} />
            Scratches&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr__stop" onChange={e => setFrontDr_stop(e.target.value)} />
            Door stop&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_self" onChange={e => setFrontDr_self(e.target.value)} />
            Self-closing Hinges&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_lights" onChange={e => setFrontDr_lights(e.target.value)} />
            Lights above front door&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_wall" onChange={e => setFrontDr_wall(e.target.value)} />
            Wall around front door&nbsp;&nbsp;
            <br></br>
              <br></br>Note

            <textarea
                style={{ width: "100%", maxWidth: "100%" }}
                defaultValue={""}
                name="frontdr_comments"
                onChange={e => setFrontDr_comments(e.target.value)} />

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
              <div htmlFor="info" id="info">
                <button className="btn btn-success" type="submit">
                  Submit
          </button>
              </div>

            </form>
          </div>
        </section>

        {/* form one */}
        <section id="section-4">
          <h1>HVAC&nbsp;&nbsp;</h1>
          <form onSubmit={handleFormSubmit} >
            <input type="checkbox" name="hvac_filter" onChange={e => sethVac_filter(e.target.value)} />
          Replace Filter&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="hvac_setting" onChange={e => sethVac_setting(e.target.value)} />
          Thermostat Setting&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="hvac_heating" onChange={e => sethVac_heating(e.target.value)} />
          heating&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="hvac_cooling" onChange={e => sethVac_cooling(e.target.value)} />
          cooling&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="hvac_align" onChange={e => sethVac_align(e.target.value)} />
          register alignment&nbsp;&nbsp;
          <br></br>
            <br></br>Note
          <textarea
              style={{ width: "100%", maxWidth: "100%" }}
              defaultValue={""}
              name="hvac_comments"
              onChange={e => sethVac_comments(e.target.value)}
            />
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
          </form>
        </section>
        <section id="section-5">
          <h1>Ceiling&nbsp;&nbsp;</h1>
          <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="ceiling_paint" onChange={e => setceiling_Paint(e.target.value)} />
          Paint&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="ceiling_mold" onChange={e => setceiling_Mold(e.target.value)} />
          Molding&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="ceiling_align" onChange={e => setceiling_Align(e.target.value)} />
          Diffuser alignment&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="ceiling_sprinklers" onChange={e => setceiling_Sprinklers(e.target.value)} />
          Sprinklers&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="ceiling_smoke" onChange={e => setceiling_Smoke(e.target.value)} />
          Smoke detectors&nbsp;&nbsp;
          <br></br>
            <br></br>Note
          <textarea
              style={{ width: "100%", maxWidth: "100%" }}
              defaultValue={""}
              name="ceiling_comments"
              onChange={e => setceiling_Comments(e.target.value)}
            />
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
            <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">
                Submit
          </button>
            </div>
          </form>

        </section>
        <section id="section-6">
          <h1>Kitchen&nbsp;&nbsp;</h1>
          <h3>Lights / Outlets&nbsp;&nbsp;</h3>
          <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="kitchen_light" onChange={e => setkitchen_Lights(e.target.value)} />
          Ceiling lights&nbsp;&nbsp;
          <input type="checkbox" name="kitchen_cabinet" onChange={e => setkitchen_Cabinet(e.target.value)} />
          Under Cabinet lights&nbsp;&nbsp;
          <input type="checkbox" name="kitchen_gfci" onChange={e => setkitchen_Gfci(e.target.value)} />
          GFCI&nbsp;&nbsp;

          <h3>Dishwasher&nbsp;&nbsp;</h3>
            <input type="checkbox" name="dish_air" onChange={e => setdish_Air(e.target.value)} />
          Air Gap&nbsp;&nbsp;
          <input type="checkbox" name="dish_operational" onChange={e => setdish_Operational(e.target.value)} />
          operational&nbsp;&nbsp;
          <input type="checkbox" name="dish_dhigh" onChange={e => setdish_Dhigh(e.target.value)} />
          DHigh loop&nbsp;&nbsp;

          <h3>Microwave&nbsp;&nbsp;</h3>
            <input type="checkbox" name="micro_clean " onChange={e => setmicro_Clean(e.target.value)} />
          clean&nbsp;&nbsp;
          <input type="checkbox" name="micro_heating" onChange={e => setmicro_Heating(e.target.value)} />
          Heating&nbsp;&nbsp;
          <input type="checkbox" name="micro_time" onChange={e => setmicro_Time(e.target.value)} />
          Time set&nbsp;&nbsp;
          <input type="checkbox" name="micro_filter" onChange={e => setmicro_Filter(e.target.value)} />
          filter&nbsp;&nbsp;
          <input type="checkbox" name="micro_light" onChange={e => setmicro_Light(e.target.value)} />
          lighting&nbsp;&nbsp;

          <h3>Fridge&nbsp;&nbsp;</h3>
            <input type="checkbox" name="fridge_ice" onChange={e => setfridge_Ice(e.target.value)} />
          Ice Maker&nbsp;&nbsp;
          <input type="checkbox" name="fridge_water" onChange={e => setfridge_Water(e.target.value)} />
          water&nbsp;&nbsp;
          <input type="checkbox" name="fridge_dent" onChange={e => setfridge_Dent(e.target.value)} />
          Dents&nbsp;&nbsp;

          <h3>Ranges&nbsp;&nbsp;</h3>
            <input type="checkbox" name="range_tip" onChange={e => setrange_Tip(e.target.value)} />
          Anti-Tip&nbsp;&nbsp;
          <input type="checkbox" name="range_operational" onChange={e => setrange_Operational(e.target.value)} />
          operational&nbsp;&nbsp;
          <input type="checkbox" name="range_drawer" onChange={e => setrange_Drawer(e.target.value)} />
          Drawer&nbsp;&nbsp;
          <input type="checkbox" name="range_oven" onChange={e => setrange_Oven(e.target.value)} />
          oven light&nbsp;&nbsp;
          <input type="checkbox" name="range_time" onChange={e => setrange_Time(e.target.value)} />
          time set&nbsp;&nbsp;

          <h3>Sink&nbsp;&nbsp;</h3>
            <input type="checkbox" name="sink_faucet" onChange={e => setsink_Faucet(e.target.value)} />
          Faucet&nbsp;&nbsp;
          <input type="checkbox" name="sinK_sprayer" onChange={e => setsink_Sprayer(e.target.value)} />
          Sprayer&nbsp;&nbsp;
          <input type="checkbox" name="sink_h_c" onChange={e => setsink_H_C(e.target.value)} />
          Hot and Cold&nbsp;&nbsp;
          <input type="checkbox" name="sink_leak" onChange={e => setsink_Leak(e.target.value)} />
          leaks&nbsp;&nbsp;
          <input type="checkbox" name="sick_disposal" onChange={e => setsink_Disposal(e.target.value)} />
          Garbage Disposal&nbsp;&nbsp;

          <h3>Counter&nbsp;&nbsp;</h3>
            <input type="checkbox" name="counter_secured" onChange={e => setcounter_Secured(e.target.value)} />
          secured&nbsp;&nbsp;
          <input type="checkbox" name="counter_edge" onChange={e => setcounter_Edge(e.target.value)} />
          Check Edges&nbsp;&nbsp;
          <input type="checkbox" name="counter_damage" onChange={e => setcounter_Damage(e.target.value)} />
          damages&nbsp;&nbsp;

          <h3>Cabinet&nbsp;&nbsp;</h3>
            <input type="checkbox" name="cab_door" onChange={e => setcab_Door(e.target.value)} />
          Doors loose aligned damages&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="cab_shelf" onChange={e => setcab_Shelf(e.target.value)} />
          shelves loose hardware&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="cab_paint" onChange={e => setcab_Paint(e.target.value)} />
          Paint Touch up&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="cab_lazy" onChange={e => setcab_Lazy(e.target.value)} />
          Lazy Susan - Stable on Tracks&nbsp;&nbsp;
          <br></br>
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
            <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">
                Submit
          </button>
            </div>
          </form>

        </section>

        <section id="section-7">
          <h1>Bathroom&nbsp;&nbsp;</h1>
          <h3>Bathroom Door&nbsp;&nbsp;</h3>
          <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="bathdr_stop" onChange={e => setbathroomDr_stop(e.target.value)} />
          door stop&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_handle" onChange={e => setbathroomDr_handle(e.target.value)} />
          handle&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_latch" onChange={e => setbathroomDr_latch(e.target.value)} />
          Latching&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_strike" onChange={e => setbathroomDr_stike(e.target.value)} />
          strike plate&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_scratch" onChange={e => setbathroomDr_scratch(e.target.value)} />
          Scratches&nbsp;&nbsp;
          <input type="checkbox" name="br_light" onChange={e => setbathroomDr_light(e.target.value)} />
          lights&nbsp;&nbsp;
          <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">
                Submit
          </button>
            </div>
          </form>

        </section>
        <section id="section-8">
          <h1>Bedroom&nbsp;&nbsp;</h1>
          <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="bedroom_dr" onChange={e => setbedRoom_dr(e.target.value)} />
          door: handle, Latching, Scratches, Door stop, Strike plate&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="bedroom_win" onChange={e => setbedRoom_wind(e.target.value)} />
          Windows: Screen, sill, Blinds&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="bedroom_light" onChange={e => setbedRoom_lights(e.target.value)} />
          lights&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="bedroom_wall" onChange={e => setbedRoom_wall(e.target.value)} />
          Wall and ceiling&nbsp;&nbsp;
          <br></br>Note
          <textarea
              style={{ width: "100%", maxWidth: "100%" }}
              defaultValue={""}
              name="bedroom_comments"
              onChange={e => setbedRoom_comment(e.target.value)}
            />
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
            <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">
                Submit
          </button>
            </div>
          </form>

        </section>
        <section id="section-9">
          <h1>Living Dining&nbsp;&nbsp;</h1>
          <form onSubmit={handleFormSubmit}>
            <input type="checkbox" name="dining_switch" onChange={e => setlivingRoom_switch(e.target.value)} />
          Switches&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="dining_light" onChange={e => setlivingRoom_lights(e.target.value)} />
          lights&nbsp;&nbsp;
          <br></br>
            <input type="checkbox" name="dining_outlet" onChange={e => setlivingRoom_outlet(e.target.value)} />
          Outlet&nbsp;&nbsp;
          <br></br>

            <input type="checkbox" name="dining_wall" onChange={e => setlivingRoom_wall(e.target.value)} />
          Wall and ceiling&nbsp;&nbsp;
          <input type="checkbox" name="dining_floor" />
          flooring&nbsp;&nbsp;
          <br></br>Note
          <textarea
              style={{ width: "100%", maxWidth: "100%" }}
              defaultValue={""}
              name="dinning_comments"
              onChange={e => setlivingRoom_comment(e.target.value)}
            />
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
            <div htmlFor="info" id="info">
              <button className="btn btn-success" type="submit">Submit</button>
            </div>
          </form>

        </section>
      </div>
    </div>
  );
}

export default Condo;
