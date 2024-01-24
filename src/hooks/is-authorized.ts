import { userSelectors } from '../store/slices/user'
import { useAppSelector } from './store'

export const useAuth = () => useAppSelector(userSelectors.isAuth)
