
import "./product.css";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { productRows,productData } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Product() {
    
    const [data, setData] = useState(productRows);
    const [dataSensor, setDataSensor] = useState(productData);
      
    const handleDelete = (id) => {
          setData(data.filter((item) => item.id !== id));
        };
  return (
      
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Sensor</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="uptime" title="Sensor Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img  src="https://img.icons8.com/offices/80/000000/electrical-sensor.png" alt="" className="productInfoImg" />
                  <span className="productName">Parking Sensor 1</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">uptime:</span>
                      <span className="productInfoValue">5123</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">active:</span>
                      <span className="productInfoValue">yes</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Power Status:</span>
                      <span className="productInfoValue">78%</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Parking Sensor1" />
                  <label>Configuration</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://img.icons8.com/officel/480/000000/electrical-sensor.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
      
  );
}
