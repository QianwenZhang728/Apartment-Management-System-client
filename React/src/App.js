import React, { useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { Nav } from "./components/layout/nav";
import { Index } from "./pages";
import { Amenities } from "./pages/amenities";
import { FloorPlan } from "./pages/floorPlan";
import { CovidReport } from "./pages/covidReport";
import CreateAdminProfile from "./components/Admin/createAdminProfile";
import "./styles.css";
import "./tailwind.css";
import AdminManagement from "./components/Admin/AdminManagement";
import LogInTemplate from "./components/Admin/LogInTemplate";
import updateAdminProfile from "./components/Admin/updateAdminProfile";
import ResidentLogin from "./components/User/ResidentLogin";
import ResidentSignUp from "./components/User/ResidentSignUp";
import ResidentProfile from "./components/User/ResidentProfile";
import AdminContacts from "./components/User/AdminContacts";
import ResidentPayments from "./components/User/ResidentPayments";
import UnitManagement from "./components/Admin/UnitManagement";
import ResidentManagement from "./components/Admin/ResidentManagement";
import AdminProfileCard from "./components/User/AdminProfileCard";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Nav user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/floor-plan" component={FloorPlan} />
        <Route exact path="/amenities" component={Amenities} />
        <Route exact path="/covid/:state" component={CovidReport} />
        <Route exact path="/admin" component={LogInTemplate} />
        <Route exact path="/admin/profile" component={CreateAdminProfile} />
            <Route
              exact
              path={["/admin/:userId", "/admin/:userId/resident/management"]}
              component={ResidentManagement}
            />
            <Route
              exact
              path="/admin/:userId/profile"
              component={updateAdminProfile}
            />
            <Route
              exact
              path="/admin/:userId/admin/management"
              component={AdminManagement}
            />
            <Route
              exact
              path={[
                "/admin/:userId/plans",
                "/admin/:userId/plans/:planId",
                "/admin/:userId/plans/:planId/units",
              ]}
              component={UnitManagement}
            />
            <Route
              exact
              path="/resident/:userId/profile"
              component={ResidentProfile}
            />
            <Route
              exact
              path="/resident/:userId/payments"
              component={ResidentPayments}
            />
            <Route
              exact
              path="/resident/:userId/adminContacts"
              component={AdminContacts}
            />
          <Route
              exact
              path="/profile/:adminId"
              component={AdminProfileCard}
          />
        <Route exact path="/resident/login" component={ResidentLogin} />
        <Route exact path="/resident/signUp" component={ResidentSignUp} />

        <Redirect to="/" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
