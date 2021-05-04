module.exports = `
function TemplateName({ data }) {
  // Render data...
  return (
        <>
          TemplateName
        </>
    )
}

// This gets called on every request
export function getStaticProps() {
 
  // Pass data to the page via props
  return { props: { data } }
}

export default TemplateName`;
