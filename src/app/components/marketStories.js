import React from 'react';

/**
 * Renders a component that displays market stories.
 *
 * @returns {React.Component} The rendered component.
 */
const MarketStories = () => {
  const stories = [
    {
      imageUrl: '/images/Default.jpg',
      title: 'The Coldest Sunset',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum maxime alias quam, fuga labore soluta odio nobis perspiciatis ea architecto eaque?'
    },
    {
      imageUrl: '/images/Default.jpg',
      title: 'The Brightest Sunrise',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum maxime alias quam, fuga labore soluta odio nobis perspiciatis ea architecto eaque?'
    },
    {
      imageUrl: '/images/Default.jpg',
      title: 'The Mysterious Midnight',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum maxime alias quam, fuga labore soluta odio nobis perspiciatis ea architecto eaque?'
    },
    {
      imageUrl: '/images/Default.jpg',
      title: 'The Dazzling Dawn',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum maxime alias quam, fuga labore soluta odio nobis perspiciatis ea architecto eaque?'
    }
  ];

  return (
    <div className='flex flex-col h-[185vh] sm:h-[130vh] lg:h-[105%] w-[45vw] ml-[-5.5rem] sm:ml-[-4.5rem] lg:mr-5 transition-all duration-300'>
      <h1 className='bg-gray-100 text-red-400 text-3xl mt-3 ml-[8rem] font-bold h-[3rem] pt-2 w-[18rem] pl-2'>MARKET STORIES</h1>
      {stories.map((story, index) => (
        <div key={index} className='bg-white h-[15rem] w-[20rem] ml-[8rem] mt-10 shadow-xl rounded-sm'>
          <img src={story.imageUrl} alt={story.title} className='h-[8rem] w-full'/>
          <p className='pl-5 font-bold'>{story.title}</p>
          <p className='text-sm px-5'>{story.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MarketStories;
