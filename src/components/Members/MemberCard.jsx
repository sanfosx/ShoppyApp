import React, { useState } from "react";
import "../../css/Member.css";

export const MemberCard = ({ member }) => {
    const imgURL = `../../public/image/${member.image}`;

    const [viewContact, setViewContact] = useState(false);

    function handleContactClick() {
        setViewContact(!viewContact);
    }

    return (
        <div className="col-sm-3 p-2 mb-2">
            <div className="card p-2">
                {/* Foto del integrante */}
                <img className="card-image w-50 mx-auto rounded-3"
                    src={imgURL}
                    alt={member.name} />
                {/* Detalle del integrante */}
                <div className="card-body">
                    <h5 className="card-title text-center">{member.name}</h5>
                    <p className="card-text">{member.description}</p>
                    <button className="btn btn-primary" onClick={handleContactClick}>
                        {viewContact ? <i class="bi bi-eye-slash"></i> : <i class="bi bi-eye"></i>} Contacto
                    </button>
                    {viewContact && <p className="cellPhoneContact">{member.cellPhone}</p>}
                    {viewContact && <p className="mailContact">{member.mail}</p>}   
                </div>
            </div>
        </div>
    );
};
