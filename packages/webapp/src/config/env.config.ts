class EnvConfiguration {
  // APP
  static PORT: string = process.env.PORT || "3001";

  static NODE_ENV: Environment = (process.env.NODE_ENV as Environment) ;

  static BACKENDURL: string = process.env.BACKENDURL || "";

  static SESSION_SECRET: string = process.env.SESSION_SECRET || "";

  static RECAPTCHA_SITE_KEY: string = process.env.RECAPTCHA_SITE_KEY || "";

  static RECAPTCHA_SECRET_KEY: string = process.env.RECAPTCHA_SECRET_KEY || "";
}

enum Environment {
  DEVELOPMENT = "development",
  PRODUCTION = "production",
  TEST = "test",
  INTEGRATION = "integration"
}

export { EnvConfiguration };
