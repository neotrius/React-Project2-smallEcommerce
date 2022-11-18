function Footer() {
    return <footer className="page-footer green darken-4">
        <div className="footer-copyright">
            <div className="container ">
                © {new Date().getFullYear()} Yevgen Prushynskyy
                <a className="grey-text text-lighten-4 right"
                   href="src/layout/Footer#!">Github</a>
            </div>
        </div>
    </footer>
}

export default Footer
