import React , { Component } from 'react'

class Random extends Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderUserType = () => {
        const data = this.state.userData;
        const mapRows = data.filter(userData =>userData.user_type.includes('Designer')).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderInitial = () => {
        const data = this.state.userData;
        const mapRows = data.filter(userData =>userData.name.includes('J')).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderAge = () => {
        const data = this.state.userData;
        const mapRows = data.filter(userData =>userData.age<=50&& userData.age>28).map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderExperience = () => {
        const data = this.state.userData;
        const mapRows = data.filter(userData => userData.user_type.includes('Designer')).map((item) => (item.years
        )).reduce((total,num) => {
            return total + num;
        });
        return mapRows;
    };
    render(){ 
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <React.Fragment>
            <div id='content'>
                <h1>Display all items</h1>
                <div className='display-box' id='d1'>
                <ul>{this.renderItems()} </ul>
                </div>
                <h1>Display based on user Type</h1>
                <div className="display-box" id='d2'>
                <ul>{this.renderUserType()} </ul>
                </div>
                <h1>Filtr all data starting with J</h1>
                <div className="display-box" id='d3'>
                <ul>{this.renderInitial()} </ul>
                </div>
                <h1>Filtr all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box" id='d4'>
                <ul>{this.renderAge()} </ul>
                </div>
                <h1>Find total years of designers</h1>
                <div className="display-box" id='d5'>
                <ul>{this.renderExperience()} </ul>
                </div>
                </div>
            

          </React.Fragment>
          
        )
    }
   
}
export default Random;