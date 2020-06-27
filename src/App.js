import React, { Component, useEffect, useState } from 'react';

const Company = ({ name, catchPhrase }) => {
  useEffect(() => {
    return () => console.log(`company ${name}  will unmount`);
  }, []);

  return (
    <div style={{ border: '1px solid rgba(0,0,0,.2)', borderRadius: 10 }}>
      Company : {name}
      location : ioinon
      <p>{catchPhrase}</p>
    </div>
  );
};

class Usuario extends Component {
  state = { showCompany: true };
  render() {
    const { name, email, company } = this.props.user;
    return (
      <div
        style={{ fontWeight: 10, width: '%33vw', borderRadius: 5, border: '1px solid blue', margin: 10, padding: 10 }}
      >
        <button
          onClick={() => {
            this.setState((prevState) => ({ showCompany: !prevState.showCompany }));
          }}
        >
          {this.state.showCompany ? 'Hide Company' : 'show Company'}
        </button>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{name}</span>
          <span>{email}</span>
        </div>
        {this.state.showCompany && <Company {...company} />}
      </div>
    );
  }
}

const Demo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData);
      });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setUsers((ps) => {
            return ps.filter((item) => item.id !== 1);
          });
        }}
      >
        delete
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {users.map((user) => (
          <Usuario user={user} key={user.name} />
        ))}
      </div>
    </>
  );
};

export default Demo;
