import './Container.css'

// eslint-disable-next-line react/prop-types
export const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
    </>
  )
}
