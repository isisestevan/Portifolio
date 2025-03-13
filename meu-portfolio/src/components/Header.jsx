import React from 'react'

const navList =[
  {
    id: 1,
    data:"Início"
  },
  {
    id: 2,
    data:"Projetos"
  },
  {
    id: 3,
    data:"Skills"
  },
  {
    id: 4,
    data:"Educação"
  },
  {
    id: 5,
    data:"Contato"
  }
]

const Header = () => {
  return (
   
      <header className='fixed w-full flex justify-between items-center p-4 z-50 bg-transparent'>
        <a href='#' className='text-3xl font-extrabold text-black-500 hover:scale-110 transition duration-300'>Isis Estevan</a>
        <nav>
          {navList.map((item) =>(
          <a key={item.id} href='#' className='ml-8 text-lg font-medium text-black hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
          ))}
          
            
        </nav>
      </header>
    
  )
}

export default Header
