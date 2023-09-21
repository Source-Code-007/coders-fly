import logo from '/public/assets/img/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 my-bg-one text-slate-100 border-t border-slate-600">
            <aside>
                <img src={logo} className='h-20 w-24 mx-auto' />
                <h2 className='my-title-2'>Coders Fly</h2>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Web Development</a>
                <a className="link link-hover">Mobile Apps development</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Artificial Intelligence</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;