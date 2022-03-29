import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  {/* Start your React code here */
  <>
  <div><img src ={employee.profileImg} className="profile-image" alt=""></img></div>
  <div className="employee-name">{employee.name}</div>
  <div className="employee-location">Location <p>{employee.location}</p></div>
  <div className="employee-bloodGroup">Blood group <p>{employee.bloodGroup}</p></div>
  <div className="employee-age">Age <p>{employee.age}</p></div>
  </>
  }
</div>
)
}



export default App;
