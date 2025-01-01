export async function POST(req: Request) {
  const baseUrl = "https://wwwcie.ups.com";
  const clientId = process.env["CLIENT_ID"];
  const clientSecret = process.env["CLIENT_SECRET"];

  console.log(req);

  //   const apiUrl = `${baseUrl}security/v1/oauth/token`;
  //   let tokenRes = await fetch(apiUrl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       "Authorization": "Basic " + btoa(`${clientId}:${clientSecret}`),
  //     },
  //     body: new URLSearchParams({
  //       grant_type: "client_credentials",
  //       scope: "<scope details>"
  //     }).toString(),
  //   });

  //   // 获取并解析响应数据（假设返回的数据是JSON格式）
  //   tokenRes = await tokenRes.json();
  //   console.log(tokenRes);

  //   if (tokenRes != null) {
  //     return Response.json({
  //       code: 1,
  //       message: "Access Denied.",
  //     });
  //   } else {
  //     return Response.json({
  //       code: 0,
  //       data: {
  //         token: tokenRes.access_token,
  //         expires_time:
  //           Number(tokenRes.issued_at) + Number(tokenRes.expires_in) * 1000,
  //       },
  //     });
  //   }

  return Response.json({
    code: 0,
    data: {
      url: baseUrl,
      id: clientId,
      token: clientSecret,
    },
  });
}
