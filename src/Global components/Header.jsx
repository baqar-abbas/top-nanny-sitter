import headerLogo from '/headerlogo.svg'
const Header = () => {
  return (
    <header className='flex justify-between items-center px-10 h-24 fixed top-0 w-full bg-white shadow-md'>
      <div className="logo">
        <img src={headerLogo} alt="Header Logo" />
      </div>
<div className='links'>
    <ul className='flex'>
        <li className='mr-5 hover:underline cursor-pointer'>For Families</li>
        <li className='mr-5 hover:underline cursor-pointer'>For Nannies</li>
        <li className='mr-5 hover:underline cursor-pointer'>Nanny Share</li>
        <li className='hover:underline cursor-pointer'>Services</li>
    </ul>
</div>
<div>
    <button className='bg-red-500 text-white py-2 px-4 rounded'>Get Started</button>
</div>
    </header>
  )
}

export default Header;
