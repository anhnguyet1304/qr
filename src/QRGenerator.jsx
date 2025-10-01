import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export default function QRGenerator() {
  const [mssv, setMssv] = useState('123456')

  return (
    <div style={{ padding: 20 }}>
      <h2>QR Generator</h2>
      <input
        type="text"
        value={mssv}
        onChange={(e) => setMssv(e.target.value)}
        placeholder="Nhập MSSV"
      />
      <div style={{ marginTop: 20 }}>
        <QRCodeCanvas
          value={`ATTEND:${mssv}`}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </div>
      <p>
        QR chứa nội dung: <b>ATTEND:{mssv}</b>
      </p>
    </div>
  )
}
