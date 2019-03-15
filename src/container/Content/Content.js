import React, { Component } from 'react';

class Content extends Component {

    state = {
        isEdit: false
    }

    onDelete = () => {
        this.props.onDelete(this.props.id)
    }

    onEdit = () => {
        this.setState({ isEdit: true });
    }

    onEditSubmit = (event) => {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.productName);

        this.setState({ isEdit: false });
    }

    render() {
        return (

          this.state.isEdit ?

          (<div className="row justify-content-center mt-3 mb-3">
              <form className="col-9 col-md-4 p-4 bg-light rounded" onSubmit={this.onEditSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" className="form-control"
                                   id="exampleInputText"
                                   placeholder="Title"
                                   ref={nameInput => this.nameInput = nameInput}
                                   defaultValue={this.props.productName}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">textarea</label>
                        <textarea ref={priceInput => this.priceInput = priceInput }
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  defaultValue={this.props.productPrice}
                                  rows="5"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary float-right">Save</button>
              </form>
          </div>)

          :

          (<div className="row justify-content-center pb-3">
              <div className="col-9 col-md-6">
                  <div className="card">
                      <div className="card-header">
                          {this.props.productName}
                      </div>
                      <div className="card-body">
                        <p>{this.props.productPrice}</p>
                        <button onClick={this.onDelete} className="btn btn-danger mx-1 float-right">Delete</button>
                        <button onClick={this.onEdit} className="btn btn-primary mx-1 float-right">Edit</button>
                      </div>
                  </div>
              </div>
          </div>)

        );
    }
}

export default Content;
