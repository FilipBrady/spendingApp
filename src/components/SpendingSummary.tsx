const SpendingSummary = () => {
  return (
    <div>
      
  {/* <!-- talcidlo domov --> */}
  <div className="container my-3">
    <a href="./index.html">
        <button className="btn bg-light p-1 py-0 rounded-4 align-middle">
                <h1 className="fs-4 mb-0"><i className="fa-sharp fa-solid fa-house fs-5 px-1 py-1"></i>Domov</h1>
        </button></a>
  </div>


    <h1 className="text-center">Súhrn</h1>
        
      {/* <!-- tabulka --> */}
      <div className="container mx-auto row ">
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
                  <td className="fntsize border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Máj</th>
                  <td className="fntsize  border">2500€</td>
                  <td className="fntsize  border">1600€</td>
                  <td className="fntsize  border">350€</td>
                  <td className="fntsize  border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Apríl</th>
                  <td className="fntsize  border">2400€</td>
                  <td className="fntsize  border">1500€</td>
                  <td className="fntsize  border">400€</td>
                  <td className="fntsize  border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Marec</th>
                  <td className="fntsize  border">2800€</td>
                  <td className="fntsize  border">1400€</td>
                  <td className="fntsize  border">600€</td>
                  <td className="fntsize  border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Február</th>
                  <td className="fntsize  border">3000€</td>
                  <td className="fntsize  border">1000€</td>
                  <td className="fntsize  border">800€</td>
                  <td className="fntsize  border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
                <tr>
                  <th scope="row" className="fntsize">Január</th>
                  <td className="fntsize  border">1800€</td>
                  <td className="fntsize  border">1350€</td>
                  <td className="fntsize  border">200€</td>
                  <td className="fntsize  border"><a href="#" className="page-link " data-bs-toggle="tooltip" data-bs-title="Upraviť"><i className="fa-solid fa-pen-to-square"></i></a></td>
                  <td className="fntsize  border border-end-0"><a href="#" className="page-link">Zobraziť</a></td>
                </tr>
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
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav active" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#">2</a>
                </li>
                <li className="page-item d-none d-md-block"><a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#">3</a></li>
                <li className="page-item fs-4 mx-2 text-primary">...</li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#">15</a>
                </li>
                <li className="page-item">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#">Next</a>
                </li>
                <li className="page-item d-none d-md-block">
                  <a className="page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav" href="#">Last</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
         
    </div>
  )
}
export default SpendingSummary