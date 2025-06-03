import HeaderDesktop from './header-desktop'
import HeaderMobile from './header-mobile'

function Header() {
  return (
    <header className="w-full bg-[#3c7269]">
      <div className="py-2.5 px-4 xl:py-[35px] xl:px-10">
        <HeaderMobile />
        <HeaderDesktop />
      </div>
    </header>
  )
}

export default Header
