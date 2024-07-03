import ToggleTheme from './ToggleTheme'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div id={styles.navContainer}>
      <div id={styles.navLogo}>
        <img src="../../public/images/logo.svg" alt="logo" />
      </div>
      <div id={styles.navItems}>
        <select name="font-types" id={styles.fontTypes}>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans Serif</option>
          <option value="mono">Mono</option>
        </select>
        <ToggleTheme />
      </div>
    </div>
  )
}
export default Navbar