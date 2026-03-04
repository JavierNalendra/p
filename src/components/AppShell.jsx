import { useEffect, useState } from 'react'
import ContentContainer from './ContentContainer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import RiskCenterPage from '../pages/RiskCenterPage'
import CurationPage from '../pages/CurationPage'
import RequestsPage from '../pages/RequestsPage'
import AccessReviewsPage from '../pages/AccessReviewsPage'
import EventsPage from '../pages/EventsPage'
import DashboardPage from '../pages/DashboardPage'
import ExplorePage from '../pages/ExplorePage'
import ConfigurationPage from '../pages/ConfigurationPage'

const pageMap = {
  'risk-center': { component: RiskCenterPage, title: 'Risk Center' },
  'curation': { component: CurationPage, title: 'Curation' },
  'requests': { component: RequestsPage, title: 'Requests' },
  'access-reviews': { component: AccessReviewsPage, title: 'Access Reviews' },
  'events': { component: EventsPage, title: 'Events' },
  'dashboard': { component: DashboardPage, title: 'Dashboard' },
  'explore': { component: ExplorePage, title: 'Explore' },
  'configuration': { component: ConfigurationPage, title: 'Configuration' },
}

function AppShell() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('risk-center')

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setLoading(false), 900)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const currentPageConfig = pageMap[currentPage]
  const CurrentPageComponent = currentPageConfig?.component || RiskCenterPage

  return (
    <div className="h-screen p-4">
      <div className="flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar pageTitle={currentPageConfig?.title} notificationsLoading={loading} />
          <ContentContainer loading={loading}>
            <CurrentPageComponent />
          </ContentContainer>
        </div>
      </div>
    </div>
  )
}

export default AppShell
