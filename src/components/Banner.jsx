import React from 'react';

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_yg2d6JL0NqMyR02-V31y83aZYtOu96k0A&usqp=CAU)'}}>
      <div className='text-white text-2xl text-center w-full bg-red-900/60 p-4'>Film City</div>
    </div>
  );
}

export default Banner;
