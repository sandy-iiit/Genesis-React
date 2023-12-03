// Contact_addresscards.jsx
import React from 'react';

const CompanyCard = ({ companyName, address, city, phone }) => {
  return (
    <div className="company-card">
      <div className="company-details">
        <h2>{companyName}</h2>
        <p>{address}</p>
        <p>{city}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

const ContactAddresscards = () => {
  const companies = [
    {
      id: 0,
      companyName: 'GENESIS PVT LMT',
      address: 'IIIT SRCITY',
      city: 'SriCity, AP',
      phone: '+919618293860'
    },
    {
      id: 2,
      companyName: 'GENESIS PVT LMT',
      address: 'IIIT SRCITY',
      city: 'SriCity, AP',
      phone: '+919618293860'
    },
    {
      id: 3,
      companyName: 'GENESIS PVT LMT',
      address: 'IIIT SRCITY',
      city: 'SriCity, AP',
      phone: '+919618293860'
    }
  ];

  return (
    <div className="adresscards">
      {companies.map((company) => (
        <CompanyCard
          key={company.id}
          companyName={company.companyName}
          address={company.address}
          city={company.city}
          phone={company.phone}
        />
      ))}
    </div>
  );
};


export default ContactAddresscards;
