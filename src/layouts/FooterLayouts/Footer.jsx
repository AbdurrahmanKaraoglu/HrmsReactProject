import React from 'react'
import { Container } from 'semantic-ui-react'
import './FooterStyles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


export default function Footer() {
  return (
    <Container>

      <hr />
      <footer>
        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >
          <div className="me-5 d-none d-lg-block">
            <span>Sosyal Medyayla Bizimle Bağlantı Kurun:</span>
          </div>

          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>

          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>

          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>

          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>


          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>


          <a href="https://github.com/AbdurrahmanKaraoglu" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>


        </section>

        <section className="section">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="classH6">
                  <i className="fas fa-gem me-3"></i>İnsan Kaynakları Yönetim Sistemi
                </h6>
                <p>
                  Burada altbilgi içeriğinizi düzenlemek için satırları ve sütunları kullanabilirsiniz.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="classH6">
                  Employer
                </h6>
                <p>
                  <a href="#!" className="text-reset">Post a job</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Search Resumes</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Sign in</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="classH6">
                  Job Seeker
                </h6>
                <p>
                  <a href="#!" className="text-reset">Find jobs</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Create Resumes</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Sign in</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="classH6">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> Türkiye</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 0555 555 55 55</p>
                <p><i className="fas fa-print me-3"></i> 0555 555 55 55</p>
              </div>

            </div>

          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://www.linkedin.com/in/abdurrahman-karaoglu-405369207/"> Abdurrahman Karaoğlu</a>
        </div>

      </footer>

      {/* <span>Made by Abdurrahman Karaoglu - 2021</span> */}
      {/* <a
          href='https://github.com/AbdurrahmanKaraoglu'
          target='_blank'
          rel='noopener noreferrer'
          className='my-footer-link mr-2'
        >
          <Icon name='github' size='big' />
        </a>
        <a
          href='https://www.linkedin.com/in/abdurrahman-karaoglu-405369207/'
          target='_blank'
          rel='noopener noreferrer'
          className='my-footer-link mr-2'
        >
          <Icon name='linkedin' size='big' link />
        </a> */}


    </Container >
  )
}

