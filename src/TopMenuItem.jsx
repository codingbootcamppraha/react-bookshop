export default function TopMenuItem({ currentItem, slug, label }) {

    return (
        <a
            className={ 'link' + (currentItem === slug ? ' link--highlighted' : '') }
            href="#"
        >
            { label }
        </a>
    )
}