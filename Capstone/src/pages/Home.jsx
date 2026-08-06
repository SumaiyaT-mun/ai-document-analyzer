import { useState } from 'react'
import UploadArea from '../components/UploadArea.jsx'
import '../styles/home.css'

const SUPPORTED_TYPES = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']

function Home() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      setErrorMessage('No file was selected. Please try again.')
      setSuccessMessage('')
      setSelectedFile(null)
      return
    }

    const extension = file.name.split('.').pop()?.toLowerCase()
    const isSupportedType =
      SUPPORTED_TYPES.includes(file.type) ||
      ['pdf', 'docx', 'txt'].includes(extension || '')

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('The selected file is too large. Please upload a file smaller than 10 MB.')
      setSuccessMessage('')
      setSelectedFile(null)
      event.target.value = ''
      return
    }

    if (!isSupportedType) {
      setErrorMessage('Unsupported file type. Please upload a PDF, DOCX, or TXT file.')
      setSuccessMessage('')
      setSelectedFile(null)
      event.target.value = ''
      return
    }

    try {
      setIsAnalyzing(false)
      setSelectedFile(file)
      setErrorMessage('')
      setSuccessMessage(`Ready to analyze ${file.name}.`)
      event.target.value = ''
    } catch {
      setErrorMessage('There was a problem selecting the file. Please try again.')
      setSuccessMessage('')
      setSelectedFile(null)
    }
  }

  const handleAnalyze = () => {
    if (!selectedFile) {
      setErrorMessage('Please select a supported file before analyzing.')
      setSuccessMessage('')
      return
    }

    setIsAnalyzing(true)
    setErrorMessage('')
    setSuccessMessage(`Analyzing ${selectedFile.name}...`)

    window.setTimeout(() => {
      setIsAnalyzing(false)
      setSuccessMessage(`Analysis complete for ${selectedFile.name}.`)
    }, 1200)
  }

  return (
    <main className="home-page">
      <section className="hero-section" aria-labelledby="home-heading">
        <div className="hero-copy">
          <p className="eyebrow">Smart document intelligence</p>
          <h1 id="home-heading">AI Document Analyzer</h1>
          <p className="hero-description">
            Upload your documents and turn them into clear insights, summaries, and answers in seconds.
          </p>
        </div>

        <UploadArea
          selectedFile={selectedFile}
          onFileChange={handleFileChange}
          onAnalyze={handleAnalyze}
          isAnalyzing={isAnalyzing}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      </section>
    </main>
  )
}

export default Home
