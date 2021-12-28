import React, { Component } from 'react'

export class Users extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-12'>
<form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Nom</label>
    <input type="nom" className="form-control" id="exampleFormControlInput1" placeholder="nom"/>
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">Prenom</label>
    <input type="prenom" className="form-control" id="exampleFormControlInput1" placeholder="prenom"/>
  </div>
 
  <div className="form-group">
    <button className='btn btn-primary'>Ajoute</button>
    </div>
</form>
</div> 
</div>     
</div>  
        )
    }
}

export default Users
