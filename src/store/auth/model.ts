export interface AuthState {
  /* false -> user not logged
   * true -> user logged
   * null -> should call API
   */
  isLogged: boolean | null;
}
