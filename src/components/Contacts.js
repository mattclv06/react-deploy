import ContactForms from "./ContactForm";
import React from "react";
import firebaseDb from "../firebase";

const Contacts = () => {

    const addOrEdit = obj =>{
        firebaseDb.child('contacts').push(obj, err => {
            if(err)
            console.log(err);
        })
    }
    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text">
                        Contacts
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForms addOrEdit={addOrEdit}/>
                </div>
            </div>
            <div className="col-md-7">
                <div>
                    list of contacts
                </div>
            </div>
        </>
    );
}

export default Contacts;
