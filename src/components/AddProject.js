import React, { Component } from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'


class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject: { }
        }
    }

    static defaultProps = {
        categories: ['hello1', 'hello2', 'hello3']
    }
    handleSubmit(e){
        if(this.refs.title.value === "") {
            alert("please provide title"); 
        } else {
            this.setState({newProject:{
                id: uuid.v4(), 
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                //console.log(this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }
    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
        	<div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label><br/>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <br />
                        <label>Category</label><br/>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <div>
                        <br/>
                        <input type="submit"/> 
                    </div>
                </form>
            </div>
        );
    }
}

AddProject.propTypes = {
    addProject: PropTypes.func,
    categories: PropTypes.array
}

export default AddProject;