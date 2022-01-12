import React from 'react'

const AppFooter = () => {
  return (
      <div>
        <a href="https://canhbaosom.com/" target="_blank" rel="noopener noreferrer">
          CanhBaoSom
        </a>
        <span className="ms-1">&copy; 2022.</span>
      </div>
  )
}

export default React.memo(AppFooter)
