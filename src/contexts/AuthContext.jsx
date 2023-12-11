
import { useEffect, useState, createContext } from "react";

export let AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState(null);
  let [userProfile, setUserProfile] = useState(null);

  let signin = (newUser, callback) => {

    setUser(newUser);
    setUserProfile(fetchProfile(newUser));
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

  console.log(userProfile)
  let value = { user, signin, signout, userProfile, isLoggedIn };



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

