import React from 'react';
import logo from './logo.svg';
import './App.css';
const employee = {
  Name: "Alan Ford",
  EmployeeID: "00005152",
  Appointment: "9:00 (24-05-2016)",
  Email: "alan.form@email.nl",
  Phone: "+31123456789"
};
const orderInfo = {
  Status: "⚫ In Progress",
  Door: "Mark",
  Time: "10:30",
  Date: "(25-05-2016)"
};
const productList = {
  product: "Boltaart Bosbessen",
  description:"Overheerlijke Boltaart met Bosbessen uit de keuken van de Bijenkorf.",
  profileImg: "https://www.w3schools.com/howto/img_avatar.png"
};
var arrow_rev=">"
var arrow="<"
function App() {
  return (
    <div className="site-container">
      <div className="header">
        <div className="arrow">{arrow}</div>
        <div className="name">
          <p>
            <strong>{employee.Name}</strong>
          </p>
          <p className="description">{employee.EmployeeID}</p>
        </div>
        <button className="btn" onClick={window.print}>Print</button>
      </div>
      <div className="customer-info">
        <p>
          <strong>Appointment:</strong> {employee.Appointment}
        </p>
        <p>
          <strong>Email:</strong> {employee.Email}
        </p>
        <p>
          <strong>Phone:</strong> {employee.Phone}
        </p>
      </div>
      <div className="order-info">
        <div className="info">
          <p>
            <strong>Status</strong>
          </p>
          <p>{orderInfo.Status}</p>
        </div>
        <div className="info">
          <p>
            <strong>Door</strong>
          </p>
          <p>{orderInfo.Door}</p>
        </div>
        <div className="info">
          <p>
            <strong>Time</strong>
          </p>
          <div className="TimeDate"><p>{orderInfo.Time}&nbsp;</p><p className="description">{orderInfo.Date}</p></div>
        </div>
      </div>
      <div className="product-list">
        <input type="checkbox"></input>
        <img src={productList.profileImg} alt=""></img>
        <div className="productDetails">
          <p>
            <strong>{productList.product}</strong>
          </p>
          <p className="description">{productList.description}</p>
        </div>
        <div className="arrow2">{arrow_rev}</div>
      </div>
    </div>
  );
}

export default App;
