import React, { useState, useEffect } from "react";
import "./HostAnalysisPage.css";
import Header from "../hostheader/hostheader";
import ReactApexChart from "react-apexcharts";
import { Cookies } from "react-cookie";
import axios from "axios";

function HostAnalysis() {
  const [service, setService] = useState([]);
  const [analysisType, setAnalysisType] = useState("Overall");
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const cookie = new Cookies();
    const NGOname = cookie.get("NGOname");
    console.log("NGOname : " + NGOname);
    try {
        const response = await axios.get("https://db-28im.onrender.com/getServices", {
        params: { NGOname }
      });
      console.log("Response data" + response.data);
      if (response.data) {
        setService(response.data.services);
      } else {
        console.log("No pending problems found");
      }
    } catch (err) {
      console.log(err + "error message");
    }
  };

  const [state1, setState1] = useState({
    series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Completed', 'OnGoing'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  const [state2, setState2] = useState({
    series: [{
      data: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end',
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: service,
      }
    }
  });

  const [state3, setState3] = useState({
    series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Solved', 'UnSolved'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  const [state4, setState4] = useState({
    series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Not Allocated', 'On Going', 'Completed'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });

  useEffect(() => {
    setState2(prevState => ({
      ...prevState,
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: service.slice(0, 6), // Use first 6 elements of service array
        }
      }
    }));
  }, [service]);


  const handleDistrictChange = async (event) => {
    try {
      setState3({
        series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
        options: state3.options
      });
      setState4({
        series: [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1],
        options: state4.options
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleAnalysisTypeChange = (type) => {
    setAnalysisType(type);
    if (type === "Host") {
      fetchData(); 
    }
  };

  return (
    <div>
      <Header />
      
      <div>
        <button onClick={() => handleAnalysisTypeChange("Host")} style={{padding : "10px 10px 10px 10px", backgroundColor : "#4d82e2", color : "white", fontWeight : "bolder", borderRadius : "10px", border : "transparent", outline : "none"}}>Host Analysis</button>&nbsp;
        <button onClick={() => handleAnalysisTypeChange("Overall")} style={{padding : "10px 10px 10px 10px", backgroundColor : "#4d82e2", color : "white", fontWeight : "bolder", borderRadius : "10px", border : "transparent", outline : "none"}}>Overall Analysis</button>
      </div>
      {analysisType === "Host" && (
        <div className="HostAnalysis">
          <div><h1>Host Analysis</h1></div>
          <div style={{ display: "flex", gap: "10%", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <ReactApexChart options={state1.options} series={state1.series} type="pie" width={380} />
            <ReactApexChart options={state2.options} series={state2.series} type="bar" height={350} style={{ height: "20%", width: "40%" }} />
          </div>
        </div>
      )}

      {analysisType === "Overall" && (
        <div style={{ display: "block", marginTop: "3%", margin: "3% auto 0 auto" }}>
          <div style={{ display: "flex", gap: "30px", flexwrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <div className="HostAnalysis">
              <div><h1>Overall Analysis</h1></div>
              <div style={{ display: "flex", gap: "10%", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                <ReactApexChart options={state3.options} series={state3.series} type="pie" width={380} />
                <ReactApexChart options={state4.options} series={state4.series} type="pie" width={380} />
                <div style={{ marginBottom: "20px", marginTop : "50px" }}>
                  <select name="Area" id="Area6" style={{ width: "100%", padding: "10px 10px 10px 10px", borderRadius: "10px", backgroundColor: "trans" }} onChange={handleDistrictChange}>
                    <option value="Ariyalur">Ariyalur</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Cuddalore">Cuddalore</option>
                    <option value="Dharmapuri">Dharmapuri</option>
                    <option value="Dindigul">Dindigul</option>
                    <option value="Erode">Erode</option>
                    <option value="Kallakurichi">Kallakurichi</option>
                    <option value="Kancheepuram">Kancheepuram</option>
                    <option value="Kanyakumari">Kanyakumari</option>
                    <option value="Karur">Karur</option>
                    <option value="Krishnagiri">Krishnagiri</option>
                    <option value="Madurai">Madurai</option>
                    <option value="Nagapattinam">Nagapattinam</option>
                    <option value="Namakkal">Namakkal</option>
                    <option value="Nilgiris">Nilgiris</option>
                    <option value="Perambalur">Perambalur</option>
                    <option value="Pudukkottai">Pudukkottai</option>
                    <option value="Ramanathapuram">Ramanathapuram</option>
                    <option value="Ranipet">Ranipet</option>
                    <option value="Salem">Salem</option>
                    <option value="Sivaganga">Sivaganga</option>
                    <option value="Tenkasi">Tenkasi</option>
                    <option value="Thanjavur">Thanjavur</option>
                    <option value="Theni">Theni</option>
                    <option value="Thoothukudi">Thoothukudi (Tuticorin)</option>
                    <option value="Tiruchirappalli">Tiruchirappalli (Trichy)</option>
                    <option value="Tirunelveli">Tirunelveli</option>
                    <option value="Tirupathur">Tirupathur</option>
                    <option value="Tiruppur">Tiruppur</option>
                    <option value="Tiruvallur">Tiruvallur</option>
                    <option value="Tiruvannamalai">Tiruvannamalai</option>
                    <option value="Tiruvarur">Tiruvarur</option>
                    <option value="Vellore">Vellore</option>
                    <option value="Viluppuram">Viluppuram</option>
                    <option value="Virudhunagar">Virudhunagar</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div class="container">
              <ul class="responsive-table">
                <li class="table-header">
                  <div class="col col-1">S.No</div>
                  <div class="col col-2">Service</div>
                  <div class="col col-3">Percentage</div>
                </li>
                <li class="table-row">
                    <div class="col col-1" data-label="Job Id">1</div>
                    <div class="col col-2" data-label="Customer Name">Humanitarian</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">2</div>
                    <div class="col col-2" data-label="Customer Name">Healthcare</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">3</div>
                    <div class="col col-2" data-label="Customer Name">Education</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">4</div>
                    <div class="col col-2" data-label="Customer Name">Environmental</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">5</div>
                    <div class="col col-2" data-label="Customer Name">Community</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">6</div>
                    <div class="col col-2" data-label="Customer Name">Human Rights</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">7</div>
                    <div class="col col-2" data-label="Customer Name">Empowerment Programs</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">8</div>
                    <div class="col col-2" data-label="Customer Name">Disaster Preparedness </div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">9</div>
                    <div class="col col-2" data-label="Customer Name">Research and Policy Advocacy</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">10</div>
                    <div class="col col-2" data-label="Customer Name">Crisis Intervention</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">11</div>
                    <div class="col col-2" data-label="Customer Name">Awareness Campaigns </div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
                    <li class="table-row">
                    <div class="col col-1" data-label="Job Id">12</div>
                    <div class="col col-2" data-label="Customer Name">Conflict Resolution</div>
                    <div class="col col-3" data-label="Amount">{Math.floor(Math.random() * 3) + 1}</div>
                    
                    </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HostAnalysis;
