import Artists from "../components/Artists"

export default function Show ({artists, search}) {
console.log(search)

    return (<Artists search={search} />)
}