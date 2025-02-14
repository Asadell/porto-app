const Footer = () => {
  return (
    <footer className="w-full px-[120px] my-16">
      <div className="border-b border-gray-300 my-4"></div>
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://asadel-portfolio.vercel.app/" className="hover:underline">Asadel</a>. All Rights Reserved.
          </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
    // <h1 className="w-full px-[120px] my-16">
    //   <div className="border-b border-gray-300 my-4"></div>
    //   Footer
    // </h1>
  )
}

export default Footer;
