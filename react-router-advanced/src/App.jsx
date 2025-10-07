import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = false; // change to true to simulate login

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />

  <Route
    path="/profile"
    element={
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Profile />
      </ProtectedRoute>
    }
  >
    <Route path="details" element={<ProfileDetails />} />
    <Route path="settings" element={<ProfileSettings />} />
  </Route>

  <Route path="/blog/:id" element={<BlogPost />} />
</Routes>
