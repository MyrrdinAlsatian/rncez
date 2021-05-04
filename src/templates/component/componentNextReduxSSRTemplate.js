module.exports = `
import {initializeStore} from '../../store'


export default function TemplateName({}) {
    return (
        <>
          TemplateName
        <>
    )
}
export function getServerSideProps() {
  const reduxStore = initializeStore()
  const { dispatch } = reduxStore

  dispatch({
    
  })

  return { props: { initialReduxState: reduxStore.getState() } }
}
`;
