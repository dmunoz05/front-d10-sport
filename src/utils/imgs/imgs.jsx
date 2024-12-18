import imageLoading from '@assets/img/logo_company_1.jpg'
import item1 from '@assets/img/photo_carousel_item1.png'
import item2 from '@assets/img/photo_carousel_item2.png'
import item3 from '@assets/img/photo_carousel_item3.png'
import item4 from '@assets/img/photo_carousel_item4.png'
import item5 from '@assets/img/photo_carousel_item5.png'
import team1 from '@assets/icons/logo_team_col.png'
import team2 from '@assets/icons/logo_team_mad.png'
import team3 from '@assets/icons/logo_team_par.png'
import team4 from '@assets/icons/logo_team_fra.png'
import team5 from '@assets/icons/logo_team_ar.png'

function ImageLoading() {
  return (
    <img className='relative object-cover w-full h-full' src={imageLoading} />
  )
}

function Item1() {
  return (
    <img src={item1} alt="Modelo" className='model__coleccion disabled-model__colleccion big-padding__colleccion '/>
  )
}

function Item2() {
  return (
    <img src={item2} alt="Modelo" className='model__coleccion disabled-model__colleccion small-padding__colleccion'/>
  )
}

function Item3() {
  return (
    <img src={item3} alt="Modelo" className='model__coleccion'/>
  )
}


function Item4() {
  return (
    <img src={item4} alt="Modelo" className='model__coleccion disabled-model__colleccion small-padding__colleccion'/>
  )
}

function Item5() {
  return (
    <img src={item5} alt="Modelo" className='model__coleccion disabled-model__colleccion big-padding__colleccion '/>
  )
}

function Team1() {
  return (
    <img src={team1} alt="Imagen de sponsors" className="img__sponsors" />
  )
}

function Team2() {
  return (
    <img src={team2} alt="Imagen de sponsors" className="img__sponsors" />
  )
}

function Team3() {
  return (
    <img src={team3} alt="Imagen de sponsors" className="img__sponsors" />
  )
}

function Team4() {
  return (
    <img src={team4} alt="Imagen de sponsors" className="img__sponsors" />
  )
}

function Team5() {
  return (
    <img src={team5} alt="Imagen de sponsors" className="img__sponsors" />
  )
}


export {
  ImageLoading,
  Team1,
  Team2,
  Team3,
  Team4,
  Team5,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5
}