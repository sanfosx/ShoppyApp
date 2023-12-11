
import { useEffect, useState, createContext } from "react";

export let AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState(null);
  let [userProfile, setUserProfile] = useState(null);
  let [favorites, setFavorites] = useState([])
  //Creo stado de carrito
  let [cart, setItemCart] = useState([])


  let signin = (newUser, callback) => {

    setUser(newUser);
    setUserProfile(fetchProfile(newUser));
    // Cargar favoritos desde localStorage al iniciar sesión
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    localStorage.setItem('ACCESS_TOKEN', user)
    localStorage.setItem('USER_PROFILE', JSON.stringify(userProfile))
    setIsLoggedIn(true);

    console.log(localStorage.getItem('ACCESS_TOKEN'))
    return callback();

  };

  let signout = (callback) => {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_PROFILE')
    setUser(null)
    setIsLoggedIn(false);

    return callback();

  };
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

  //Agregar carrito 
  const addItemCart = (item) => {
    const updatedItem = [...listitem, item];
    setItemCart(updatedItem);
    // Guardar carrito en localStorage
    localStorage.setItem('cart', JSON.stringify(updatedItem));
  };
  //Eliminar carrito
  const removeItemCart = (itemId) => {
    const updatedItem = cart.filter((item) => item.id !== itemId);
    setItemCart(updatedItem);
    // Actualizar favoritos en localStorage
    localStorage.setItem('cart', JSON.stringify(updatedItem));
  };

  console.log(userProfile)
  let value = { user, signin, signout, userProfile, isLoggedIn, favorites, addFavorite, removeFavorite , addItemCart, removeItemCart};



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


  const fetchProfile = async () => {
    if (user) {
      console.log("q tiene user",user)
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


    fetchProfile();
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider

