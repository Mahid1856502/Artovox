const PATH = {
  NOPAGE: "*",

  //  AUTH PATHS
  LOGIN: "/",
  SIGN_UP: "/login/signup",
  FORGET_PASSWORD: "/login/forget-password",
  RESET_PASSWORD: "/login/reset-password",
  // CORPORATE_AND_INDIVIDUAL_DASHBOARD: "/:role/dashboard",
  // CORPORATE_AND_INDIVIDUAL_PROJECTS: "/:role/projects",
  // CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS: "/:role/projects/assets/asset-details",
  // CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT: "/:role/user-management",
  CORPORATE_AND_INDIVIDUAL_DASHBOARD: "/dashboard",
  CORPORATE_AND_INDIVIDUAL_PROJECTS: "/projects",
  CORPORATE_AND_INDIVIDUAL_PROJECT_DETAILS: "/projects/project-details",
  CORPORATE_AND_INDIVIDUAL_ASSET_DETAILS: "/projects/assets/asset-details",
  ASSET_DASHBOARD: "/projects/assets/asset-details/asset-dashboard",
  CORPORATE_AND_INDIVIDUAL_USER_MANAGEMENT: "/user-management",
  CORPORATE_AND_INDIVIDUAL_USER_DETAIL: "/user-management/user-detail",

  // ADMIN PATHS

  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_ACTIVITY_LOG: "/admin/activity-log",
  ADMIN_REPORTS: "/admin/reports",
  ADMIN_PARAMETERS: "/admin/parameters",
};

export default PATH;
