import Link from 'next/link'

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/" exact><a>Home</a></Link>
      </li>
      <li>
        <Link href="/about"><a>About</a></Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        background: #444;
        color: #fff;
        list-style: none;
        display: flex;
      }

      ul li {
        font-size: 1.5em;
        margin-right: 20px;
        padding: 15px 10px;
      }

      ul li a {
        color: #fff;
        text-decoration: none;
      }
    `}</style>
  </div>
)

export default Navbar