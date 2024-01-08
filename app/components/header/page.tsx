import Image from "next/image"
export default function Header() {
  return ( <header>
    <div className="flex items-center space-x-2 md:space-x-10">
    <Image
          // https://rb.gy/ulxxee
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          alt="netflix-logo"
          height={100}
          className="cursor-pointer object-contain"
          priority={true}
        />
      <ul className="hidden space-x-4 md:flex">
        <li className="headerLink">Home</li>
        <li className="headerLink">TV Shows</li>
        <li className="headerLink">Movies</li>
        <li className="headerLink">New & Popular</li>
        <li className="headerLink">My List</li>
      </ul>
    </div>
    <div></div>
  </header>
  )
};