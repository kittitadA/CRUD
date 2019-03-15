import React, { Component } from 'react';

class Add extends Component {

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);
    }

    render() {
        return (
          <div className="row justify-content-center mt-3 mb-3">
              <form className="col-9 col-md-4 p-4 bg-light rounded" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" className="form-control"
                                   id="exampleInputText"
                                   ref={nameInput => this.nameInput = nameInput}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">textarea</label>
                        <textarea ref={priceInput => this.priceInput = priceInput }
                                  className="form-control" id="exampleFormControlTextarea1"
                                  rows="5"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary float-right">Submit</button>
              </form>
          </div>
        );
    }
}

export default Add;
