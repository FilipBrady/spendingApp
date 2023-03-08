const AddExpense = () => {
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

      {/* <!-- karta --> */}
      <div className='container'>
        <div className='row px-2'>
          <div className='card col-md-6 offset-md-3'>
            <h1 className='m-auto mt-1'>Pridať:</h1>

            {/* <!-- karta v karte-formulár --> */}
            <div
              style={{ background: '#dbdbdb' }}
              className='card border-0 rounded-3 my-3 p-3'
            >
              <div className='row'>
                <div className=' col-12 col-md-4 offset-md-2 offset-lg-3'>
                  <div className='input-group align-items-baseline'>
                    <div className=''>
                      <input
                        className='form-check-input'
                        type='radio'
                        value=''
                        aria-label='Radio button for following text input'
                      />
                    </div>
                    <p className='fs-5 m-0 p-0 ms-1'>Príjem</p>
                  </div>
                </div>
                <div className=' col-12 col-md-4'>
                  <div className='input-group align-items-baseline'>
                    <div className=''>
                      <input
                        className='form-check-input'
                        type='radio'
                        value=''
                        aria-label='Radio button for following text input'
                      />
                    </div>
                    <p className='fs-5 m-0 p-0 ms-1'>Výdavok</p>
                  </div>
                </div>
              </div>
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
                <option selected>Vyber kategóriu</option>
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
                <span className='input-group-text'>Popis</span>
                <input
                  type='text'
                  placeholder='Čo si kúpil alebo dostal'
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                />
              </div>
              {/* <!-- pridanie suboru --> */}
              <div className='input-group mt-2'>
                <input
                  type='file'
                  className='form-control'
                  id='inputGroupFile01'
                />
              </div>

              {/* <!--button na uloženie položiek formulár--> */}
              <a href='./index.html' className='m-auto mt-3'>
                <button
                  type='button'
                  className='btn btn-success fs-4 px-2 py-1 rounded-3'
                >
                  Uložiť
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddExpense;
