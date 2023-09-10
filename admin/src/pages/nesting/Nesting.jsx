import "./nesting.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Nesting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Sea_turtle_type: "",
    Area: "",
    Beach_Slope: "",
    Surface_Current: 0.0,
    Temperature: 0.0,
    Tidal_Range: 0.0,
    Vegetation: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formData.Sea_turtle_type || !formData.Area || !formData.Beach_Slope || !formData.Surface_Current || !formData.Temperature || !formData.Tidal_Range || !formData.Vegetation) {
      setIsLoading(false);
      Swal.fire({
        title: "Error",
        text: "Input Fields cannot be empty",
        icon: "error",
        showCancelButton: false,
        confirmButtonText: "OK",
      });
      return; // If required fields are empty, do nothing
    }
    try {
      console.log("Form Data", formData);
      const response = await axios.post(
        "/api/nestSuccess/make-prediction",
        formData
      );

      // Process the response as needed
      console.log("Prediction result:", response.data);
      if (!response.data.error) {
        Swal.fire({
          title: "Predicted Result!",
          text: response.data.prediction,
          icon: "success",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLoading(false);
          }
        });
      } else {
        Swal.fire({
          title: "Error",
          text: response.data.error,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            setIsLoading(false);
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Find Nesting Suitability </h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label>Sea Turtle Type</label>
                <select
                  id="Sea_turtle_type"
                  onChange={handleChange}
                  className="customSelect"
                  name="Sea_turtle_type"
                  value={formData.Sea_turtle_type}
                >
                  <option value="" disabled>
                    Select
                  </option>{" "}
                  {/* Default option */}
                  <option value="Loggerhead">Loggerhead</option>
                  <option value="Green">Green</option>
                  <option value="Hawksbill">Hawksbill</option>
                  <option value="Leatherback">Leatherback</option>
                  <option value="Olive Ridley">Olive Ridley</option>
                </select>
              </div>
              <div className="formInput">
                <label>Area</label>
                <select
                  id="Area"
                  onChange={handleChange}
                  className="customSelect"
                  name="Area"
                  value={formData.Area}
                >
                  <option value="" disabled>
                    Select
                  </option>{" "}
                  {/* Default option */}
                  <option value="Southeast shore">Southeast shore</option>
                  <option value="Western coast">Western coast</option>
                  <option value="Northern coast">Northern coast</option>
                  <option value="Eastern coast">Eastern coast</option>
                  <option value="Southern coast">Southern coast</option>
                  <option value="Northwest shore">Northwest shore</option>
                  <option value="Southwest shore">Southwest shore</option>
                </select>
              </div>
              <div className="formInput">
                <label>Beach Slope</label>
                <input
                  type="number"
                  id="Beach_Slope"
                  name="Beach_Slope"
                  value={formData.Beach_Slope}
                  onChange={handleChange}
                  className="customInput"
                  placeholder="Enter slope"
                />
              </div>

              <div className="formInput">
                <label>Surface Current</label>
                <input
                  type="number"
                  id="Surface_Current"
                  name="Surface_Current"
                  value={formData.Surface_Current}
                  onChange={handleChange}
                  className="customInput"
                  placeholder="Enter Surface Current"
                />
              </div>
              <div className="formInput">
                <label>Temperature</label>
                <input
                  type="number"
                  id="Temperature"
                  name="Temperature"
                  value={formData.Temperature}
                  onChange={handleChange}
                  className="customInput"
                  placeholder="Enter Temperature"
                />
              </div>
              <div className="formInput">
                <label>Tidal</label>
                <input
                  type="number"
                  id="Tidal_Range"
                  name="Tidal_Range"
                  value={formData.Tidal_Range}
                  onChange={handleChange}
                  className="customInput"
                  placeholder="Enter Tidal Range"
                />
              </div>
              <div className="formInput">
                <label>Vegetation</label>
                <select
                  id="Vegetation"
                  name="Vegetation"
                  value={formData.Vegetation}
                  onChange={handleChange}
                  className="customSelect"
                >
                  <option value="" disabled>
                    Select
                  </option>{" "}
                  {/* Default option */}
                  <option value="Seagrass beds">Seagrass beds</option>
                  <option value="Mangrove forest">Mangrove forest</option>
                  <option value="Coral reef">Coral reef</option>
                  <option value="Sandy beach">Sandy beach</option>
                  <option value="Coastal dunes">Coastal dunes</option>
                </select>
              </div>

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Submitting..." : "Predict"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nesting;
