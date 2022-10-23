/** @format */

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Authorization/ProtectedRoute.jsx";
import PublicRoute from "./components/Authorization/PublicRoute.jsx";
import WEB_PAGES from "./pages";
import PATH from "./utils/path";

function RouterConfig() {
  return (
    <Routes>
      {/* AUTH ROUTES START */}
      <Route
        path={PATH.LOGIN}
        element={<PublicRoute element={<WEB_PAGES.LOGIN.INDEX />} />}
      />
      <Route
        path={PATH.SIGN_UP}
        element={<PublicRoute element={<WEB_PAGES.LOGIN.SIGN_UP />} />}
      />
      <Route
        path={PATH.FORGET_PASSWORD}
        element={<PublicRoute element={<WEB_PAGES.LOGIN.FORGET_PASSWORD />} />}
      />
      <Route
        path={PATH.RESET_PASSWORD}
        element={<PublicRoute element={<WEB_PAGES.LOGIN.RESET_PASSWORD />} />}
      />
      {/* AUTH ROUTES END */}

      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_DASHBOARD}
        element={
          <ProtectedRoute
            element={<WEB_PAGES.CORPORATE_AND_INDIVIDUAL_DASHBOARD.INDEX />}
          />
        }
      />
      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_PROJECTS}
        element={
          <ProtectedRoute
            element={<WEB_PAGES.CORPORATE_AND_INDIVIDUAL_PROJECTS.INDEX />}
          />
        }
      />
      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS}
        element={
          <ProtectedRoute
            element={<WEB_PAGES.CORPORATE_AND_INDIVIDUAL_PROJECTS.PROJECT_DETAILS />}
          />
        }
      />
      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.CORPORATE_AND_INDIVIDUAL_PROJECTS.ASSET_DETAILS />
            }
          />
        }
      />
      <Route
        path={PATH.ASSET_DASHBOARD}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.CORPORATE_AND_INDIVIDUAL_PROJECTS.ASSET_DASHBOARD />
            }
          />
        }
      />

      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT.INDEX />
            }
          />
        }
      />
      <Route
        path={PATH.CORPORATE_AND_INDIVIDUAL_USER_DETAIL}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT.USER_DETAIL />
            }
          />
        }
      />
      {/* Admin Routes */}
      <Route
        path={PATH.ADMIN_DASHBOARD}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.ADMIN_DASHBOARD.INDEX />
            }
          />
        }
      />
      <Route
        path={PATH.ADMIN_ACTIVITY_LOG}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.ADMIN_ACTIVITY_LOG.INDEX />
            }
          />
        }
      />
      <Route
        path={PATH.ADMIN_REPORTS}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.ADMIN_REPORTS.INDEX />
            }
          />
        }
      />
      <Route
        path={PATH.ADMIN_PARAMETERS}
        element={
          <ProtectedRoute
            element={
              <WEB_PAGES.ADMIN_PARAMETERS.INDEX />
            }
          />
        }
      />
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NO_PAGE_FOUND />} />
    </Routes>
  );
}

export default RouterConfig;
