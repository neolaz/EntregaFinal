import logo from "../../../img/logo.svg";

const BrandLogo = () => {
    return (
        <>
            <a className="brandLogo" href="/">
                <img src={logo} alt="Logo de MangaHouse" />
                <p className="textBrand">MangaHouse</p>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
        </>
    );
}
    
export default BrandLogo;