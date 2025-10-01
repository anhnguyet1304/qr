import { useEffect, useRef } from 'react'
import { BrowserMultiFormatReader } from '@zxing/library'

export default function Scanner({ onScan }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader()

    codeReader.decodeFromVideoDevice(
      null,
      videoRef.current,
      (result, error) => {
        if (result) {
          const text = result.getText()
          if (text.startsWith('ATTEND:')) {
            const mssv = text.split(':')[1]
            onScan(mssv)
            alert('Điểm danh thành công MSSV: ' + mssv)
          }
        }
        if (error && !(error.name === 'NotFoundException')) {
          console.error(error)
        }
      }
    )

    // Cleanup: tắt camera khi unmount
    return () => {
      codeReader.reset()
    }
  }, [onScan])

  return (
    <div>
      <h2>Quét QR</h2>
      <video ref={videoRef} style={{ width: '100%', maxWidth: 400 }} />
    </div>
  )
}
