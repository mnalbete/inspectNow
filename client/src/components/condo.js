import "./condo.css";
import api from "../utils/api";
import { useHistory } from 'react-router-dom';

function Condo() {

  const history = useHistory();
  console.log(history.location.pathname);
  const pathname = history.location.pathname;
  const pathnameArray = pathname.split("/");
  // use property id to go into the form to save the data
  const propertyId = pathnameArray[3];
  console.log(propertyId);

  const handleFormSubmit = (e) => {
    // save to database
    e.preventDefault();
    api.saveProperty();
    // const email = emailRef.current.value;
    // console.log(email);
    // const address = homeaddress.current.value;
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
            <li>
              <a href="#section-1">Property INFO</a>
            </li>
            <li>
              <a href="#section-2">Overview</a>
            </li>
            <li>
              <a href="#section-3">Frontdoor</a>
            </li>
            <li>
              <a href="#section-4">HVAC</a>
            </li>
            <li>
              <a href="#section-5">Ceiling</a>
            </li>
            <li>
              <a href="#section-6">Kitchen</a>
            </li>
            <li>
              <a href="#section-7">Bathroom</a>
            </li>
            <li>
              <a href="#section-8">Bedroom</a>
            </li>
            <li>
              <a href="#section-9">Living Dining</a>
            </li>
          </ul>
        </nav>
      </main>
      <div>
        <header>Export to PDF</header>
      </div>

      <div className="container">
        <section id="section-1">
          <h1>Property INFO&nbsp;&nbsp;</h1>
          <form>
            <mainpic>
              <img src="/images/insertimage.png" alt="" />
            </mainpic>

            <input
              type="email"
              class="form-control"
              id="info"
              aria-describedby="emailHelp"
              placeholder="Type Adress Here"
            ></input>
            <br />
            <br />
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
              <button onclick={handleFormSubmit} value="submit">Save Property INFO</button>
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
            <form>
              <input type="checkbox" name="frontdr_peep" />
            peephole with knocker&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_swing" />
            Swing&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_latching" />
            Latching&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_handle" />
            handle&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_scrathes " />
            Scratches&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr__stop" />
            Door stop&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_self" />
            Self-closing Hinges&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_lights" />
            Lights above front door&nbsp;&nbsp;
            <br></br>
              <input type="checkbox" name="frontdr_wall" />
            Wall around front door&nbsp;&nbsp;
            <br></br>
              <br></br>Note

            <textarea
                style={{ width: "100%", maxWidth: "100%" }}
                defaultValue={""}
                name="frontdr_comments"
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
                <button onclick={handleFormSubmit} value="submit">Save Property INFO</button>
              </div>
            </form>
          </div>
        </section>

        {/* form one */}
        <section id="section-4">
          <h1>HVAC&nbsp;&nbsp;</h1>
          <input type="checkbox" name="hvac_filter" />
          Replace Filter&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="hvac_setting" />
          Thermostat Setting&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="hvac_heating" />
          heating&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="hvac_cooling" />
          cooling&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="hvac_align" />
          register alignment&nbsp;&nbsp;
          <br></br>
          <br></br>Note
          <textarea
            style={{ width: "100%", maxWidth: "100%" }}
            defaultValue={""}
            name="hvac_comments"
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
        </section>
        <section id="section-5">
          <h1>Ceiling&nbsp;&nbsp;</h1>
          <input type="checkbox" name="ceiling_paint" />
          Paint&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="ceiling_mold" />
          Molding&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="ceiling_align" />
          Diffuser alignment&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="ceiling_sprinklers" />
          Sprinklers&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="ceiling_smoke" />
          Smoke detectors&nbsp;&nbsp;
          <br></br>
          <br></br>Note
          <textarea
            style={{ width: "100%", maxWidth: "100%" }}
            defaultValue={""}
            name="ceiling_comments"
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
        </section>
        <section id="section-6">
          <h1>Kitchen&nbsp;&nbsp;</h1>
          <h3>Lights / Outlets&nbsp;&nbsp;</h3>
          <input type="checkbox" name="kitchen_light" />
          Ceiling lights&nbsp;&nbsp;
          <input type="checkbox" name="kitchen_cabinet" />
          Under Cabinet lights&nbsp;&nbsp;
          <input type="checkbox" name="kitchen_gfci" />
          GFCI&nbsp;&nbsp;
          <h3>Dishwasher&nbsp;&nbsp;</h3>
          <input type="checkbox" name="dish_air" />
          Air Gap&nbsp;&nbsp;
          <input type="checkbox" name="dish_operational" />
          operational&nbsp;&nbsp;
          <input type="checkbox" name="dish_dhigh" />
          DHigh loop&nbsp;&nbsp;
          <h3>Microwave&nbsp;&nbsp;</h3>
          <input type="checkbox" name="micro_clean " />
          clean&nbsp;&nbsp;
          <input type="checkbox" name="micro_heating" />
          Heating&nbsp;&nbsp;
          <input type="checkbox" name="micro_time" />
          Time set&nbsp;&nbsp;
          <input type="checkbox" name="micro_filter" />
          filter&nbsp;&nbsp;
          <input type="checkbox" name="micro_light" />
          lighting&nbsp;&nbsp;
          <h3>Fridge&nbsp;&nbsp;</h3>
          <input type="checkbox" name="fridge_ice" />
          Ice Maker&nbsp;&nbsp;
          <input type="checkbox" name="fridge_water" />
          water&nbsp;&nbsp;
          <input type="checkbox" name="fridge_dent" />
          Dents&nbsp;&nbsp;
          <h3>Ranges&nbsp;&nbsp;</h3>
          <input type="checkbox" name="range_tip" />
          Anti-Tip&nbsp;&nbsp;
          <input type="checkbox" name="range_operational" />
          operational&nbsp;&nbsp;
          <input type="checkbox" name="range_drawer" />
          Drawer&nbsp;&nbsp;
          <input type="checkbox" name="range_oven" />
          oven light&nbsp;&nbsp;
          <input type="checkbox" name="range_time" />
          time set&nbsp;&nbsp;
          <h3>Sink&nbsp;&nbsp;</h3>
          <input type="checkbox" name="sink_faucet" />
          Faucet&nbsp;&nbsp;
          <input type="checkbox" name="sinK_sprayer" />
          Sprayer&nbsp;&nbsp;
          <input type="checkbox" name="sink_h_c" />
          Hot and Cold&nbsp;&nbsp;
          <input type="checkbox" name="sink_leak" />
          leaks&nbsp;&nbsp;
          <input type="checkbox" name="sick_disposal" />
          Garbage Disposal&nbsp;&nbsp;
          <h3>Counter&nbsp;&nbsp;</h3>
          <input type="checkbox" name="counter_secured" />
          secured&nbsp;&nbsp;
          <input type="checkbox" name="counter_edge" />
          Check Edges&nbsp;&nbsp;
          <input type="checkbox" name="counter_damage" />
          damages&nbsp;&nbsp;
          <h3>Cabinet&nbsp;&nbsp;</h3>
          <input type="checkbox" name="cab_door" />
          Doors loose aligned damages&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="cab_shelf" />
          shelves loose hardware&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="cab_paint" />
          Paint Touch up&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="cab_lazy" />
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
        </section>
        <section id="section-7">
          <h1>Bathroom&nbsp;&nbsp;</h1>
          <h3>Bathroom Door&nbsp;&nbsp;</h3>
          <input type="checkbox" name="bathdr_paint" />
          Paint&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_stop" />
          door stop&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_handle" />
          handle&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_latch" />
          Latching&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_strike" />
          strike plate&nbsp;&nbsp;
          <input type="checkbox" name="bathdr_scratch" />
          Scratches&nbsp;&nbsp;
          <h3>Lights / Outlets&nbsp;&nbsp;</h3>
          <input type="checkbox" name="br_light" />
          lights&nbsp;&nbsp;
          <input type="checkbox" name="br_fan" />
          Exhaust Fan&nbsp;&nbsp;
          <input type="checkbox" name="br_heat" />
          heat lamp&nbsp;&nbsp;
        </section>
        <section id="section-8">
          <h1>Bedroom&nbsp;&nbsp;</h1>
          <input type="checkbox" name="bedroom_dr" />
          door: handle, Latching, Scratches, Door stop, Strike plate&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_win" />
          Windows: Screen, sill, Blinds&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_switch" />
          Switches&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_light" />
          lights&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_outlet" />
          Outlet&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_wall" />
          Wall and ceiling&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_paint" />
          Paint&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_floor" />
          flooring&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="bedroom_stain" />
          Stain&nbsp;&nbsp;
          <br></br>
          <br></br>Note
          <textarea
            style={{ width: "100%", maxWidth: "100%" }}
            defaultValue={""}
            name="bedroom_comments"
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
        </section>
        <section id="section-9">
          <h1>Living Dining&nbsp;&nbsp;</h1>
          <input type="checkbox" name="dining_switch" />
          Switches&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_light" />
          lights&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_outlet" />
          Outlet&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_mold" />
          Molding&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_trim" />
          Trim&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_wall" />
          Wall and ceiling&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_paint" />
          Paint&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_floor" />
          flooring&nbsp;&nbsp;
          <br></br>
          <input type="checkbox" name="dining_stain" />
          Stain&nbsp;&nbsp;
          <br></br>
          <br></br>Note
          <textarea
            style={{ width: "100%", maxWidth: "100%" }}
            defaultValue={""}
            name="dinning_comments"
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
        </section>
      </div>
    </div>
  );
}

export default Condo;
