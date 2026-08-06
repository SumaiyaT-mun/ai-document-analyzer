import { useRef } from 'react'

function UploadArea({
  selectedFile,
  onFileChange,
  onAnalyze,
  isAnalyzing,
  errorMessage,
  successMessage,
}) {
  const inputRef = useRef(null)
  const inputId = 'document-upload'

  const openFilePicker = () => {
    inputRef.current?.click()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openFilePicker()
    }
  }

  return (
    <div className="upload-panel">
      <label
        className={`upload-zone ${selectedFile ? 'has-file' : ''}`}
        htmlFor={inputId}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-describedby="upload-help"
      >
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          className="visually-hidden"
          accept=".pdf,.docx,.txt"
          aria-label="Upload a document"
          onChange={onFileChange}
        />
        <div className="upload-icon" aria-hidden="true">
          ⬆
        </div>
        <p className="upload-title">Drop your document here</p>
        <p id="upload-help" className="upload-help">
          Or click to browse for a PDF, DOCX, or TXT file.
        </p>
      </label>

      <div className="upload-details" aria-live="polite">
        <label className="upload-label" htmlFor={inputId}>
          Selected file
        </label>
        <p className="selected-file" aria-live="polite">
          {selectedFile ? selectedFile.name : 'No file selected yet.'}
        </p>

        {errorMessage ? (
          <p className="message error" role="alert">
            {errorMessage}
          </p>
        ) : null}

        {successMessage ? (
          <p className="message success" role="status">
            {successMessage}
          </p>
        ) : null}
      </div>

      <button
        type="button"
        className="analyze-button"
        onClick={onAnalyze}
        disabled={!selectedFile || isAnalyzing}
      >
        {isAnalyzing ? 'Analyzing...' : 'Analyze Document'}
      </button>
    </div>
  )
}

export default UploadArea
