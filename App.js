import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import RiderPage from "./pages/RiderPage";
import DriverPage from "./pages/DriverPage";
import PaymentPage from "./pages/PaymentPage";
// import GoogleMapView from "./pages/GoogleMapView"; // optional

export default function App() {
  return (
    <div>
      <nav style={{ padding: 12, display: "flex", gap: 12 }}>
        <Link to="/">Rider</Link>
        <Link to="/driver">Driver</Link>
        <Link to="/payment">Payment</Link>
        {/* <Link to="/gmap">Google Map</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<RiderPage />} />
        <Route path="/driver" element={<DriverPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        {/* <Route path="/gmap" element={<GoogleMapView />} /> */}
      </Routes>
    </div>
  );
}
