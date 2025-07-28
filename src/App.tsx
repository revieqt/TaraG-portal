import LandingScreen from './screens/Landing'
import ContactScreen from './screens/Contact'
import TermsScreen from './screens/Terms'
import ApplicationScreen from './screens/TourGuideApplication'
import DocsScreen from './screens/Docs'
import DownloadScreen from './screens/Download'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div style={styles.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/terms" element={<TermsScreen />} />
        <Route path="/application" element={<ApplicationScreen />} />
        <Route path="/docs" element={<DocsScreen />} />
        <Route path="/download" element={<DownloadScreen />} />
      </Routes>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
    app: {
        width: '100vw',
        minHeight: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
};