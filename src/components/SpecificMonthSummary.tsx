const SpecificMonthSummary = () => {
  return (
    <div>
      {/* <!-- talcidlo domov --> */}
      <div className='container my-3'>
        <a href='./index.html'>
          <button className='btn bg-light p-1 py-0 rounded-4 align-middle'>
            <h1 className='fs-4 mb-0'>
              <i className='fa-sharp fa-solid fa-house fs-5 px-1 py-1'></i>Domov
            </h1>
          </button>
        </a>
      </div>

      <h1 className='text-center px-2'>
        Podrobnosti za mesiac: <span id='akt-mesiac'>August</span>
      </h1>

      <div className='container'>
        <h3>Filter</h3>
        <form>
          <div className='row'>
            <div className='form-group col-12 col-md-4'>
              <label htmlFor='typ'>Typ</label>
              <select id='typ' className='form-control'>
                <option selected>Výber</option>
                <option value='prijem'>Príjem</option>
                <option value='vydavok'>Výdavok</option>
              </select>
            </div>

            <div className='form-group col-12 col-md-4'>
              <label htmlFor='category'>Typ</label>
              <select id='category' className='form-control'>
                <option selected>Kategória</option>
                <option value='1'>Jeldo</option>
                <option value='2'>Doprava</option>
                <option value='3'>Oblečenie</option>
                <option value='4'>Domácnosť</option>
              </select>
            </div>

            <div className='form-group col-12 col-md-4'>
              <label htmlFor='cena'>Cena</label>
              <select id='cena' className='form-control'>
                <option selected>Zoradiť od:</option>
                <option>Od najmenšej</option>
                <option>Od najväčšej</option>
              </select>
            </div>
            <button
              className='btn btn-primary col-2 offset-5 mt-3'
              type='submit'
            >
              Filtruj
            </button>
          </div>
        </form>
      </div>

      {/* <!-- tabulka --> */}
      <div className='container mx-auto row '>
        <div className='col-12 col-md-10 offset-md-1 mx-auto my-3'>
          <div className='card table-responsive text-center'>
            <table className='table  table-striped '>
              <thead>
                <tr>
                  <th scope='col' className='fntsize  border'>
                    Ďen
                  </th>
                  <th scope='col' className='fntsize  border'>
                    Výdavok/ <br className='d-sm-none p-0 m-0' />
                    Príjem
                  </th>
                  <th scope='col' className='fntsize  border'>
                    kategória
                  </th>
                  <th scope='col' className='fntsize  border-end-0'></th>
                  <th scope='col' className='fntsize  border-bottom-0'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row' className='fntsize'>
                    5.
                  </th>
                  <td className='fntsize  border'>70€</td>
                  <td className='fntsize  border'>Doprava</td>
                  <td className='fntsize border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='fntsize'>
                    7
                  </th>
                  <td className='fntsize  border'>10€</td>
                  <td className='fntsize  border'>Jedlo</td>
                  <td className='fntsize  border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='fntsize'>
                    15
                  </th>
                  <td className='fntsize  border'>85€</td>
                  <td className='fntsize  border'>Oblečenie</td>
                  <td className='fntsize  border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='fntsize'>
                    20
                  </th>
                  <td className='fntsize  border'>95€</td>
                  <td className='fntsize  border'>Domácnosť</td>
                  <td className='fntsize  border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='fntsize'>
                    22
                  </th>
                  <td className='fntsize  border'>55€</td>
                  <td className='fntsize  border'>Jedlo</td>
                  <td className='fntsize  border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope='row' className='fntsize'>
                    25
                  </th>
                  <td className='fntsize  border'>25€</td>
                  <td className='fntsize  border'>Zábava</td>
                  <td className='fntsize  border'>
                    <a
                      href='#index'
                      className='page-link '
                      data-bs-toggle='tooltip'
                      data-bs-title='Upraviť'
                    >
                      <i className='fa-solid fa-pen-to-square'></i>
                    </a>
                  </td>
                  <td className='fntsize  border border-end-0'>
                    <a href='./showitem.html' className='page-link'>
                      Zobraziť
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <!--Navigacie cez cisla dole pod tabulkou--> */}
            <nav className='w-75 m-auto '>
              <ul className='pagination justify-content-center'>
                <li className='page-item d-none d-md-block disabled'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav '
                    href='#index'
                  >
                    First
                  </a>
                </li>
                <li className='page-item disabled'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    Previous
                  </a>
                </li>
                <li className='page-item'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav active'
                    href='#index'
                  >
                    1
                  </a>
                </li>
                <li className='page-item'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    2
                  </a>
                </li>
                <li className='page-item d-none d-md-block'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    3
                  </a>
                </li>
                <li className='page-item fs-4 mx-2 text-primary'>...</li>
                <li className='page-item'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    15
                  </a>
                </li>
                <li className='page-item'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    Next
                  </a>
                </li>
                <li className='page-item d-none d-md-block'>
                  <a
                    className='page-link border-0 rounded-3 me-md-1  me-0 fntsize fntsize-nav'
                    href='#index'
                  >
                    Last
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecificMonthSummary;
