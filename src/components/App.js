import React, { Component } from 'react';
import sampleNotes from '../sampleNotes';
import Note from './Note'
import Navbar from './Navbar'
import AddNote from './AddNote'
import '../style.css'

class App extends Component {
  state = {
    notes: {},
    formNote: {
      title: "",
      text: "",
      image: "",
      visible: true
    }
  }
  
  componentWillMount(){
    const localStorageNotesRef = localStorage.getItem('savedNotes')
    const localStorageFormRef = localStorage.getItem('savedForm')

    if(localStorageNotesRef){
      this.setState({
        notes: JSON.parse(localStorageNotesRef)
      })
    }

    if(localStorageNotesRef){
      this.setState({
        formNote: JSON.parse(localStorageFormRef)
      })
    }
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('savedNotes', JSON.stringify(nextState.notes))
    localStorage.setItem('savedForm', JSON.stringify(nextState.formNote))
  }

  componentDidMount(){
    this.searchNote('')
  }

  loadSamples = () => {
    this.setState({
      notes: sampleNotes
    })
  }

  addNote = (note) => {
    const notes = {...this.state.notes}
    const timestamp = Date.now()
    notes[`note-${timestamp}`] = note
    this.setState({ notes })
  }

  removeNote = (key) => {
    const notes = {...this.state.notes}
    delete(notes[key])
    this.setState({ notes })
  }

  editNote = (key) => {
    this.changeFormState(this.state.notes[key])
    this.removeNote(key)
  }

  changeFormState = (note) => {
    this.setState({
      formNote: note
    })
  }

  searchNote = (text) => {
    const notes = {...this.state.notes}

    Object.keys(notes).map(key => {
      if(notes[key].text.toLowerCase().search(text.toLowerCase()) === -1){
        return notes[key].visible = false
      }
      return notes[key].visible = true
    })

    this.setState(notes)
  }

  render() {
    return (
      <div id="entry">
        <Navbar searchNote={this.searchNote} loadSamples={this.loadSamples} />
        <div className="container">
          <AddNote addNote={this.addNote} formNote={this.state.formNote} changeFormState={this.changeFormState} />
          <div className="row">
            <div className="col-lg">
              <div className="card-columns">
                {
                  Object.keys(this.state.notes)
                  .map(key => <Note key={key} index={key} details={this.state.notes[key]} removeNote={this.removeNote} editNote={this.editNote} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
