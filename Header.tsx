// // // import Link from 'next/link'
// // // import React from 'react'

// // // const Header = () => {
// // //   return (
// // //       <div className="flex justify-between px-4 shadow-2xl bg-gray-500">
// // //       <div className='flex gap-4'>
// // //       <div className='cursor-pointer'><Link href="/">HOME</Link></div>
// // //       <div className='cursor-pointer'><Link href=" https://wa.me/qr/FWX3BWWPABVRG1 ">CONTACT</Link></div>
// // //       <div className='cursor-pointer'><Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/">FACEBOOK</Link></div>
// // //       <div className='cursor-pointer'><Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc">TIKTOK</Link></div>
// // //       <div className='cursor-pointer'><Link href=".html">ABOUT</Link></div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default Header
// // import Link from 'next/link';
// // import React from 'react';

// // const Header = () => {
// //   return (
// //     <div className="flex justify-between px-4 shadow-2xl bg-gray-500">
// //       <div className='flex gap-4'>
// //         <div className='cursor-pointer'>
// //           <Link href="/" passHref>
// //           HOME
// //           </Link>
// //         </div>
// //         <div className='cursor-pointer'>
// //           <Link href="https://wa.me/qr/FWX3BWWPABVRG1" passHref>
// //           CONTACT
// //           </Link>
// //         </div>
// //         <div className='cursor-pointer'>
// //           <Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/" passHref>
// //           FACEBOOK
// //           </Link>
// //         </div>
// //         <div className='cursor-pointer'>
// //           <Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc" passHref>
// //           TIKTOK
// //           </Link>
// //         </div>
// //         <div className='cursor-pointer'>
// //           <Link href="/about" passHref>
// //           ABOUT
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;
// import Link from 'next/link';
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center px-4 shadow-2xl bg-gray-500">
//       <div className='flex gap-4 whitespace-nowrap'>
//         <Link href="/" passHref>
//           HOME
//         </Link>
//         <Link href="https://wa.me/qr/FWX3BWWPABVRG1" passHref>
//           CONTACT
//         </Link>
//         <Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/" passHref>
//           FACEBOOK
//         </Link>
//         <Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc" passHref>
//           TIKTOK
//         </Link>
//         <Link href="/about" passHref>
//           ABOUT
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 shadow-2xl bg-gray-500">
      <div className='flex gap-4'>
        <Link href="/" passHref>
          HOME
        </Link>
        <Link href="https://wa.me/qr/FWX3BWWPABVRG1" passHref>
          CONTACT
        </Link>
        <Link href="https://www.facebook.com/share/EKwJ9SZ7VMLdxUYz/" passHref>
          FACEBOOK
        </Link>
        <Link href="https://www.tiktok.com/@rivayatiandaz1?is_from_webapp=1&sender_device=pc" passHref>
          TIKTOK
        </Link>
        <Link href="/about" passHref>
          ABOUT
        </Link>
      </div>
    </div>
  );
}

export default Header;
