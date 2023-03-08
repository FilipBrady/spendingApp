const ExpenseInfo = () => {
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

      <h1 className='text-center px-2'>Informácie o položke</h1>

      {/* <!-- karta --> */}
      <div className='container-fluid'>
        <div className='row px-3'>
          <div className='card col-12 col-md-8 offset-md-2'>
            {/* <!-- karta v karte-showitem --> */}
            <div
              style={{ background: '#dbdbdb' }}
              className='card border-0 rounded-3 my-3 p-3'
            >
              <div className='row'>
                <div className='col-12 col-md-6 my-4'>
                  <h4>
                    <span id='vydorprij'>Výdavok:</span>
                  </h4>
                  <p className='m-0'>
                    Dátum: <span id='date'>XX.XX.202X</span>
                  </p>
                  <p className='m-0'>
                    Kategória: <span id='category'>Jedlo</span>
                  </p>
                  <p className='m-0'>
                    Cena: <span id='cost'>30</span>€
                  </p>
                  <p className='m-0'>
                    Popis:{' '}
                    <span id='description'>
                      Kúpil som si jedlo lebo som bol hladoš
                    </span>
                  </p>

                  <div
                    className='btn-group mt-4'
                    role='group'
                    aria-label='Basic example'
                  >
                    <button
                      type='button'
                      className='btn btn-outline-primary fw-semibold'
                      data-bs-toggle='modal'
                      data-bs-target='#edit'
                    >
                      Upraviť
                    </button>
                    <button
                      type='button'
                      className='btn btn-outline-primary fw-semibold'
                      data-bs-toggle='modal'
                      data-bs-target='#addphoto'
                    >
                      Pridať fotku
                    </button>
                  </div>
                </div>

                {/* <!-- Modal upraviť --> */}
                <div
                  className='modal fade'
                  id='edit'
                  tabIndex={-1}
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          Upraviť
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body'>
                        {/* <!-- pridanie ceny --> */}
                        <div className='input-group mt-2'>
                          <span className='input-group-text'>Cena</span>
                          <input
                            type='text'
                            placeholder='€'
                            className='form-control'
                            aria-label='Amount (to the nearest dollar)'
                          />
                        </div>
                        {/* <!-- kategoria --> */}
                        <select
                          className='form-select mt-2'
                          aria-label='Default select example'
                        >
                          <option selected>Vyber novú kategóriu</option>
                          <option value='1'>Jedlo</option>
                          <option value='2'>Doprava</option>
                          <option value='3'>Domácnosť</option>
                        </select>
                        {/* <!-- dátum --> */}
                        <div className='input-group mt-2'>
                          <span className='input-group-text'>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H7V2H9V4H15V2H17V4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 18H15V16H17V18ZM13 18H11V16H13V18ZM9 18H7V16H9V18ZM17 14H15V12H17V14ZM13 14H11V12H13V14ZM9 14H7V12H9V14Z'
                                fill='black'
                              />
                            </svg>
                          </span>
                          <input
                            type='Date'
                            placeholder='€'
                            className='form-control'
                            aria-label='Amount (to the nearest dollar)'
                          />
                        </div>
                        {/* <!-- pridanie popisu --> */}
                        <div className='input-group mt-2'>
                          <span className='input-group-text'>Nový popis</span>
                          <input
                            type='text'
                            placeholder='Čo si kúpil alebo dostal'
                            className='form-control'
                            aria-label='Amount (to the nearest dollar)'
                          />
                        </div>
                        {/* <!-- pridanie suboru --> */}
                        <p className='p-0 m-0 mt-2'>Odstrániť fotku:</p>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckDefault'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckDefault'
                          >
                            Prvá fotka
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckChecked'
                            checked
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckChecked'
                          >
                            Druhá fotka
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='flexCheckChecked'
                            checked
                          />
                          <label
                            className='form-check-label'
                            htmlFor='flexCheckChecked'
                          >
                            Tretia fotka
                          </label>
                        </div>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-bs-dismiss='modal'
                        >
                          Zavrieť
                        </button>
                        <button type='submit' className='btn btn-primary'>
                          Uložiť
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Modal add photo--> */}
                <div
                  className='modal fade'
                  id='addphoto'
                  tabIndex={-1}
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                          Upraviť
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body'>
                        {/* <!-- pridanie suboru --> */}
                        <div className='input-group mt-2'>
                          <input
                            type='file'
                            className='form-control'
                            id='inputGroupFile01'
                          />
                        </div>
                      </div>
                      <div className='modal-footer'>
                        <button
                          type='button'
                          className='btn btn-secondary'
                          data-bs-dismiss='modal'
                        >
                          Zavrieť
                        </button>
                        <button type='submit' className='btn btn-primary'>
                          Uložiť
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- carousel fotiek */}
                {/* <div
                  id='carouselExampleCaptions'
                  className='carousel slide col-12 col-md-6 mt-4 mt-md-0'
                  data-bs-ride='false'
                >
                  <div className='carousel-indicators'>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleCaptions'
                      data-bs-slide-to='0'
                      className='active'
                      aria-current='true'
                      aria-label='Slide 1'
                    ></button>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleCaptions'
                      data-bs-slide-to='1'
                      aria-label='Slide 2'
                    ></button>
                    <button
                      type='button'
                      data-bs-target='#carouselExampleCaptions'
                      data-bs-slide-to='2'
                      aria-label='Slide 3'
                    ></button>
                  </div>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img
                        src='https://picsum.photos/300/300/'
                        className='d-block w-100'
                        alt='Fotka niečoho i guess'
                      />
                      <div className='carousel-caption'>
                        <h5>Predná strana bločku</h5>
                        <p>Bloček za jedlo</p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img
                        src='https://picsum.photos/300/300/'
                        className='d-block w-100'
                        alt='Fotka niečoho i guess'
                      />
                      <div className='carousel-caption'>
                        <h5>Druhá strana</h5>
                        <p>Bloček dva</p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img
                        src='https://picsum.photos/300/300/'
                        className='d-block w-100'
                        alt='Fotka niečoho i guess'
                      />
                      <div className='carousel-caption'>
                        <h5>Jedlo</h5>
                        <p>Na tomto som si pochutnal</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className='carousel-control-prev'
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide='prev'
                  >
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Previous</span>
                  </button>
                  <button
                    className='carousel-control-next'
                    type='button'
                    data-bs-target='#carouselExampleCaptions'
                    data-bs-slide='next'
                  >
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'
                    ></span>
                    <span className='visually-hidden'>Next</span>
                  </button>
                </div> */}
                {/* --> */}

                {/* <!-- prílohy a fotky k tomu --> */}
                <div className='col-12 col-md-6'>
                  <div className='row'>
                    <div className='col-4 col-md-12 my-4'>
                      <div className='list-group' id='list-tab' role='tablist'>
                        <a
                          className='list-group-item list-group-item-action active'
                          id='list-fakt-pred'
                          data-bs-toggle='list'
                          href='#list-fakt'
                          role='tab'
                          aria-controls='list-fakt'
                        >
                          Faktúra predná strana
                        </a>
                        <a
                          className='list-group-item list-group-item-action'
                          id='list-fakt-dva'
                          data-bs-toggle='list'
                          href='#list-fakt-zad'
                          role='tab'
                          aria-controls='list-fakt-zad'
                        >
                          Faktúra zadná strana
                        </a>
                        <a
                          className='list-group-item list-group-item-action'
                          id='list-photo'
                          data-bs-toggle='list'
                          href='#list-jedlo'
                          role='tab'
                          aria-controls='list-jedlo'
                        >
                          Fotka jedla
                        </a>
                      </div>
                    </div>

                    <div className='col-8 col-md-12'>
                      <div className='tab-content' id='nav-tabContent'>
                        <div
                          className='tab-pane fade show active'
                          id='list-fakt'
                          role='tabpanel'
                          aria-labelledby='list-fakt-pred'
                        >
                          <img
                            src='./faktura-vzor.png'
                            alt='Faktúra'
                            width='100%'
                            height='auto'
                          />
                        </div>
                        <div
                          className='tab-pane fade'
                          id='list-fakt-zad'
                          role='tabpanel'
                          aria-labelledby='list-fakt-dva'
                        >
                          <img
                            src='./blocek.jpg'
                            alt='Faktúra dva'
                            width='100%'
                            height='auto'
                          />
                        </div>
                        <div
                          className='tab-pane fade'
                          id='list-jedlo'
                          role='tabpanel'
                          aria-labelledby='list-photo'
                        >
                          <img
                            src='./chlieb.jpg'
                            alt='Jedlo'
                            width='100%'
                            height='auto'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpenseInfo;
