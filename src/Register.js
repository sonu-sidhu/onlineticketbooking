import React, { useState } from "react";
import { api_url } from "../src/config/Config";
import _fetch from "./config/api";
import toasted from "./config/toast";

export default function Register() {

    const [allFields, setAllFields] = useState({
        'name': "",
        'email': "",
        'phone': Number,
        'password': ""
    });

    const FieldsData = (event) => {
        setAllFields({
            ...allFields,
            [event.target.name]: event.target.value
        });
    }

    const SubmitRegister = async (e) => {
        e.preventDefault();

        let response = await _fetch(`${api_url}auth/register`, "POST", allFields, {});
       console.log('response',response);
       
        if (response?.status == 'success') {
            toasted.success(response?.message);
        }
        else {
            toasted.error(response?.message);
        }
    }

    return (
        <>
            <div className="main-div-for-form">
                <div className="form-container">
                    <form className="form">
                        <h2 className="form-title"> Register </h2>
                        <div className="form-group">
                            <label htmlFor="field1" className="form-label">Name</label>
                            <input type="text" id="field1" className="form-input" placeholder="Enter Name" name="name" value={allFields?.name} onChange={FieldsData} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="field2" className="form-label">Email</label>
                            <input type="text" id="field2" className="form-input" placeholder="Enter Email" name="email" value={allFields?.email} onChange={FieldsData} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="field3" className="form-label">Phone</label>
                            <input type="text" id="field3" className="form-input" placeholder="Enter Phone" name="phone" value={allFields?.phone} onChange={FieldsData} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="field4" className="form-label">Password</label>
                            <input type="text" id="field4" className="form-input" placeholder="Enter Password" name="password" value={allFields?.password} onChange={FieldsData} />
                        </div>
                        <button type="submit" className="form-button" onClick={SubmitRegister}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}