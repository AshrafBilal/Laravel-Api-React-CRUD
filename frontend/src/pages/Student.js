import axios from "axios";
import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Student extends Component{

    state = {
        students : [],
        loading : true,
    }
    
    async componentDidMount () {
        const res = await axios.get('http://127.0.0.1:8000/api/students');
        
        if(res.data.status === 200){
            this.setState({
                students: res.data.students,
                loading : false,
            });
        }
    }
    render(){

        var Student_HTMLTABLE = "";
        if(this.state.loading){
            Student_HTMLTABLE = <tr><td colSpan="7">Loading ...</td></tr>
        }
        else{
            Student_HTMLTABLE =
            this.state.students.map( (item) => {
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <Link to={`edit-student/${item.id}`} className="btn btn-success">Edit</Link>
                        </td>
                        <td>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                )
            });
        }
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h4>Students
                                    <Link to={'add-student'} className="btn btn-primary float-end">Add Student</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>Name</td>
                                            <td>Course</td>
                                            <td>Email</td>
                                            <td>Phone</td>
                                            <td>Edit</td>
                                            <td>Delete</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Student_HTMLTABLE}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Student;