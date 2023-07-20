import './routescss/Footer.css';

export default function Footer () {
  return(
    <div className="Footer row">
      <div className="col-sm-4"> 
        <p>Celular</p>
        <p>8715635 - 3166768219 - 3142139674</p>
      </div>
      <div className="col-sm-4"> 
        <p>Dirección</p>
        <p>Cra 1 # 2A-01 Avenida Circunvalar</p>
        <p>Bajo el monumento de la Gaitana</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6323949523594!2d-75.29474129043557!3d2.9216033544990263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b747eff7d9b29%3A0xfc2d039be0759608!2sMuseo%20Prehist%C3%B3rico%20Huilassik%20Park!5e0!3m2!1ses!2sco!4v1689625154284!5m2!1ses!2sco" width="400" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="col-sm-4"> 
        <p>Correo</p>
        <p>garrido.1964@hotmail.com</p>
      </div>
    </div>
  );
}