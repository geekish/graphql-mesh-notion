const fetch = require('node-fetch')
const rest_api_customer = "https://magento2.landofcoder.com/index.php/rest/default/V1/integration/customer/token"
const rest_api_admin = "https://magento2.landofcoder.com/index.php/rest/default/V1/integration/admin/token"
const default_rest_api = "https://magento2.landofcoder.com/index.php/rest/default/schema?services=all"

let token = '';
module.exports = async (url, args, context) => {
  if (context) {
    if (url === rest_api_customer) {
      const body = JSON.parse(args.body)
      const result = await context.Lof.Mutation.integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost(
        {
          args: {
            v1IntegrationCustomerTokenInput: {
              username: body.username,
              password: body.password,
            },
          },
        }
      );
      token = result
    }
    if (url === rest_api_admin) {
      const body = JSON.parse(args.body)
      const result = await context.Lof.Mutation.integrationAdminTokenServiceV1CreateAdminAccessTokenPost(
        {
          args: {
            v1IntegrationAdminTokenInput: {
              username: body.username,
              password: body.password,
            },
          },
        }
      );
      token = result
    }
  }
  if (url === default_rest_api) {
    args.headers['authorization'] = `Bearer zyfmbzybg79ulzddasuyrjovrxnmaixy`;
  } else {
    if (url !== rest_api_customer || url !== rest_api_admin) {
      if (token) {
        args.headers['authorization'] = `Bearer ` + token;
      } else {
        args.headers['authorization'] = `Bearer `;
      }
    }
  }

  return await fetch(url, args)
}