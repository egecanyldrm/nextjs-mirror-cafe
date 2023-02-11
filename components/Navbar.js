import Link from "next/link"

const Navbar = () => {
  return (
    <header className='  navbar-background py-4 fixed z-10 w-full '>
      <div className="flex bg-white-300 justify-center">
        <Link href='/' className="text-lg font-bold tracking-wides" > Mirror Public House </Link>
        {/* <nav>
          <Link href='#' > Hakkımızda</Link>
        </nav> */}
      </div>
    </header>
  )
}

export default Navbar