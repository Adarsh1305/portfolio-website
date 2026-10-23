/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "portfolio-website",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      region: "eu-central-1",
      providers: {
        aws: {
         profile: "sst-static",
         region: "eu-central-1",
        },
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb");
  },
});
