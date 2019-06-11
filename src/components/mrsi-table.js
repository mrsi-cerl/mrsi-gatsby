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
    <Table hover size="md">
      <tbody>{tableRows}</tbody>
    </Table>
  )
}

export default MrsiTable
