import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-300'>
    <div className='flex flex-col gap-2 md:flex-row justify-between items-center py-4 w-4/5 mx-auto font-heading text-dark'>
      {/* social Links  */}
      <div className="socials flex items-center gap-4">
        <div className='flex flex-col items-center justify-center cursor-pointer'>
          <img src="/ig.svg" alt="Ig" />
          <span className=''>Instagram</span>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer'>
          <img src="/facebook.svg" alt="Ig" />
          <span>Facebook</span>
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer'>
          <img src="/twiter.svg" alt="Ig" />
          <span>Twitter</span>
        </div>
      </div>

      {/* copRight  */}
      <div className="copyright">© 2024 The Gilded Fork. All rights reserved.</div>
    </div>
    </footer>
  )
}

export default Footer