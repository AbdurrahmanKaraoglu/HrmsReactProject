import React from 'react'
import { Container } from 'semantic-ui-react'
import './FooterStyles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


export default function Footer() {
  return (
    <Container>
      <hr/>
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
                  İşveren
                </h6>
                <p>
                  <a href="#!" className="text-reset">İş İlanı Yayınla</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Özgeçmişleri Ara</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Oturum Aç</a>
                </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="classH6">
                  İş Arayan
                </h6>
                <p>
                  <a href="#!" className="text-reset">İş Bul</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Özgeçmiş Oluştur</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Oturum Aç</a>
                </p>

              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="classH6">
                  Listeler
                </h6>
                <p>
                  <a href="jobpositions" className="text-reset">İş Pozisyonlarını Listele</a>
                </p>
                <p>
                  <a href="employers" className="text-reset">İşverenleri Listele</a>
                </p>
                <p>
                  <a href="jobseekers" className="text-reset">İş Arayanları Listele</a>
                </p>
                <p>
                  <a href="activejobpostings" className="text-reset">Aktif İş İlanları</a>
                </p>
                <p>
                  <a href="activejobpostingssortedbydate" className="text-reset">Tarihe Göre Sıralanmış Aktif İş İlanları</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="classH6">
                  İletişim
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
    </Container >
  )
}