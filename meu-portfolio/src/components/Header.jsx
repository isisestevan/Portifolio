import React from 'react'


const Header = () => {
  return (
    <div>
      <header className='fixed w-full flex justify-between items-center p-4 z-50 bg-transparent'>
        <a href='#' className='text-3xl font-extrabold text-black-500 hover:scale-110'>Isis Estevan</a>
        <nav>
            <a href='#'>Início</a>
            <a href='#'>Projetos</a>
            <a href='#'>Skils</a>
            <a href='#'>Educação</a>
            <a href='#'>Contato</a>
        </nav>
      </header>
    </div>
  )
}

export default Header
