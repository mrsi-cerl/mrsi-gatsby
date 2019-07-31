import React from "react"
import Table from "react-bootstrap/Table"

function MrsiTable(props) {
  const tableRows = props.data.map(row => (
    <tr>
      <td>
        <strong>{row.title}</strong>
      </td>
      <td>{row.value}</td>
    </tr>
  ))
  return (
    <Table className="usa-table" hover size="md" style={{ marginTop: 0 }}>
      <tbody>{tableRows}</tbody>
    </Table>
  )
}

export default MrsiTable
