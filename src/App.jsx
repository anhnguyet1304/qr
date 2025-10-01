import { useState } from 'react'
import Scanner from './Scanner'
import History from './History'
import QRGenerator from './QRGenerator'

export default function App() {
  const [history, setHistory] = useState([])
  const [tab, setTab] = useState('scanner')

  const addRecord = (mssv) => {
    const timestamp = new Date().toLocaleString()
    setHistory((prev) => [...prev, { mssv, timestamp }])
  }

  const resetHistory = () => setHistory([])

  const exportCSV = () => {
    const header = 'MSSV,ThoiGian\n'
    const rows = history.map((h) => `${h.mssv},${h.timestamp}`).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'attendance.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>📷 QR Attendance</h1>
      <div>
        <button onClick={() => setTab('scanner')}>Scanner</button>
        <button onClick={() => setTab('history')}>History</button>
        <button onClick={() => setTab('generator')}>QR Generator</button>
      </div>

      {tab === 'scanner' && <Scanner onScan={addRecord} />}
      {tab === 'history' && (
        <History data={history} onReset={resetHistory} onExport={exportCSV} />
      )}
      {tab === 'generator' && <QRGenerator />}
    </div>
  )
}
