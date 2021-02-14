import React from 'react';
import './Table.css';

function Table() {
    return (
        <div>
            <table className="content-table">
                <thead>
                    <tr>
                        <th> Rank </th>
                        <th> Name </th>
                        <th> Points </th>
                        <th> Team </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rajat</td>
                        <td>100</td>
                        <td>Kepler</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Neha</td>
                        <td>100</td>
                        <td>Kepler</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pritam</td>
                        <td>100</td>
                        <td>Kepler</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mahipal</td>
                        <td>100</td>
                        <td>Kepler</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
