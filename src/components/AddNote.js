import React from 'react'

class AddNote extends React.Component{
    createNote(event){
        event.preventDefault()
        const note = {
            title: this.title.value,
            text: this.text.value,
            image: this.image.value,
            visible: true
        }

        if(note.text !== '' || note.image !== ''){
            this.props.addNote(note)
        }
        
        this.noteForm.reset()
    }

    render(){
        this.titleValue = ""
        this.textValue = ""
        this.imageValue = ""

        

        return(
            <div className="container" id="addNote">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <form ref={(input) => this.noteForm = input} onSubmit={(e) => this.createNote(e)} onChange={(e) => console.log(e)}>
                            <input value={this.titleValue} ref={(input) => this.title = input} type="text" className="form-control" placeholder="Title" />
                            <textarea value={this.textValue} ref={(input) => this.text = input} className="form-control" placeholder="Text" rows="3"></textarea>
                            <div className="input-group mb-3">
                                <input value={this.imageValue} ref={(input) => this.image = input} type="text" className="form-control" placeholder="Image" />
                                <button className="btn btn-outline-secondary" type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNote
