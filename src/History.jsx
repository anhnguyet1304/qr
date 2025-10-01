export default function History({ data, onReset, onExport }) {
  return (
    <div>
      <h2>Lịch sử điểm danh</h2>
      {data.length === 0 && <p>Chưa có dữ liệu</p>}
      {data.length > 0 && (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>#</th>
              <th>MSSV</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {data.map((h, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{h.mssv}</td>
                <td>{h.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: 10 }}>
        <button onClick={onExport}>Xuất CSV</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  )
}
