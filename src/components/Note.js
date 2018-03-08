import React from 'react'

class Note extends React.Component{
    render(){
        const { details } = this.props

        if(!details.visible){
            return(null)
        }

        let image = ''
        let text = ''
        let title = ''
        const removeButton = <button onClick={() => this.props.removeNote(this.props.index)} className="btn btn-outline-secondary btn-sm float-right"><span role="img" aria-label="Close">❌</span></button>
        const editButton = <button onClick={() => this.props.editNote(this.props.index)} className="btn btn-outline-secondary btn-sm float-right"><span role="img" aria-label="Edit">✏️</span></button>
        
        if(details.image !== ''){
            image = <img src={details.image} alt='' className="card-img-top"/>
        }

        if(details.text !== ''){
            text = <p className="card-text">{details.text}</p>
        }
        
        if(details.title !== ''){
            title = <h5 className="card-title">{details.title}{removeButton}{editButton}</h5>
        }
        else{
            title = <h5 className="card-title">{removeButton}{editButton}</h5>
        }

        return(
            <div className="card">
                {image}
                <div className="card-body">
                    {title}
                    {text}
                </div>
            </div>
        )
    }
}

export default Note
