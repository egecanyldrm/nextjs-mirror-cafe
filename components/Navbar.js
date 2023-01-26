import Link from "next/link"

const Navbar = () => {
  return (
    <header className='  navbar-background py-5 fixed z-10 w-full '>
      <div className="flex bg-white-300 justify-center">
        <Link href='/' className="text-2xl font-bold tracking-wides" > Mirror Public House </Link>
        {/* <nav>
          <Link href='#' > Hakkımızda</Link>
        </nav> */}
      </div>
    </header>
  )
}

export default Navbar