'use client'

import styles from './Background.module.sass'
import Image from 'next/image'
import bg from '../../images/bg.jpg'
import { usePathname } from 'next/navigation'

export default function Background() {

  const pathname = usePathname()

  return (
    <div className={styles.background}>
      {(pathname === `/`) ? (
        <Image
        src={bg}
        alt='SOS Heroes'
        layout='fill'
        objectFit='cover'
    />
      ) : ""}
    </div>
  )
}
