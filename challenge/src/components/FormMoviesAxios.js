import React, { Component } from 'react';
import './FormMovies.css';
import axios from "axios"

class FormMoviesAxios extends Component {
    state = {
        name: '',
        poster: '',
        comment: '',
    }

    onChange = (e) => {
        this.setState({           
             [e.target.name]: e.target.value,
        })
       
        console.log(e.target.value);
    };

    submitForm = async (e) => {
        e.preventDefault();
        const config = {
            name: this.state.name,
            poster: this.state.poster,
            comment: this.state.comment,
        };
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        
        axios.post(url,config)

            .then(response => {
                console.log(response);
                alert(`film ${this.state.name} bien enregistré au n°${response.data}!`)
            })

              .catch(e => { 
                console.error(e);
                alert(e);
               }); 
    };

    render () {
        return(
            <>
            <div className="FormEmployee">
 <h1>Saisi ton fim préféré - AXIOS</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">

       <label htmlFor="lastname">Nom du film</label>
       <input
         type="text"
         name="name"
         onChange={this.onChange}
         value={this.state.lastname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="firstname">Poster du film</label>
       <input
         type="text"
         id="poster"
         name="poster"
         onChange={this.onChange}
         value={this.state.firstname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="email">Commentaire</label>
       <input
         type="textarea" 
         name="comment"
         onChange={this.onChange}
         value={this.state.email}
       />
     </div>
     <hr />
     <div className="form-data">
       <input type="submit" value="Envoyer" />
     </div>
   </fieldset>
 </form>
</div>
        </>
        )
    }
}
export default FormMoviesAxios