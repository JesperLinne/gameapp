import React from 'react'
import './HejPage.css'

export const HejPage: React.FC = () => {

    const menuOptions = [
        { title: 'Option 1', onClick: () => console.log('1') },
        { title: 'Option 2', onClick: () => console.log('2') },
        { title: 'Option 3', onClick: () => console.log('3') },
      ]

      return (
        <div className="user-page">
          <h1 className="user-page__title">Username</h1>
          <ul className="user-page__menu">
            {menuOptions.map((option, index) => (
              <li key={index} onClick={option.onClick} className="user-page__menu-item">
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )
}
