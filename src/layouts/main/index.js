import Header from './header'
import Footer from './footer'
import Copyright from './copyright'

export default function MainLayout({ children }) {
  return (
    <main className="relative z-0">
      <Header />
      <div className="relative z-0 flex-grow">{children}</div>
      <div className="relative z-0">
        <Footer />
      </div>
      <div className="relative z-10">
        <Copyright />
      </div>
    </main>
  )
}
