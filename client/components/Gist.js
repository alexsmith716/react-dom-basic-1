
const Gist = ({ url, id, files, description, owner}) =>

    <section id={id}>

        <h1>{id}</h1>

    </section>


Gist.displayName = 'Gist'

export default Gist

// "url":
// "files": { "filename": }
// "description": "Testing userAgent HTML5 constraints",
// "owner": { "avatar_url": , "html_url": }