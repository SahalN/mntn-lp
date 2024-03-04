/** @format */

export default function Header() {
  return (
    <>
      <div id='header' className='flex flex-row justify-between px-20 py-16 '>
        <div>
          <img src='/images/Logo.png' alt='' />
        </div>
        <div>
          <nav>
            <ul className='flex flex-row gap-10'>
              <li>Equipment</li>
              <li>About us</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <div>
          <div>
            <img src='' alt='' />
          </div>
          <div>
            <p>Account</p>
          </div>
        </div>
      </div>
    </>
  );
}
