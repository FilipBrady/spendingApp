const HomePage = () => {
  return (
    <div>
      
    <div className="container-fluid">
      <p className="fs-6 ms-4 mb-0">
        Dnešný dátum: <span id="currentdate">05.09.2022</span>
      </p>
      
      <p className="fs-6 ms-4" >
        Naposledy aktualizované: <span id="lastupdate">25.08.2022</span>
      </p>
    </div>

    <div className="container">
      <div className="row">

        {/* <!--karta s financiami--> */}
        <div className="container col-12 col-lg-6 m-auto mt-3 pe-md-5 px-40">
          
            <div className="card row ps-2 card-style">

              <div className="card-body">
                {/* <!--spotreba a akt-mesiac--> */}
                <h4 className="card-title">
                  Spotreba za: <span id="akt-mesiac">August</span>
                </h4>
              </div>
              {/* <!--prijmy, vydavky a sporenie--> */}
              <div className="container-fluid p-3 pt-0">
                <div className="card-text row">
                  <p className="fs-5 mb-0 col-md-12 col-lg-4">
                    Príjmy: <span className="badge fs-5 p-1 text-bg-success" id="prijmy"> 1850€</span>
                  </p>
                  <p className="fs-5 mb-0 col-md-12 col-lg-4">
                    Výdavky: <span className="badge fs-5 p-1 text-bg-danger" id="vydavky">1160€</span>
                  </p>
                  <p className="fs-5 mb-0 col-md-12 col-lg-4">
                    Sporenie: <span className="badge fs-5 p-1 text-bg-info" id="sporenie">400€</span>
                  </p>
                  <div>
                    <canvas id="myChart"></canvas>
                  </div>

                </div>
                <div className="row my-3 my-sm-4">
                  <div className="col-6 col-sm-6 text-center">
                    <a href="./podrobnosti.html" className=""> 
                      <button type="button" className="btn btn-secondary">Zobraziť Podrobnosti</button>  
                    </a>
                  </div>
                  <div className="col-6 col-sm-6 text-center">
                    <a href="./add.html">
                      <button type="button" className="btn btn-success">
                      Pridať príjem/výdavok
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>


      {/* <!--last month finances--> */}
        <div className="container col-12 col-lg-6 m-auto mt-3">
          <div className="card row ps-2 card-style">

            <div className="card-body">
              {/* <!--spotreba a akt-mesiac--> */}
              <h4 className="card-title">
                Spotreba za: <span id="akt-mesiac">August</span>
              </h4>
            </div>
            {/* <!--prijmy, vydavky a sporenie--> */}
            <div className="container-fluid p-3 pt-0">
              <div className="card-text row">
                <p className="fs-5 mb-0 col-md-12 col-lg-4">
                  Príjmy: <span className="badge fs-5 p-1 text-bg-success" id="prijmy"> 2050€</span>
                </p>
                <p className="fs-5 mb-0 col-md-12 col-lg-4">
                  Výdavky: <span className="badge fs-5 p-1 text-bg-danger" id="vydavky">1280€</span>
                </p>
                <p className="fs-5 mb-0 col-md-12 col-lg-4">
                  Sporenie: <span className="badge fs-5 p-1 text-bg-info" id="sporenie">500€</span>
                </p>
                <div>
                  <canvas id="myChartlast"></canvas>
                </div>

              </div>
              <div className="row my-3 my-sm-4">
                <div className="col-6 col-sm-6 offset-3 text-center">
                  <a href="#./podrobnosti.html"> 
                    <button type="button" className="btn btn-secondary">Zobraziť Podrobnosti</button>  
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>


      {/* <!-- tabulka --> */}
      <div className="container row ">
        <div className="col-12 col-md-10 offset-md-1 mx-auto my-3">
          <div className="card table-responsive text-center">
            <table className="table  table-striped ">
              <thead>
                <tr>
                  <th scope="col" className="fntsize  border">Mesiac</th>
                  <th scope="col" className="fntsize  border">Príjmy</th>
                  <th scope="col" className="fntsize  border">Výdavky</th>
                  <th scope="col" className="fntsize  border ">Sporenie</th>
                  <th scope="col" className="fntsize  border-end-0"></th>
                  <th scope="col" className="fntsize  border-bottom-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="fntsize">Jún</th>
                  <td className="fntsize  border">1870€</td>
                  <td className="fntsize  border">1200€</td>
                  <td className="fntsize  border">250€</td>
                  <td className="fntsize border"><a href="#index" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#index" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Máj</th>
                  <td className="fntsize  border">2500€</td>
                  <td className="fntsize  border">1600€</td>
                  <td className="fntsize  border">350€</td>
                  <td className="fntsize  border"><a href="#index" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#index" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Apríl</th>
                  <td className="fntsize  border">1500€</td>
                  <td className="fntsize  border">1350€</td>
                  <td className="fntsize  border">100€</td>
                  <td className="fntsize  border"><a href="#index" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#index" className="page-link">Zobraziť</a></td>
                </tr>
                {/* <tr>
                  <th scope="row" className="fntsize">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
            {/* <!--Navigacie cez cisla dole pod tabulkou--> */}
            <nav className="w-75 m-auto ">
              <ul className="pagination justify-content-center">
                <li className="page-item d-none d-md-block disabled">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav ">First</a>
                </li>
                <li className="page-item disabled">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav active" href="#index">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#index">2</a>
                </li>
                <li className="page-item d-none d-md-block"><a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#index">3</a></li>
                <li className="page-item fs-4 mx-2 text-primary">...</li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#index">15</a>
                </li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#index">Next</a>
                </li>
                <li className="page-item d-none d-md-block">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#index">Last</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>


      
      </div>
    </div>
    </div>
  )
}
export default HomePage