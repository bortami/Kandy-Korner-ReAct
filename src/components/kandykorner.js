import React, { Component } from "react";
import EmployeeList from "./Employees/employees"
import CandyList from "./Candy/candies"
import StoreList from "./Store/stores"

class KandyKorner extends Component {
  storeArray = [
    { id: 1, name: "East", address: "202 Main Street" },
    { id: 2, name: "Mall", address: "5 Lynn Street" },
    { id: 3, name: "Roadside", address: "54681 Brick Street" }
  ];
  employeeArray = [
    { id: 1, name: "John Ralphio" },
    { id: 2, name: "Ben Wyatt" },
    { id: 3, name: "Leslie Knope" },
    { id: 4, name: "Ron Swanson" }
  ];
  candyTypeArray = [
    { id: 1, type: "chocolate" },
    { id: 2, type: "gummy" },
    { id: 3, type: "hard" },
    { id: 4, type: "taffy" }
  ];
  candyArray = [
    { id: 1, candyName: "M&Ms", candyType: 1 },
    { id: 2, candyName: "Snickers", candyType: 1 },
    { id: 3, candyName: "Laffy Taffy", candyType: 4 },
    { id: 4, candyName: "Nerds", candyType: 3 }
  ];
  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyTypes: this.candyTypeArray,
    candies: this.candyArray
  };
  render() {
    return (
      <article className="KandyKorner">
        <StoreList stores={this.state.stores}/>
        <EmployeeList employees={this.state.employees}/>
        <CandyList candy={this.state.candies} candyTypes={this.state.candyTypes}/>
      </article>
    );
  }
}

export default KandyKorner;
