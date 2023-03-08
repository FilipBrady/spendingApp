const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-md bg-light sticky-top mb-2'>
      <div className='container'>
        <a href='#index.html' className='navbar-brand'>
          <img
            src='https://picsum.photos/30/30/'
            className='rounded-4 pe-1'
            alt='Logo'
          />
          Príjmy a výdavky
        </a>
        {/* <!--button pri menšm rozlíšení na toggler colapse--> */}
        <button
          className='navbar-toggler border-0'
          type='button'
          data-bs-target='#navigaciaId'
          data-bs-toggle='collapse'
          aria-controls='navigaciaId'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* <!--colapse section--> */}
        <div className='collapse navbar-collapse' id='navigaciaId'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a href='./info.html' className='nav-link'>
                Súhrn
              </a>
            </li>
            <li className='nav-item'>
              <a href='./podrobnosti.html' className='nav-link'>
                Podrobnosti
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#index.html'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Mesiac
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#index.html'>
                    Aktuálny
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#index.html'>
                    Minulý
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='./info.html'>
                    Staršie
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!--button na pridavanie položiek--> */}
          <a href='./add.html'>
            <button type='button' className='btn btn-success'>
              Pridať príjem/výdavok
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
