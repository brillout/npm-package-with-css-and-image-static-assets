import './some-static-style.css'
import imgUrl from './some-static-image.svg'

export { ComponentWithStaticAssets }

function ComponentWithStaticAssets() {
  return React.createElement(
    'span',
    {
      className: 'colorized'
    },
    React.createElement(Img, {
      src: imgUrl
    }),
    ' Hello from lib'
  )
}
