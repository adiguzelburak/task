/* eslint-disable jsx-a11y/alt-text */
import "../Style/footer.scss";
import telephone from "../images/telephone.png";
import qr from "../images/qr.png";
import apple from "../images/apple.svg";
import google from "../images/google.svg";
import logo from "../images/logo.svg";
import youtube from "../images/1.svg";
import instagram from "../images/2.svg";
import twitter from "../images/3.svg";
import facebook from "../images/4.svg";
import orange from "../images/5.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-apps">
        <img className="footer-telephone" src={telephone}></img>
        <div className="footer-download">
          <div className="footer-download-text">
            <img src={qr}></img>
            <div className="footer-download-content">
              <div className="footer-download-title">
                Çiçek Sepeti Mobil Uygulamayı İndirin
              </div>
              <div className="footer-download-label">
                Mobil Uygulamayı QR Kod ile İndirin.
              </div>
            </div>
          </div>
          <div className="footer-store">
            <img className="footer-store-img-google" src={google}></img>
            <img className="footer-store-img-apple" src={apple}></img>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-links-social-media">
          <img className="logo" src={logo}></img>
          <div className="footer-links-social-media-icons">
            <img className="footer-icon" src={twitter}></img>
            <img className="footer-icon" src={facebook}></img>
            <img className="footer-icon" src={orange}></img>
            <img className="footer-icon" src={instagram}></img>
            <img className="footer-icon" src={youtube}></img>
          </div>
          <div className="footer-links-social-media-text">
            CicekSepeti.com olarak kişisel verilerinizin gizliliğini
            önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
            kapsamında oluşturduğumuz aydınlatma metnine <u>buradan</u>
             {" "}ulaşabilirsiniz.
          </div>
        </div>
        <hr className="vertical-hr" />
        <div className="list">
          <li className="list-title">Faydalı Bilgiler</li>
          <li>Çiçek Bakımı</li>
          <li>Çiçek Eşliğinde Notlar</li>
          <li>Çiçek Anlamları</li>
          <li>Özel Günler</li>
          <li>Mevsimlere Göre Çiçekler</li>
          <li>BonnyFood Saklama Koşulları</li>
          <li>Site Haritası</li>
        </div>
        <div className="list">
          <li className="list-title">Kurumsal</li>
          <li>Hakkımızda</li>
          <li>Kariyer</li>
          <li>ÇiçekSepeti'nde Satış Yap</li>
          <li>Kurumsal Müşterilerimiz</li>
          <li>Reklamlarımız</li>
          <li>Basında Biz</li>
          <li>Kampanyalar</li>
          <li>Vizyonumuz</li>
        </div>
        <div className="list">
          <li className="list-title">İletişim</li>
          <li>Bize Ulaşın</li>
          <li>Sıkça Sorulan Sorular</li>
        </div>
        <div className="list">
          <li className="list-title">Gizlilik Sözleşmesi</li>
          <li>Mesafeli Satış Sözleşmesi</li>
          <li>Bilgi Toplumu Hizmetleri</li>
          <li>Gizlilik Sözleşmesi</li>
          <li>Ödeme Seçenekleri</li>
          <li>Hesap Bilgileri</li>
        </div>
      </div>
      <div className="footer-company-info">
        Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi
        mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek
        Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz.
        Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir
        yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan
        mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek,
        hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum
        günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için
        yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü,
        Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve
        lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü
        mutlu etmenin adresi; ÇiçekSepeti.
      </div>
      <div className="footer-copyright">
        Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş
      </div>
    </div>
  );
};

export default Footer;
