
import { useEffect, useState, createContext } from "react";
export let AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  let [cant, setCant] = useState()
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState(null);
  let [userProfile, setUserProfile] = useState(null);
  let [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
  let [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [])

  //cuando inicia sesion
  let signin = (newUser, callback) => {

    setUser(newUser);
    setUserProfile(fetchProfile(newUser));
    // Cargar favoritos desde localStorage al iniciar sesión
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart)
    setFavorites(storedFavorites);
    localStorage.setItem('ACCESS_TOKEN', user)
    localStorage.setItem('USER_PROFILE', JSON.stringify(userProfile))
    setIsLoggedIn(true);

    console.log(localStorage.getItem('ACCESS_TOKEN'))
    return callback();

  };
  //cuando cierra sesion se borran todos los datos
  let signout = (callback) => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_PROFILE')
    localStorage.removeItem("favorites")
    setUser(null)
    setIsLoggedIn(false);

    return callback();

  };

  //FAVORITOS
  const addFavorite = (favorite) => {
    const updatedFavorites = [...favorites, favorite];
    setFavorites(updatedFavorites);
    // Guardar favoritos en localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (favoriteId) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== favoriteId);
    setFavorites(updatedFavorites);
    // Actualizar favoritos en localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  //CARRITO
  const addToCart = (itemCart) => {

    const updatedCart = [...cart, itemCart];
    setCart(updatedCart);
    // Guardar favoritos en localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const updateCart = (item, op) => {
    console.log("que tiene item", item.cant)
    setCant(item.cant)
    const idx = cart.findIndex((e) => e.id === item.id)
    const aux = cart
    if (op === -1) {
      aux[idx].cant = cant - 1
    } else {
      aux[idx].cant = cant + 1
    }
    aux[idx].tot = aux[idx].cant * aux[idx].price
    setCart([...aux])
    localStorage.setItem('cart', JSON.stringify([...aux]))
  }

  const removeToCart = (itemCartId) => {
    const updatedCart = cart.filter((itemCart) => itemCart.id !== itemCartId);
    setCart(updatedCart);
    // Actualizar favoritos en localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  let value = {
    user,
    signin,
    signout,
    userProfile,
    isLoggedIn,
    favorites,
    addFavorite,
    removeFavorite,
    cart,
    addToCart,
    removeToCart,
    updateCart
  };

  //leer los datos de usuario de la api
  const fetchProfile = async () => {
    if (user) {
      console.log("q tiene user", user)
      // Simulación de solicitud de información del perfil del usuario
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserProfile(data);
        // eslint-disable-next-line no-unused-vars
        const storedUserProfile = localStorage.setItem('USER_PROFILE', JSON.stringify(data));
        // eslint-disable-next-line no-unused-vars
        const storedAccessToken = localStorage.setItem('ACCESS_TOKEN', user);

      }
    }
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('ACCESS_TOKEN');
    const storedUserProfile = localStorage.getItem('USER_PROFILE');

    console.log('leeeee', storedAccessToken, storedUserProfile)
    if (storedAccessToken && storedUserProfile) {
      setUser(storedAccessToken);
      setUserProfile(JSON.parse(storedUserProfile))
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {

    fetchProfile();

  }, [user]);



  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider

