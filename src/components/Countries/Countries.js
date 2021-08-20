import React from 'react';

const Countries = (props) => {
    return (
        <table className={'table table-hover'}>
            <thead className='thead-light'>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Country</th>
                <th scope="col">Total Confirmed</th>
            </tr>
            </thead>
            <tbody>
            {props.countries.map((item, index) =>
                <tr>
                    <th scope='row' key={item.ID}>{index}</th>
                    <td>{item.Country}</td>
                    <td>{item.TotalConfirmed}</td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default Countries;