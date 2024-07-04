import React from 'react';

const KnapsackMatrix = ({ matrix }) => {
  // Check if the matrix is null or undefined
  if (!matrix) {
    return <div></div>;
  }

  return (
    <div style={{ marginTop: '350px', overflowX: 'auto' }}>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
        }}
      >
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: '1px solid #dddddd',
                    textAlign: 'center',
                    padding: '8px',
                    backgroundColor: rowIndex === matrix.length - 1 && colIndex === row.length - 1 ? '#d2c99e' : '#ffffff',
                    // Blue for the last row and last column, white for others
                  }}
                >
                  {`${cell.value}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div style={{ display: 'block', color: '#aaaaaa', textAlign: 'center', fontSize: '30px' }}>Tableau des valeurs </div>
    </div>
  );
};

export default KnapsackMatrix;
