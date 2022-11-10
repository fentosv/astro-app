import { favorites } from '../store'
import styles from './Favorites.module.scss'

export default function Favorites() {
  return favorites.value.length > 0 ? (
    <>
      <h1>Your favorite Pokemons!</h1>
      <ul className={styles.list}>
        {favorites.value.map((pokemon) => (
          <li className={styles.list__item}>{pokemon}</li>
        ))}
      </ul>
    </>
  ) : null
}
