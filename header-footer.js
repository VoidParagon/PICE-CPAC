class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="bsce-logo.png" width="30px" alt="">PICE-CPAC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">


                    <li class="nav-item">
                        <a class="nav-link" href="attendance.html">Attendance</a>
                    </li>
                    
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    

                    </ul>
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
            </header>
        `
    }
}


class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer>
                <div class="container">
                <footer class="py-3 my-4">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    </ul>
                    <p class="text-center text-body-secondary">© 2024 Philippine Institute of Civil Engineers - Central Philippine Adventist College Student Chapter</p>
                </footer>
                </div>
            </footer>
        `
    }
}


customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
