import React from 'react';

import './_table.scss';

const table = props =>
  (<table className="carousel-container-table">
    <tbody>
      <tr>
        <td>
          Name:
        </td>
        <td>
          {props.name}
        </td>
      </tr>
      <tr>
        <td>
          Role:
        </td>
        <td>
          {props.role}
        </td>
      </tr>
    </tbody>
  </table>);

export default table;
