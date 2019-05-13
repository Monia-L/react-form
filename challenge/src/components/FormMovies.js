import React, { Component } from 'react';
import './FormMovies.css'

class FormMovies extends Component {
  state = {
      name: '',
      poster: '',
      comment: '',
    }
  
    onChange = (e) => {
        this.setState({           
             [e.target.name]: e.target.value,
        })
        // console.log(e.target.value);
    };

  submitForm = (e) => {
    e.preventDefault();

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res)
          alert(`${this.state.name} a été ajouté avec l'ID ${res}!`);
        }
      }).catch(e => {
        console.error(e);
        alert('Erreur lors de l\'ajout d\'un employé');
      });
  }

    render () {
      console.log(this.state)
        return(
            <>
            <div className="FormEmployee">
 <h1>Saisi ton fim préféré</h1>

 <form onSubmit={this.submitForm}>
   <fieldset>
     <legend>Informations</legend>
     <div className="form-data">

       <label htmlFor="lastname">Nom</label>
       <input
         type="text"
         name="name"
         onChange={this.onChange}
         value={this.state.lastname}
       />
     </div>

     <div className="form-data">
       <label htmlFor="firstname">Poster</label>
       <input
         type="text"
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
export default FormMovies