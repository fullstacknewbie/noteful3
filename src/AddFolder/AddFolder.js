import React from 'react';
//import ReactDOM from 'react-dom';
//import App from '../App/App';
import Config from '../config'
import ApiContext from '../ApiContext'
//import {Route, Link} from 'react-router-dom';
import './AddFolder.css';
//import { Redirect } from 'react-router';

class AddFolder extends React.Component {
    static contextType = ApiContext;

    handleSubmit(e) {
        e.preventDefault()
        const folder = {
          id: e.target['id'].value,
          name: e.target['name'].value
        }
        fetch(`${Config.API_ENDPOINT}/folders`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(folder),
        })
          //.then(function() {
            //console.log(this.context);
            //console.log("hello");
            //this.history.push('/')
            //this.context(responseData);
            //this.props.history.push('/')
           //})
          //.then(function() {
            //console.log("hello")
            //this.props.history.push(`/`)
          //})
      }

      //returnToHome() {
        //this.props.history.push(`/`)
      //}

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Folder</h2>
                <div>
                    <label htmlFor='name'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                    />
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        )   
    }
}

export default AddFolder;