import React from 'react';

function PageWrapper({children} :PageWrapperProps) {
  return (
    <div className="d-flex flex-row">
      {children}
    </div>
  )
}

interface PageWrapperProps {
   children : React.ReactNode
}

export default PageWrapper
