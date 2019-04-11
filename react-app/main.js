import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
/*class Header extends React.Component {
    render() {
        return ( 
            <h1>Header</h1>
        );
    }
}

var myEmployee = { id: '3017', firstname: 'Kraipob', lastname: 'Saengkhunthod' };
class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
                <div>ID: <input type="text" id="id" /></div>
                <div>First name: <input type="text" id="firstname" /></div>
                <div>Last name: <input type="text" id="lastname" /></div>
                <div><input type="submit" id="btnSave" value="Save" /></div>
                <div>
                    <div>{this.props.employee.id}</div>
                    <div>{this.props.employee.firstname}</div>
                    <div>{this.props.employee.lastname}</div>
                </div>
            </div>

        );
    }
}
class Footer extends React.Component {
    render() {
        return (
            <h1>Footer</h1>
        );
    }
}

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content employee = {myEmployee} />, document.getElementById('content'));

let id = document.getElementById('id');
let btnSave = document.getElementById('btnSave');
btnSave.addEventListener('click', function(){
    console.log(id.value);
});*/
ReactDOM.render(<App />, document.getElementById('footer'));

