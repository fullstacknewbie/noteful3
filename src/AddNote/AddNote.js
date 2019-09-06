import React from 'react';
//import ReactDOM from 'react-dom';
//import App from '../App/App';
import Config from '../config'
import ApiContext from '../ApiContext'
import './AddNote.css'

addNote = note => {
    this.setState({
        notes: [...this.state.notes,note]
    })
}

class AddNote extends React.Component {
    static contextType = ApiContext;
    handleSubmit(e) {
        e.preventDefault();
        const note = {
            id: e.target['folderId'].value,
            name: e.target['name'].value,
            modified: new Date(),
            folderId: e.target['folderId'].value,
            content: e.target['content'].value
        }
        console.log(note);
        fetch(`${Config.API_ENDPOINT}/notes`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(note),
        })
           .then(note => {
             //console.log(this.context);
                this.context.addNote(note);
           })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Note</h2>
                <div>
                    <label htmlFor='name'>
                        Note Name
                    </label>
                    <input
                        type='text'
                        name='name'
                    />
                     <label htmlFor='name'>
                        Note Content
                    </label>
                    <textarea
                        type='text'
                        name='content'
                    />
                    <label htmlFor='name'>
                        Folder
                    </label>
                    <select
                        name='folderId'
                    >
                    <option value={null}>...</option>
                    {this.context.folders.map(folder => (
                        <option key={folder.name} name='folderId' value={folder.id}>
                            {folder.name}
                        </option>
                    ))}
                    </select>
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        )   
    }
}

export default AddNote;