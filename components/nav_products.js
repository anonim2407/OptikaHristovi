import React from 'react'
import Link from 'next/link'

const NavProducts = () => {
  return (
    <>
      <li><Link href="/products/progresivni_ochila"><p>Прогресивни очила</p></Link></li>
      <li><Link href="/products/kontaktni_leshti"><p>Контактни лещи</p></Link></li>
      <li><Link href="/products/ofis_stakla"><p>Офис стъкла</p></Link></li>
      <li><Link href="/products/kontrol_na_kysogledstvo"><p>Констрол на късогледство</p></Link></li>
      <li><Link href="/products/slabo_zrenie"><p>Слабо зрение</p></Link></li>
      <li><Link href="/products/stomatologichni_hirurgichni_ochila"><p>Стоматологични/ Хирургични очила</p></Link></li>
      <li><Link href="/products/lekovodolazni_maski"><p>Леководолазни маски с диоптрична корекция</p></Link></li>
      <li><Link href="/products/ochila_za_pluvane"><p>Очила за плуване с диоптрична корекция</p></Link></li>
      <li><Link href="/products/maski_za_ski"><p>Маски за ски с корекция</p></Link></li>
    </>
  )
}

export default NavProducts
